import './PortfolioPage.css'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import imgUno from "../../media/imagenes/carrusel-img-1.png"
import imgDos from "../../media/imagenes/PruebaDos.jpg"
import imgTres from "../../media/imagenes/PruebaTres.jpg"

const PortfolioPage = () => {

    let {id} = useParams();
    id = parseInt(id);

    const [imgP, setImgP] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {
        if (id === 1 ) {
            setImgP(imgUno);
        } else if (id === 2) {
            setImgP(imgDos);
        } else {
            setImgP(imgTres);
        }
    }, [id]);    

    return (
        <div>
            <div>
                <img src={imgP} alt="trabajo" className="imagenPortfolio" />
            </div>
            <div>Trabajo {id} </div>
            <div>Footer Portfolio {id}</div>
            <ul className='centrado'>
                <li className='option'>{(id > 1) ? <NavLink to={`/portfolio/${id-1}`} className="primerCuadro">Trabajo Anterior</NavLink> : <div className="primerCuadro"></div>}</li>
                <li className='option'><NavLink to="/#portfolio" className="segundoCuadro">Volver al Inicio</NavLink></li>
                <li className='option'>{(id < 3) ? <NavLink to={`/portfolio/${id+1}`} className="tercerCuadro">Trabajo Siguiente</NavLink> : <div className="tercerCuadro"></div>}</li>
            </ul>
        </div>
    )
}

export default PortfolioPage;