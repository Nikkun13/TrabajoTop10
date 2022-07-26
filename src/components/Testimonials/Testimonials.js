import "./Testimonials.css";
import useScreenSize from "../../hooks/useScreenSize";

const Testimonials = () => {
  const { width } = useScreenSize();
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"
  ></script>;
  return (
    <div id="testimonios" className="seccion">
      <h2 className="testimonioTitulo">Testimonios</h2>
      {width < 763 && (
        <svg
          style={{ marginBottom: "1rem" }}
          width="60"
          height="45"
          viewBox="0 0 50 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.73125 35.55L1.24077 36.8836L1.27778 36.925L1.31704 36.9642L2.73125 35.55ZM16.6813 -1.90735e-06L18.3454 -1.1094L17.3159 -2.65354L15.6992 -1.74231L16.6813 -1.90735e-06ZM18.1813 2.25L19.3002 3.90769L20.9484 2.79516L19.8454 1.1406L18.1813 2.25ZM9.18125 11.25L10.8772 12.31L10.8845 12.2983L10.8916 12.2866L9.18125 11.25ZM6.18125 22.5H4.18125V25.2748L6.81371 24.3974L6.18125 22.5ZM10.6813 21V19H10.3567L10.0488 19.1026L10.6813 21ZM16.5312 23.4L17.9455 21.9858L16.5312 23.4ZM16.3813 35.7L14.967 34.2858L16.3813 35.7ZM29.7313 35.55L28.2408 36.8836L28.2778 36.925L28.317 36.9642L29.7313 35.55ZM43.6813 -1.90735e-06L45.3454 -1.1094L44.3159 -2.65354L42.6992 -1.74231L43.6813 -1.90735e-06ZM45.1813 2.25L46.3002 3.90769L47.9484 2.79516L46.8454 1.1406L45.1813 2.25ZM36.1813 11.25L37.8772 12.31L37.8845 12.2983L37.8916 12.2866L36.1813 11.25ZM33.1813 22.5H31.1813V25.2748L33.8137 24.3974L33.1813 22.5ZM37.6813 21V19H37.3567L37.0488 19.1026L37.6813 21ZM43.5312 23.4L44.9455 21.9858L43.5312 23.4ZM43.3813 35.7L41.967 34.2858L43.3813 35.7ZM9.93125 36.25C7.35976 36.25 5.50399 35.4943 4.14546 34.1358L1.31704 36.9642C3.55851 39.2057 6.50274 40.25 9.93125 40.25V36.25ZM4.22173 34.2164C2.93707 32.7806 2.18125 30.7066 2.18125 27.75H-1.81875C-1.81875 31.3933 -0.874563 34.5194 1.24077 36.8836L4.22173 34.2164ZM2.18125 27.75C2.18125 16.1954 7.27143 7.59952 17.6633 1.7423L15.6992 -1.74231C4.09107 4.80047 -1.81875 14.7046 -1.81875 27.75H2.18125ZM15.0172 1.1094L16.5172 3.3594L19.8454 1.1406L18.3454 -1.1094L15.0172 1.1094ZM17.0623 0.5923C12.8809 3.41472 9.65343 6.61214 7.47086 10.2134L10.8916 12.2866C12.7091 9.28785 15.4816 6.48528 19.3002 3.90769L17.0623 0.5923ZM7.48526 10.19C5.26 13.7504 4.18125 17.8787 4.18125 22.5H8.18125C8.18125 18.5213 9.1025 15.1496 10.8772 12.31L7.48526 10.19ZM6.81371 24.3974L11.3137 22.8974L10.0488 19.1026L5.5488 20.6026L6.81371 24.3974ZM10.6813 23C12.4606 23 13.899 23.5962 15.117 24.8142L17.9455 21.9858C15.9635 20.0038 13.5019 19 10.6813 19V23ZM15.117 24.8142C16.3351 26.0323 16.9313 27.4706 16.9313 29.25H20.9313C20.9313 26.4294 19.9274 23.9677 17.9455 21.9858L15.117 24.8142ZM16.9313 29.25C16.9313 31.3673 16.2595 32.9933 14.967 34.2858L17.7955 37.1142C19.903 35.0067 20.9313 32.3327 20.9313 29.25H16.9313ZM14.967 34.2858C13.6745 35.5783 12.0485 36.25 9.93125 36.25V40.25C13.014 40.25 15.688 39.2217 17.7955 37.1142L14.967 34.2858ZM36.9313 36.25C34.3598 36.25 32.504 35.4943 31.1455 34.1358L28.317 36.9642C30.5585 39.2057 33.5027 40.25 36.9313 40.25V36.25ZM31.2217 34.2164C29.9371 32.7806 29.1813 30.7066 29.1813 27.75H25.1813C25.1813 31.3933 26.1254 34.5194 28.2408 36.8836L31.2217 34.2164ZM29.1813 27.75C29.1813 16.1954 34.2714 7.59952 44.6633 1.7423L42.6992 -1.74231C31.0911 4.80047 25.1813 14.7046 25.1813 27.75H29.1813ZM42.0172 1.1094L43.5172 3.3594L46.8454 1.1406L45.3454 -1.1094L42.0172 1.1094ZM44.0623 0.5923C39.881 3.41472 36.6534 6.61214 34.4709 10.2134L37.8916 12.2866C39.7091 9.28785 42.4816 6.48528 46.3002 3.90769L44.0623 0.5923ZM34.4853 10.19C32.26 13.7504 31.1813 17.8787 31.1813 22.5H35.1813C35.1813 18.5213 36.1025 15.1496 37.8772 12.31L34.4853 10.19ZM33.8137 24.3974L38.3137 22.8974L37.0488 19.1026L32.5488 20.6026L33.8137 24.3974ZM37.6813 23C39.4606 23 40.899 23.5962 42.117 24.8142L44.9455 21.9858C42.9635 20.0038 40.5019 19 37.6813 19V23ZM42.117 24.8142C43.3351 26.0323 43.9313 27.4706 43.9313 29.25H47.9313C47.9313 26.4294 46.9274 23.9677 44.9455 21.9858L42.117 24.8142ZM43.9313 29.25C43.9313 31.3673 43.2595 32.9933 41.967 34.2858L44.7955 37.1142C46.903 35.0067 47.9313 32.3327 47.9313 29.25H43.9313ZM41.967 34.2858C40.6745 35.5783 39.0485 36.25 36.9313 36.25V40.25C40.014 40.25 42.688 39.2217 44.7955 37.1142L41.967 34.2858Z"
            fill="#E3B6F9"
            fill-opacity="0.2"
          />
        </svg>
      )}
      <div
        id="carouseInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="testimonioCliente">
              <h4 className="testimonio">
                Estamos muy contentos porque las clases son muy lúdicas, a
                través del juego y de canciones (...) Os animamos a venir.”
              </h4>
              <span className="estrellasPintadas">★★★★</span>
              <span className="estrellasSinPintar">★</span>
              <h6 className="nombreTestimonio">-ROCIO</h6>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="testimonioCliente">
              <h4 className="testimonio">
                Estamos muy felices porque las clases son muy lúdicas, a través
                del juego y de canciones (...) Os animamos a venir.”
              </h4>
              <span className="estrellasPintadas">★★★</span>
              <span className="estrellasSinPintar">★★</span>
              <h6 className="nombreTestimonio">-FERNANDO</h6>
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <h4 className="testimonio">
                Estamos muy animados porque las clases son muy lúdicas, a través
                del juego y de canciones (...) Os animamos a venir.”
              </h4>
              <span className="estrellasPintadas">★★★★★</span>
              <h6 className="nombreTestimonio">-GUSTAVO</h6>
            </div>
          </div>
        </div>
        {width > 767 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouseInterval"
              data-bs-slide="prev"
            >
              <span aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouseInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
