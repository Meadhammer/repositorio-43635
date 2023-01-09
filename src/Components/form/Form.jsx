import React from 'react'
import { useState } from "react"
import { addDoc, doc, updateDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { Link } from 'react-router-dom'
import "./Form.scss"
import { useEffect } from 'react'

const Form = ( { cart, clear, getTotalPrice } ) => {

    const [ buyer, setBuyer ] = useState( { name: "", phone: "", email: "", emailVer: "" } )

    const [ ticket, setTicket ] = useState(null)

    const [ verify, setVerify ] = useState(false)

    const [ verifyEmail, setVerifyEmail ] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
    
        const order = {
          buyer: buyer,
          items: cart,
          total: getTotalPrice(),
          date: serverTimestamp(),
        }
    
        const orderCollection = collection(db, "Orders")
    
        addDoc(orderCollection, order).then((res) => setTicket(res.id))
    
        cart.map((prod) => (
          updateDoc(doc(db, "Products", prod.id), {
            cantidad: prod.cantidad - prod.quantity,
          })
        ))
    
        clear()
    }
 
    useEffect(() => {
        const checkData = () => {
            if (buyer.name !== "" && buyer.phone !== "" && buyer.email !== "" && buyer.email === buyer.emailVer) {
                setVerify(true)
            }
        }
        checkData()
        if (buyer.emailVer !== "") {
            buyer.emailVer !== buyer.email ? setVerifyEmail(true) : setVerifyEmail(false)
        }
    }, [buyer])

    if (ticket) {
        return (
            <div className='formContainer'>
                <h2 className='pt-2'>Felicidades {buyer.name}, su compra fue exitosa!</h2>
                <h3 className='pt-4'>Orden de compra Nro: {ticket}</h3>
                <p className='pt-2 pb-5'>A la brevedad será contactado para pactar los detalles</p>
                <Link to="/" className='boton'>Volver al inicio</Link>
            </div>
        )
    }

  return (
    <div className='formContainer'>
        <form action="" onSubmit={handleSubmit} className="container-lg"  >
            <h2 className='row pb-5 align-items-center justify-content-center'>Formulario de compra</h2>
            <div className="row mb-4 g-1 align-items-center justify-content-center">
                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="name"
                    value={buyer.name}
                    onChange={(event) =>
                        setBuyer({ ...buyer, name: event.target.value })
                    }
                    className="form-control"
                />
            </div>
            <div className="row mb-4 g-1 align-items-center justify-content-center">
                <input
                    type="text"
                    placeholder="Ingrese su telefono"
                    name="phone"
                    value={buyer.phone}
                    onChange={(event) =>
                        setBuyer({ ...buyer, phone: event.target.value })
                    }
                    className="form-control"
                />
            </div>
            <div className="row mb-5 g-1 align-items-center justify-content-center">
                <input
                    type="email"
                    placeholder="Ingrese su e-mail"
                    name="email"
                    value={buyer.email}
                    onChange={(event) =>
                        setBuyer({ ...buyer, email: event.target.value })
                    }
                    className="form-control"
                />
            </div>
            {
                buyer.email !== "" && (
                    <div className="row mb-5 g-1 align-items-center justify-content-center">
                        <input
                            type="email"
                            placeholder="Vuelva a ingresar su e-mail"
                            name="emailVer"
                            value={buyer.emailVer}
                            onChange={(event) =>
                                setBuyer({ ...buyer, emailVer: event.target.value })
                            }
                            className="form-control"
                        />
                        {
                            verifyEmail && (
                                <span style={{color: "red",}}>Verifique los datos ingresados</span>
                            )
                        }
                    </div>
                )
            }
            {
                verify ? (
                    <button type="submit" className='boton'>Finalizar la compra</button>
                ) : (
                    <h2 style={{color: "red",}} className="p-3">Debe completar todos los campos solicitados para generar la orden de compra</h2>
                )
            }
            <Link to="/" className='boton' onClick={() => clear()}>Cancelar la compra</Link>
        </form>
    </div>
  )
}

export default Form