import "./Portfolio.css";
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom'

const Portfolio = () => {

  return (
    <div id="portfolio" className="portfolioSeccion">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
          <Link to={`/portfolio/1`}>
            <img
              src="./images/carrusel-img-1.png"
              className="d-block w-100"
              alt="..."
            />
          </Link>
            <div className="carruselInfo d-md-block">
              <span className="textoCarrusel">FOTOGRAFÍA 1 | PRODUCTO </span>
              <h3 className="tituloCarrusel">TÍTULO DEL PROYECTO</h3>
              <p className="textoCarrusel">
                Videos y fotos promocionales de la marca, presentación de
                productos.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
          <Link to={`/portfolio/2`}>
            <img
              src="./images/carrusel-img-1.png"
              className="d-block w-100"
              alt="..."
            />
            </Link>
            <div className="carruselInfo d-md-block">
              <span className="textoCarrusel">FOTOGRAFÍA 2 | PRODUCTO </span>
              <h3 className="tituloCarrusel">TÍTULO DEL PROYECTO</h3>
              <p className="textoCarrusel">
                Videos y fotos promocionales de la marca, presentación de
                productos.
              </p>
            </div>
          </div>
          <div className="carousel-item">
          <Link to={`/portfolio/3`}>
            <img
              src="./images/carrusel-img-1.png"
              className="d-block w-100"
              alt="..."
            />
            </Link>
            <div className="carruselInfo d-md-block">
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
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*Fin carrusel */}
      <div className="separacion seccion">
        <marquee
          scrolldelay="80"
          scrollamount="30"
          className="productora primerRenglon"
        >
          <b>PRODUCTORA AUDIOVISUAL. PRODUCTORA AUDIOVISUAL</b>
        </marquee>
        <br />
        <marquee
          direction="right"
          scrolldelay="100"
          scrollamount="30"
          className="productora segundoRenglon"
        >
          <b>PRODUCTORA AUDIOVISUAL. PRODUCTORA AUDIOVISUAL</b>
        </marquee>
        <br />
        <marquee
          scrolldelay="120"
          scrollamount="30"
          className="productora tercerRenglon"
        >
          <b>PRODUCTORA AUDIOVISUAL. PRODUCTORA AUDIOVISUAL</b>
        </marquee>
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
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
