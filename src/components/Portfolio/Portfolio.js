import "./Portfolio.css";
import ReactPlayer from "react-player";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolioSeccion">
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
      {/*Fin carrusel */}
      <div className="separacion seccion">
        <spam className="productora primerRenglon">
          <b>PRODUCTORA AUDIOVISUAL. PRODUCTORA AUDIOVISIAL</b>
        </spam>
        <br />
        <spam className="productora segundoRenglon">
          PRODUCTORA <b>AUDIOVISUAL</b>. PRODUCTORA <b>AUDIOVISIAL</b>
        </spam>
        <br />
        <spam className="productora tercerRenglon">
          <b>PRODUCTORA AUDIOVISUAL. PRODUCTORA AUDIOVISIAL</b>
        </spam>
        <br />
      </div>

      <div className="seccion">
        <div className="videoDrone d-md-block">
        <ReactPlayer
          url={require("../../media/videos/videoBicicleta.mp4")}
          width="100%"
          height="100%"
          controls
        />
        <div className="textoDrone">
          <p className="tituloUnoDrone">Exteriores</p>
          <h3 className="tituloDosDrone">Toma de drone</h3>
          <p className="tituloUnoDrone">¿Tienes dudas? ¡Contáctanos!</p>
        </div>
        </div>
      </div>

      <div className="seccion">
        <h1 className="nombreTabla">¿POR QUÉ UN VIDEO?</h1>
        <table>
          <tr className="porcentajeTabla">
            <th>80%</th>
            <th>90%</th>
            <th>64%</th>
            <th>100%</th>
          </tr>
          <tr className="textoTabla">
            <td className="margenTabla">
              de tráfico por internet será representado por videos en el año
              2022.
            </td>
            <td className="margenTabla">
              de los consumidores son influenciados en sus decisiones por un
              video.{" "}
            </td>
            <td className="margenTabla">
              de los consumidoresd prefieren comprar después de ver un video.{" "}
            </td>
            <td className="margenTabla">
              es lo que aumenta según Youtube, el Mobile Video cada año.
            </td>
          </tr>
          <tr className="fuentesTabla">
            <td>FUENTES: Forbes</td>
            <td>FUENTES: Forbes</td>
            <td>FUENTES: Forbes</td>
            <td>FUENTES: Forbes</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
