// import { useState } from "react";
import Navbar from "../Navbar/Navbar";
// import NavbarBurger from "../NavbarBurger/NavbarBurger";
// import MenuButton from "../MenuButton/MenuButton";
import "./Header.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Header = () => {
  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <div className="header">
      <div className="contenedorHeader">
        <Navbar />
        <CopyToClipboard text={`${window.location.origin}`}>
          <p className="compartir">COMPARTIR</p>
        </CopyToClipboard>

        {/* <NavbarBurger open={open} />
        <MenuButton open={open} handleClick={handleClick} /> */}
      </div>
    </div>
  );
};

export default Header;
