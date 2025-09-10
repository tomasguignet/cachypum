import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logoazul.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Alterna entre abierto y cerrado
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Cierra el menú
  };
  return (
    <header className="z-20 w-full flex justify-between items-center pt-0.5 px-0.5 bg-brown mb-10">
      <Link className="" to="/">
        <img
          className="ml-1 sm:ml-4 lg:ml-4 xl:ml-16 xl:pt-4 w-11 sm:w-24 lg:w-[5.5rem] lg:h-[6.5rem] xl:w-24 xl:h-28 sm:pt-3"
          src={Logo}
          alt="Logo"
        />
      </Link>

      {/* Nav links visibles solo en PC */}
      <nav className="hidden lg:flex flex-row gap-x-10 lg:gap-x-14 font-[Ubuntu] font-bold text-[0.85rem] xl:text-[16px] text-[#434242] mr-7 pb-6">
        <Link to="/fundation">FUNDACIÓN</Link>
        <a href="#projects">PROGRAMAS Y PROYECTOS</a>
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
