import "./Home.css";
import ReactPlayer from "react-player";

import { useState } from "react";

const Home = () => {
  const [playi, setPlay] = useState(true);

  const [volOnOff, setVolumen] = useState(0);

  const playPause = () => {
    setPlay(!playi);
  };

  const volumenOnOff = () => {
    if (volOnOff === 1) {
      setVolumen(0);
    } else {
      setVolumen(1);
    }
  };

  return (
    <div id="inicio" className="seccionNoTop">
      <div className="areaVideo">
        {playi === true ? (
          <>
            <ReactPlayer
              url={require("../../media/videos/videoBicicleta.mp4")}
              width="100%"
              height="100%"
              playing
              loop
              volume={`${volOnOff}`}
            />
            <div className="areaPlayPause">
              <button className="botonPlayPause" onClick={playPause}>
                ││
              </button>
            </div>
          </>
        ) : (
          <>
            <ReactPlayer
              url={require("../../media/videos/videoBicicleta.mp4")}
              width="100%"
              height="100%"
              loop
              volume={`${volOnOff}`}
            />
            <div className="areaPlayPause">
              <button className="botonPlayPause" onClick={playPause}>
                ▶
              </button>
            </div>
          </>
        )}
        <div className="areaVolumen">
          {volOnOff === 0 ? (
            <button className="botonVolumen" onClick={volumenOnOff}>
              On Volumen
            </button>
          ) : (
            <button className="botonVolumen" onClick={volumenOnOff}>
              Off Volumen
            </button>
          )}
        </div>
        {/* video de prueba, luego hay que colocar el video que va */}
        {/* Me volvi loco porque no fucionaba bien el autoplay, buscando buscando encontre el porque...
            Chrome desactiva el autoplay de los videos que tienen volumen, probe poniendo el volumen en 0 y
            funciona bien. Asi que si el video de Fran tiene volumen, no puede tener autoplay, una u otra. */}
      </div>
    </div>
  );
};

export default Home;
