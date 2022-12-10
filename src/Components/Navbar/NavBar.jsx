
import './NavBar.scss'
import { CartWidget } from '../cartWidget/CartWidget'
import {Link} from "react-router-dom"

export const NavBar = () => {

    return (
        <header className="encabezado bgMed">
            <div id="top" className="encabezado__logo">
                <h1 className="logo__texto1">Tripel Pipes</h1>
                <Link to="/" className="animate__animated animate__backInRight animate__delay-1s logo__texto2">Pipas artesanales en maderas alternativas</Link>
            </div>
            <nav className="encabezado__menu">            
                <ul>
                    <input type="checkbox" name="" id="checkbox_toggle" className='checkbox_toggle'></input>
                    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu animate__animated animate__backInDown">
                        <Link to="/category" className='menuBtn'>Todas las Pipas</Link>
                        <Link to="/category/lectura" className='menuBtn'>Pipas de Lectura</Link>
                        <Link to="/category/bolsillo" className='menuBtn'>Pipas de Bolsillo</Link>
                    </div>
                </ul>
            </nav>
            <Link to="/cart" className="encabezado__carrito">
                <CartWidget />
            </Link>
        </header>
    )
}