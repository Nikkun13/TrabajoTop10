import Main from "./components/Main/Main";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <div className="App">
    <p className="radial rUno"></p>
    <p className="radial rDos"></p>
    <p className="radial rTres"></p>
    <p className="radial rCuatro"></p>
    <p className="radial rCinco"></p>
    <p className="radial rSeis"></p>
    <p className="radial rSiete"></p>
    <p className="radial rOcho"></p>
    <p className="radial rNueve"></p>
    <p className="radial rDiez"></p>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
          <Route
            path="*"
            element={
              <h1 className="error404">Página no encontrada. ERROR 404</h1>
            }
          />
        </Routes>
      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
