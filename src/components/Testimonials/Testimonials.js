import "./Testimonials.css"

const Testimonials = () => {

    return (
        <div id="testimonios"  className="seccion">
            <h1>TESTIMONIOS</h1>
            <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="./images/carrusel-img-1.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carruselInfo d-md-block">
              <span className="textoCarrusel">FOTOGRAFÍA 1 | PRODUCTO </span>
              <h3 className="tituloCarrusel">TÍTULO DEL PROYECTO</h3>
              <p className="textoCarrusel">
                Videos y fotos promocionales de la marca, presentación de
                productos.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="./images/carrusel-img-1.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carruselInfo d-md-block">
              <span className="textoCarrusel">FOTOGRAFÍA 2 | PRODUCTO </span>
              <h3 className="tituloCarrusel">TÍTULO DEL PROYECTO</h3>
              <p className="textoCarrusel">
                Videos y fotos promocionales de la marca, presentación de
                productos.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="./images/carrusel-img-1.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carruselInfo d-md-block">
              <span className="textoCarrusel">FOTOGRAFÍA 3 | PRODUCTO </span>
              <h3 className="tituloCarrusel">TÍTULO DEL PROYECTO</h3>
              <p className="textoCarrusel">
                Videos y fotos promocionales de la marca, presentación de
                productos.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
            <div className="wrapper">
                <div className="sliderTestimonial">
                    <div className="testimonioItem">
                        <div className="testimonioCliente">
                            <h4 className="testimonio">Estamos muy contentos porque las clases son muy lúdicas, a través del juego y de canciones (...) Os animamos a venir.”</h4>
                            <spam className="estrellasPintadas">★★★★</spam><spam className="estrellasSinPintar">★</spam>
                            <h6 className="nombreTestimonio">Rocio</h6>
                        </div>
                    </div>
                    <div className="testimonioItem">
                        <div className="testimonioCliente">
                            <h4 className="testimonio">Estamos muy contentos porque las clases son muy lúdicas, a través del juego y de canciones (...) Os animamos a venir.”</h4>
                            <spam className="estrellasPintadas">★★★</spam><spam className="estrellasSinPintar">★★</spam>
                            <h6 className="nombreTestimonio">Fernando</h6>
                        </div>
                    </div>
                    <div className="testimonioItem">
                        <div className="testimonioCliente">
                            <h4 className="testimonio">Estamos muy contentos porque las clases son muy lúdicas, a través del juego y de canciones (...) Os animamos a venir.”</h4>
                            <spam className="estrellasPintadas">★★★★★</spam>
                            <h6 className="nombreTestimonio">Gustavo</h6>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        // Aun sin terminar. Siguiendo tutorial de https://www.youtube.com/watch?v=pUR0cNL4NU4


    )
}

export default Testimonials