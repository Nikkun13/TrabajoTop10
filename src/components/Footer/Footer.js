import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerSection1">
        <span>icono 1</span>
        <span>icono 2</span>
        <span>icono 3</span>
      </div>
      <div className="footerSection2">
        <span style={{ padding: "1vh" }}>Córdoba, Argentina</span>
        <span style={{ padding: "1vh" }}>+54 351 2609595</span>
      </div>
      <div className="footerSection3">
        <p>..... Derechos reservados | Nota legal</p>

        <ul className="navFooter">
          <li>
            <a className="" href="#">
              Inicio
            </a>
          </li>
          <li>
            <a className="" href="#">
              Servicios
            </a>
          </li>
          <li>
            <a className="" href="#">
              Nosotros
            </a>
          </li>
          <li>
            <a className="" href="#">
              Testimonios
            </a>
          </li>
          <li>
            <a className="" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
