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
        <h2>{counter}</h2>

        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <Link to="/cart" onClick={() => onAdd(counter) }>agregar al carrito</Link>
    </div>
  )
}

export default Counter