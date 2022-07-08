import './Us.css'

const Us = () => {

    return (
        <div id="nosotros"  className="seccion">
            <marquee scrolldelay="100" scrollamount="30" className='nosotrosBanner'>Sobre Nosotros ¿Quienes somos?</marquee>
            <p align="left" className='nosotrosDescripcion'>Somos una productora audiovisual con base en Córdoba - Argentina. Creamos y producimos piezas audiovisuales de alta calidad, teniendo como objetivo darle personalidad a tu marca, empresa o emprendimiento.</p>
            <img className="logo1" src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"></img>
        {/* logo de prueba, luego hay que colocar el logo que va */}
        </div>
    )
}

export default Us