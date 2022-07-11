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
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>as.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="./images/carrusel-img-1.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="./images/carrusel-img-1.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
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

      <div className="seccion videoDrone">
        <ReactPlayer
          url={require("../../media/videos/videoBicicleta.mp4")}
          width="100%"
          height="100%"
          controls
        />
        <div className="textoDrone">
          <p>Exteriores</p>
          <p className="fontDrone">Toma de drone</p>
          <p>¿Tienes dudas? ¡Contáctanos!</p>
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
