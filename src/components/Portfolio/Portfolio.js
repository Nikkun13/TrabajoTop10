import "./Portfolio.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const burbuja = (e) => {
    if ((e.target.className = "d-block")) {
      let x = e.clientX;
      let y = e.clientY;
      e.target.nextSibling.style.top = y - 100 + "px";
      e.target.nextSibling.style.left = x - 800 + "px";
    }
  };

  return (
    <div id="portfolio" className="portfolioSeccion">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="10000"
            style={{ height: "100vh" }}
          >
            <div>
              <Link className="imgPortfolio" to={"/portfolio/1"}>
                <img
                  onMouseMove={burbuja}
                  src="./images/carrusel-img-1.png"
                  className="w-100"
                  style={{ height: "100vh", width: "100%", objectFit: "cover" }}
                  alt="..."
                />
                <button className="burbuja">Ver proyecto</button>
              </Link>
            </div>
            <div className="carruselInfo d-md-block">
              <span className="textoCarrusel">FOTOGRAFÍA 1 | PRODUCTO </span>
              <h3 className="tituloCarrusel">TÍTULO DEL PROYECTO</h3>
              <p className="textoCarrusel">
                Videos y fotos promocionales de la marca, presentación de
                productos.
              </p>
            </div>
          </div>
          <div
            className="carousel-item"
            data-bs-interval="2000"
            style={{ height: "100vh" }}
          >
            <Link className="imgPortfolio" to={`/portfolio/2`}>
              <img
                onMouseMove={burbuja}
                src="./images/PruebaDos.jpg"
                style={{ height: "100vh", width: "100%", objectFit: "cover" }}
                className="w-100"
                alt="..."
              />
              <button className="burbuja">Ver proyecto</button>
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
          <div className="carousel-item" style={{ height: "100vh" }}>
            <Link className="imgPortfolio" to={`/portfolio/3`}>
              <img
                onMouseMove={burbuja}
                src="./images/PruebaTres.jpg"
                className=" w-100"
                style={{ height: "100vh", width: "100%", objectFit: "cover" }}
                alt="..."
              />
              <button className="burbuja">Ver proyecto</button>
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
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
          <p>
            PRODUCTORA <b>AUDIOVISUAL.</b> PRODUCTORA <b>AUDIOVISUAL.</b>
          </p>
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
            <h3 className="tituloDosDrone">Toma de drones</h3>
            <p className="tituloUnoDrone">¿Tienes dudas? ¡Contáctanos!</p>
          </div>
        </div>
      </div>

      <div className="seccion">
        <h1 className="nombreTabla">¿POR QUÉ UN VIDEO?</h1>
        <div className="tablaVideo">
          <div className="celdaTablaVideo">
            <p className="porcentajeTabla">
              <b>80%</b>
            </p>
            <p className="textoTabla">
              de tráfico por internet será representado por videos en el año
              2022.
            </p>
            <p className="fuentesTabla">FUENTES: Forbes</p>
          </div>
          <div className="celdaTablaVideo">
            <p className="porcentajeTabla">
              <b>90%</b>
            </p>
            <p className="textoTabla">
              de los consumidores son influenciados en sus decisiones por un
              video.
            </p>
            <p className="fuentesTabla">FUENTES: Forbes</p>
          </div>
          <div className="celdaTablaVideo">
            <p className="porcentajeTabla">
              <b>64%</b>
            </p>
            <p className="textoTabla">
              de los consumidores prefieren comprar después de ver un video.
            </p>
            <p className="fuentesTabla">FUENTES: Forbes</p>
          </div>
          <div className="celdaTablaVideo">
            <p className="porcentajeTabla">
              <b>100%</b>
            </p>
            <p className="textoTabla">
              es lo que aumenta según Youtube, el Mobile Video cada año.
            </p>
            <p className="fuentesTabla">FUENTES: Forbes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
