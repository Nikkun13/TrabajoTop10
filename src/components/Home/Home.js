import "./Home.css";
import ReactPlayer from "react-player/youtube";

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
    <div id="inicio">
      <div className="seccionNoTop">
        <div className="areaVideo">
          {playi === true ? (
            <>
              <div className="react-player">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=G6dlmPXBSOU"
                  width="100%"
                  height="140%"
                  playing
                  loop
                  volume={volOnOff}
                  className="videoR"
                />
              </div>
              <div className="areaPlayPause" onClick={playPause}>
                <div className="areaButton">
                  <button className="botonPlayPause">❚❚</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="react-player">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=G6dlmPXBSOU"
                  width="100%"
                  height="140%"
                  loop
                  volume={volOnOff}
                  className="videoR"
                />
              </div>
              <div className="areaPlayPause" onClick={playPause}>
                <div className="areaButton">
                  <button className="botonPlayPause">▶</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="areaVolumen">
        {volOnOff === 1 ? (
          <button className="botonVolumen" onClick={volumenOnOff}>
            <div className="barras">
              <div className="barraUno prendida"></div>
              <div className="barraDos prendida"></div>
              <div className="barraTres prendida"></div>
              <div className="barraCuatro prendida"></div>
            </div>
          </button>
        ) : (
          <button className="botonVolumen" onClick={volumenOnOff}>
            <div className="barras">
              <div className="barraUno apagada"></div>
              <div className="barraDos apagada"></div>
              <div className="barraTres apagada"></div>
              <div className="barraCuatro apagada"></div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
