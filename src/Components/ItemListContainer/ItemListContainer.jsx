import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ItemList from '../itemList/ItemList'
import { getDocs, collection, query, where} from "firebase/firestore"
import { db } from "../../firebaseConfig"

export const ItemListContainer = (props) => {

    const [items, setItems] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const { categoryId } = useParams()

    useEffect (()=>{

      setIsLoading(true)

      const itemCollection = collection(db, "Products")

      if ( categoryId ) {
        const q = query( itemCollection, where( "categoria", "==", categoryId ) )
        getDocs(q)
        .then( res => {
          const products = res.docs.map( product => {
            return {
              id: product.id,
              ...product.data()
            }
          })
          setItems(products)
          setIsLoading(false)
        })
        .catch((err) => console.log(err))
      }else {
        getDocs(itemCollection)
        .then( res => {
          const products = res.docs.map( product => {
            return {
              id: product.id,
              ...product.data()
            }
          })
          setItems(products)
          setIsLoading(false)
        })
        .catch((err) => console.log(err))
      }

    }, [categoryId])

    return (
        <div className="itemListContainer pt-2">
            {isLoading ? (
              <h2>Loading...</h2>
            ) : (
              <div>
                <h2 className='col-12'>{ props.greeting } {categoryId && categoryId} </h2>
                <ItemList items={items} />
              </div>
            )}
        </div>   
    )
}

