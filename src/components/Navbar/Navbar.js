import { useState , useEffect } from "react";
import './Navbar.css'

const Navbar = ({open}) => {

    const [openMenu, setOpenMenu] = useState();

    useEffect(() => {
        if (open === true) {
          setOpenMenu("abierto");
        } else {
          setOpenMenu("cerrado");
        }
    }, [open]); 

    return (
      <navbar className={`navbar ${openMenu}`}>
        <a className='enlace' href="#">Opcion 1</a>
        <a className='enlace' href="#">Opcion 2</a>
        <a className='enlace' href="#">Opcion 3</a>
        <a className='enlace' href="#">Opcion 4</a>
      </navbar>
    )

}

export default Navbar