import "./Testimonials.css";

const Testimonials = () => {

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"
  ></script>;
  return (
    <div id="testimonios" className="seccion">
      <h2 className="testimonioTitulo">Testimonios</h2>
      <div id="carouseInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
          <div className="testimonioCliente">
              <h4 className="testimonio">
                Estamos muy contentos porque las clases son muy lúdicas, a
                través del juego y de canciones (...) Os animamos a venir.”
              </h4>
                <span className="estrellasPintadas">★★★★</span>
                <span className="estrellasSinPintar">★</span>
              <h6 className="nombreTestimonio">Rocio</h6>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
          <div className="testimonioCliente">
              <h4 className="testimonio">
                Estamos muy felices porque las clases son muy lúdicas, a
                través del juego y de canciones (...) Os animamos a venir.”
              </h4>
                <span className="estrellasPintadas">★★★</span>
                <span className="estrellasSinPintar">★★</span>
              <h6 className="nombreTestimonio">Fernando</h6>
            </div>
          </div>
          <div className="carousel-item">
          <div>
              <h4 className="testimonio">
                Estamos muy animados porque las clases son muy lúdicas, a
                través del juego y de canciones (...) Os animamos a venir.”
              </h4>
              <span className="estrellasPintadas">★★★★★</span>
              <h6 className="nombreTestimonio">Gustavo</h6>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouseInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouseInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
