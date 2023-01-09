import {Link} from "react-router-dom"

const Item = ({item}) => {

    

    return (
        <div className = "col-6 col-lg-4 col-xxl-3 p-2" >
            <div className="card" style={{width: "22rem",}}>
                <img src={item.imagenes[0]} className="card-img-top" alt={`pipa${item.id}`} />
                <div className="card-body">
                  <h5 className="card-title">{item.nombre} { item.span && <span className="badge rounded-pill text-bg-warning"> Nueva!!!</span> }</h5>
                  <p className="card-text">Precio: <b>${item.precio}</b></p>
                  <Link to={`/itemDetail/${item.id}`} className="boton">Ver más</Link>
                </div>
              </div>
        </div>
    )
}

export default Item