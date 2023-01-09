import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"

const Counter = ({stock, initial = 0, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    const increment = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

  return (
    <div>
        {
            stock > 0 ? (
                <div>
                    <div>
                        <h2 className='p-1'><span className='p-3'><button onClick={increment} className="btn">+</button></span>{counter}<span className='p-3'><button onClick={decrement} className="btn">-</button></span></h2>
                    </div>
                    <Link to="/cart" onClick={ () => onAdd(counter) } className="boton">agregar al carrito</Link>
                </div>
            ) : (
                <div>
                    <h2 style={{color: "red", font: "Lobster"}}>Agotado</h2>
                </div>
            )
        }
    </div>
  )
}

export default Counter