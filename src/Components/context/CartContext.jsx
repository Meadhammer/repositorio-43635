
import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([])

    const addItem = ( prod ) => {
        if ( isinCart(prod) ) {
            let arr = cart.map( element => {
                if(element.id === prod.id) {
                    let newElement = {
                        ...element,
                        quantity: prod.quantity + element.quantity
                    }
                    return newElement
                }else {
                    return element
                }
            })
            setCart(arr)
        }else{
            setCart( [ ...cart, prod ] )
        }
    }

    const isinCart = (element) => {
        return cart.some(e => e.id === element.id)
    }

    const clear = () => {
        setCart([])
    }

    const data = {
        cart,
        addItem,
        clear
    }

  return (
    <CartContext.Provider value={data}>
        { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider