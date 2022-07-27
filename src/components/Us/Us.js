import './Us.css'
import imgNos from '../../media/imagenes/imgNosotrosCuadrada.jpg'

const Us = () => {

    return (
        <div id="nosotros"  className="seccion">
            <marquee scrolldelay="120" scrollamount="30" className='nosotrosBanner'>Sobre Nosotros ¿Quienes somos?</marquee>
            <p align="left" className='nosotrosDescripcion'>Somos una productora audiovisual con base en Córdoba - Argentina. Creamos y producimos piezas audiovisuales de alta calidad, teniendo como objetivo darle personalidad a tu marca, empresa o emprendimiento.</p>
            <img src={imgNos} alt="imagenNosotros" className='imgNosotros'></img>
        </div>
    )
}

export default Us