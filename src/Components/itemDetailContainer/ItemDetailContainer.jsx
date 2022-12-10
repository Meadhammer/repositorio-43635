import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import {mock} from '../../productMock'

const ItemDetailContainer = () => {
    
    const { itemId } = useParams()
    console.log(itemId)
    console.log(mock)

    const [product, setProduct] = useState({})    

    useEffect ( ()=>{
        const productSelected = mock.find( item => item.id === parseInt(itemId) )
        setProduct(productSelected)
    }, [itemId])
    console.log(product)

    return (
        <div className='container'>
            <ItemDetail  item={product} />
        </div>
    )
}

export default ItemDetailContainer