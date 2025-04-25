import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div>
        <img src="" alt="LOGO" />
      </div>
      <nav>
        <Link to="/fundation">FUNDACIÓN</Link>
        <a href="#projects">PROGRAMAS Y PROYECTOS</a>
        <Link>EMPRESAS</Link>
        <Link>BLOG</Link>
        <Link>INVOLUCRADOS</Link>
        <Link>CONTACTANOS</Link>
      </nav>
    </header>
  );
};

export default Navbar;
