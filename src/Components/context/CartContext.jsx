
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

    const getTotalQuantity = () => {
        const cartQuantity = cart.reduce((acc, element) => {
            return acc + element.quantity
        }, 0)
    
        return cartQuantity
      }
    
    const getTotalPrice = () => {
        const total = cart.reduce((acc, element) => {
          return acc + element.precio * element.quantity
        }, 0)
    
        return total
    }
    
    const deleteProductById = (id) => {
        const newCart = cart.filter((e) => e.id !== id)
    
        setCart(newCart)
    }

    const data = {
        cart,
        addItem,
        clear,
        getTotalQuantity,
        getTotalPrice,
        deleteProductById
    }

  return (
    <CartContext.Provider value={data}>
        { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider