// import { useState } from "react";
import Navbar from "../Navbar/Navbar";
// import NavbarBurger from "../NavbarBurger/NavbarBurger";
// import MenuButton from "../MenuButton/MenuButton";
import "./Header.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const Header = () => {
  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(!open);
  // };
  const [alert, setAlert] = useState(0);
  const alertCopy = () => {
    setAlert(1);
    setTimeout(() => {
      setAlert(0);
    }, 2000);
  };
  return (
    <div className="header">
      <div className="contenedorHeader">
        <Navbar />
        <CopyToClipboard text={`${window.location.origin}`}>
          <p className="compartir" onClick={alertCopy}>
            COMPARTIR
          </p>
        </CopyToClipboard>
        <button className="copiado" style={{ opacity: `${alert}` }}>
          ¡link copiado!
        </button>
        {/* <NavbarBurger open={open} />
        <MenuButton open={open} handleClick={handleClick} /> */}
      </div>
    </div>
  );
};

export default Header;
