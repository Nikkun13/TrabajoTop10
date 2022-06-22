import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import MenuButton from "../MenuButton/MenuButton";
import './Header.css'

const Header = () => {
  
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <div className="header">
        <h2>Este es el Header</h2>
        <Navbar open={open} />
        <MenuButton open={open} handleClick={handleClick} />
      </div>
    );
}

export default Header