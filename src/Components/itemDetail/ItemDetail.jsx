
const ItemDetail = ({item}) => {

  console.log(item)

    return (
        <div className = "col-12 col-lg-6 col-xxl-4" >
          <div className="card" style={{width: "22rem",}}>
              <img src={item?.imagenes[0]} className="card-img-top" alt={`pipa${item?.id}`} />
              <div className="card-body">
                <h5 className="card-title">{item?.nombre} { item?.span && <span className="badge rounded-pill text-bg-warning"> Nueva!!!</span> }</h5>
                <p className="card-text">{item?.descripcion}</p>
                <p className="card-text">Precio: <b>${item?.precio}</b></p>
                <input type="button" value="Más Fotos" className="boton" data-bs-toggle="modal" data-bs-target={`#mpipa${item?.id}`} />
                          {/* <!-- Modal --> */}
                          <div className="modal fade" id={`mpipa${item?.id}`} tabindex="-1" aria-labelledby={`mpipa${item?.id}Label`} aria-hidden="true">
                              <div className="modal-dialog modal-xl modal-fullscreen-md-down">
                                  <div className="modal-content">
                                      <div className="modal-header">
                                          <h5 className="modal-title" id={`mpipa${item?.id}Label`}>{item?.nombre}</h5>
                                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div className="modal-body">
                                          {/* <!-- inicio carrusel --> */}
                                          <div id={`carousel${item?.id}Indicators`} className="carousel slide" data-bs-ride="true">
                                              <div className="carousel-indicators">
                                                <button type="button" data-bs-target={`#carousel${item?.id}Indicators`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target={`#carousel${item?.id}Indicators`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target={`#carousel${item?.id}Indicators`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                                              </div>
                                              <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                  <img src={item?.imagenes[0]} className="d-block w-100" alt={`pipa${item?.id}_1`} />
                                                </div>
                                                <div className="carousel-item">
                                                  <img src={item?.imagenes[1]} className="d-block w-100" alt={`pipa${item?.id}_2`} />
                                                </div>
                                                <div className="carousel-item">
                                                  <img src={item?.imagenes[2]} className="d-block w-100" alt={`pipa${item?.id}_3`} />
                                                </div>
                                              </div>
                                              <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${item?.id}Indicators`} data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                              </button>
                                              <button className="carousel-control-next" type="button" data-bs-target={`#carousel${item?.id}Indicators`} data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                              </button>
                                          </div>
                                          {/* <!-- fin carrusel --> */}
                                      </div>
                                      <div className="modal-footer">
                                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/* <!-- fin modal --> */}
              </div>
          </div>
        </div>
    )
}

export default ItemDetail