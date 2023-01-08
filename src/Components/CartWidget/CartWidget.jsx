import './CartWidget.scss'
import {BsCart} from "react-icons/bs"
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

    const {cart} = useContext(CartContext)

    return (
        <div className="widget">
            <BsCart size={50} color={"#943712"} />
            <span className='widget_span'>{cart.length}</span>
        </div>
    )
}
