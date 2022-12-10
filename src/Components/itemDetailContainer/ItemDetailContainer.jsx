import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    
    const { itemId } = useParams()

    const [product, setProduct] = useState({})

    const [stock, setStock] = useState([])

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
            console.log(res)
            setStock(res)
        })
        .catch(err=>console.log(err));
    }

    useEffect (()=>{
        getProducts();
        console.log(stock)
        const itemSelected = stock.find(
            (item) => item.id === parseInt(itemId)
        )
        setProduct(itemSelected)
        console.log("Selected: " + product)
    }, [itemId])

    return (
        <div className='container'>
            <ItemDetail key={product.id} item={product} />
        </div>
    )
}

export default ItemDetailContainer