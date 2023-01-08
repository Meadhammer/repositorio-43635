import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    
    const {cart, clear} = useContext(CartContext)
    
    console.log(cart)

  return (
    <div>
        <div>
        {
            cart.map(item => (
                <div key={item.id}>
                    <h2>Producto: {item.nombre}</h2>
                    <h4>Precio: ${item.precio}.-</h4>
                    <h4>Cantidad: {item.quantity}</h4>
                </div>
            ))
        }
        </div>
        <div>
            <button onClick={() => clear()}>Vaciar Carrito</button>
            <Link to="/category">Seguir comprando</Link>
        </div>
    </div>
  )
}

export default Cart