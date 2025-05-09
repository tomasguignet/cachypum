import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/LogoNegro.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Alterna entre abierto y cerrado
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Cierra el menú
  };
  return (
    <header className="z-20 w-full flex justify-between items-center pt-0.5 px-0.5 bg-brown">
      <Link className="" to="/">
        <img
          className="ml-1 sm:ml-4 lg:ml-6 w-11 sm:w-28 lg:w-32 sm:pt-3"
          src={Logo}
          alt="Logo"
        />
      </Link>

      {/* Nav links visibles solo en PC */}
      <nav className="hidden lg:flex flex-row gap-x-10 font-[Ubuntu] font-bold text-lg text-black/80 mr-4 pb-6">
        <Link to="/fundation">FUNDACIÓN</Link>
        <a href="#projects">PROGRAMAS Y PROYECTOS</a>
        <Link to="/empresas">EMPRESAS</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/involucrados">INVOLUCRADOS</Link>
        <a href="#contacts">CONTACTANOS</a>
      </nav>

      {/* Menú Hamburguesa solo en mobile */}
      <div className="flex lg:hidden">
        <button
          className="text-beige focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {/* Icono del menú hamburguesa */}
          <svg
            className="w-6 sm:w-10 h-6 sm:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menú lateral mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-oliveGreen opacity-95 z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start py-6 px-2">
          <button
            className="text-brown mb-4"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            {/* Icono de cerrar */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col items-start pl-1.5 space-y-0.5 font-[Ubuntu] font-bold text-black/80">
            <Link to="/fundation">FUNDACIÓN</Link>
            <a onClick={closeMenu} href="#projects">
              PROGRAMAS Y PROYECTOS
            </a>
            <Link>EMPRESAS</Link>
            <Link>BLOG</Link>
            <Link>INVOLUCRADOS</Link>
            <a onClick={closeMenu} href="#contacts">
              CONTACTANOS
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
