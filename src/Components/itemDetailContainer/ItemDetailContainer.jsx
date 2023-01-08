import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { getDoc, doc, collection } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const ItemDetailContainer = () => {
    
    const { itemId } = useParams()

    const [product, setProduct] = useState({})    

    useEffect ( ()=>{

        const itemCollection = collection( db, "Products" )

        const ref = doc( itemCollection, itemId )

        getDoc(ref)
        .then( res => {
            setProduct(
                {
                id: res.id,
                ...res.data()
                }
            )
        })

    }, [itemId])

    return (
        <div className='container'>
            <ItemDetail  item={product} />
        </div>
    )
}

export default ItemDetailContainer