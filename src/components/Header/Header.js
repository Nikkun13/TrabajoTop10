// import { useState } from "react";
import Navbar from "../Navbar/Navbar";
// import NavbarBurger from "../NavbarBurger/NavbarBurger";
// import MenuButton from "../MenuButton/MenuButton";
import './Header.css'

const Header = () => {
  
    // const [open, setOpen] = useState(false);
  
    // const handleClick = () => {
    //   setOpen(!open);
    // };
  
    return (
      <div className="header">
        <img className="logoHeader" src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"></img>
        <Navbar />
        <p className='compartir'>COMPARTIR</p>
        {/* <NavbarBurger open={open} />
        <MenuButton open={open} handleClick={handleClick} /> */}
      </div>
    );
}

export default Header