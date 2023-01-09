import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import "./Cart.scss"
import Form from '../form/Form'

const Cart = () => {
    
    const {cart, clear, getTotalPrice, getTotalQuantity, deleteProductById} = useContext(CartContext)

    const [buy, setBuy] = useState(false)
    
    if (buy) {
        return (
            <Form cart={cart} clear={clear} getTotalPrice={getTotalPrice} />
        )
    }

  return (
    <div className='cartContainer'>
        <div className='cartItems'>
        {
            cart.map(item => (
                <div key={item.id} className="p-3">
                    <div className="card" style={{width: "13rem",}}>
                        <img src={item.imagenes[0]} className="card-img-top" alt={`pipa${item.id}`} />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">Precio: <b>${item.precio}</b></p>
                            <h2>Cantidad: {item.quantity}</h2>
                            <button className="boton" onClick={() => deleteProductById(item.id)}>Eliminar artículo</button>
                        </div>
                    </div>
                </div>
            ))
        }
        {cart.length < 1 && (<h2>El Carrito está vacío</h2>)}
        </div>
        <div className='container p-2 cartDetail'>
            <h2 className='p-2'>Mi Carrito</h2>
            <h3>
                Artículos agregados: {cart.length > 0 ? cart.length : (<span className="badge rounded-pill text-bg-warning">"No hay artículos en el carrito"</span>)}
            </h3>
            <h3>
                Unidades totales: {getTotalQuantity() > 0 ? getTotalQuantity() : (<span className="badge rounded-pill text-bg-warning">"No hay productos en el carrito"</span>)}
            </h3>
            <h3>
                Precio total: {getTotalPrice() > 0 ? getTotalPrice() : (<span className="badge rounded-pill text-bg-warning">"Es imposible calcular el precio"</span>)}
            </h3>
            {
                cart.length > 0 && (
                    <div>
                        <button onClick={() => setBuy(true)} className="boton">Comprar</button>
                        <button onClick={() => clear()} className="boton">Vaciar Carrito</button>
                    </div>
                )
            }
            <Link to="/category" className='boton'>Seguir comprando</Link>
        </div>
    </div>
  )
}

export default Cart