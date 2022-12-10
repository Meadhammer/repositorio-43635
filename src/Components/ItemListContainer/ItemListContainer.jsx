import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ItemList from '../itemList/ItemList'

export const ItemListContainer = (props) => {
   
    const [stock, setStock] = useState([])

    const [items, setItems] = useState([])

    const { categoryId } = useParams()

    const getProducts=()=>{
        fetch("productMock.json"
        , {
            headers : { 
                "Content-Type": "application/json",
                "Accept": "application/json"
           }
        } )
        .then((response) => response.json())
        .then((res) => {
            setTimeout(() => {
                console.log(res);
                setStock(res);
            }, 2000);
        })
        .catch(err=>console.log(err));
    }

    useEffect (()=>{
        getProducts();
        console.log(stock)
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

