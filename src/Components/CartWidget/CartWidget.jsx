import './CartWidget.scss'
import {BsCart} from "react-icons/bs"

export const CartWidget = () => {

    return (
        <div className="widget">
            <BsCart size={50} color={"#943712"} />
            <span className='widget_span'>1</span>
        </div>
    )
}
