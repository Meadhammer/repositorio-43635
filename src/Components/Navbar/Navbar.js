
import './Navbar.scss'
import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {

    return (
        <header className="encabezado bgMed">
            <div id="top" className="encabezado__logo">
                <h1 className="logo__texto1">Tripel Pipes</h1>
                <h3 className="animate__animated animate__backInRight animate__delay-1s"><a href="/" className="logo__texto2">Pipas artesanales en maderas alternativas</a></h3>
            </div>
            <nav className="encabezado__menu">            
                <ul>
                    <input type="checkbox" name="" id="checkbox_toggle" className='checkbox_toggle'></input>
                    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu animate__animated animate__backInDown">
                        <li><a href="../index.html">Inicio</a></li>
                        <li><a href="./catalogo.html">Catálogo</a></li>
                        <li><a href="./empresa.html">Quienes Somos</a></li>
                        <li><a href="./blog.html">Comunidad</a></li>
                        <li><a href="./Formulario.html">Contacto</a></li>
                    </div>
                </ul>
            </nav>
            <div className="encabezado__carrito">
                <CartWidget />
            </div>
        </header>
    )
}