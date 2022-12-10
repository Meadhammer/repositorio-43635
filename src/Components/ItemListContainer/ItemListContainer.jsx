import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ItemList from '../itemList/ItemList'
import {mock} from '../../productMock'

export const ItemListContainer = (props) => {
   
    const [stock, setStock] = useState([])

    const [items, setItems] = useState([])

    const { categoryId } = useParams()

    useEffect (()=>{
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(mock)
            }, 2000)
          })
      
          task
            .then((res) => {
                setStock(res)
                console.log("Stock recuperado: " + stock)
            })
            .catch((err) => {
              console.log("se rechazo")
            })
        
        const stockFiltered = stock.filter(
            (item) => item.categoria === categoryId
          )
        setItems(stockFiltered)
    }, [categoryId])

    return (
        <div className="itemListContainer">
            <h2 className='col-12'>{ props.greeting } {categoryId && categoryId} </h2>
            <ItemList items={categoryId ? items : stock} />
        </div>   
    )
}

