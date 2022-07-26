import "./Portfolio.css";
import ReactPlayer from "react-player";

const Portfolio = () => {

  return (
    <div className="portfolioSeccion">
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

      <div className="seccion" id="portfolio">
        <div className="videoDrone d-md-block">
          <ReactPlayer
            url={require("../../media/videos/videoBicicleta.mp4")}
            width="100vmax"
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
