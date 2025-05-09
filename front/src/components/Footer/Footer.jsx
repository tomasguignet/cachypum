import React from "react";
import Logo from "../../images/LogoNegro.png";
import youtube from "../../images/youtube2.png";
import instagram from "../../images/instagram1.png";
import linkedin from "../../images/linkedin1.png";
import facebook from "../../images/facebook2.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer
      id="contacts"
      className="bg-oliveGreen/80 flex flex-col pb-2 px-1.5"
    >
      <div className="self-center m-1 sm:mt-9">
        <img className="w-16 sm:w-40 opacity-70" src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-row justify-between text-white px-1 sm:px-24 sm:mb-16">
        <div className="justify-between flex flex-col">
          <h3 className="w-32 sm:w-44 font-[Montserrat] font-semibold text-[0.65rem] sm:text-lg leading-3 sm:leading-5">
            CONTACTATE CON NOSOTROS
          </h3>
          <ul className="flex flex-row items-end space-x-2 sm:space-x-5 sm:mt-14">
            <Link className="inline-block ">
              <img
                src={facebook}
                alt=""
                className="w-4 h-4 sm:w-8 sm:h-8 filter brightness-0 invert"
              />
            </Link>
            <Link className="inline-block ">
              <div className="">
                <img
                  src={instagram}
                  alt=""
                  className="w-4 h-4 sm:w-8 sm:h-8 filter brightness-0 invert"
                />
              </div>
            </Link>
            <Link className="inline-block ">
              <img
                src={linkedin}
                alt=""
                className="w-4 h-4 sm:w-8 sm:h-8 filter brightness-0 invert"
              />
            </Link>
            <Link className="inline-block overflow-hidden h-3.5 sm:h-6">
              <img
                className="w-5 h-5 sm:w-8 sm:h-8 block filter brightness-0 invert"
                src={youtube}
                alt=""
              />
            </Link>
          </ul>
          <div className="sm:mt-7 sm:space-y-2">
            <h4 className="font-[Montserrat] text-[0.55rem] sm:text-base">
              +5492614165100
            </h4>
            <h4 className="font-[Montserrat] text-[0.55rem] sm:text-base">
              cachypum@gmail.com
            </h4>
          </div>
        </div>
        <div className="font-[Montserrat] text-[0.6rem] sm:text-base text-right self-end">
          <div className="leading-3 sm:leading-6">
            <h4 className="font-bold">Sede Central</h4>
            <h4>Olavarria 32, M5509</h4>
            <h4>Mendoza, Argentina</h4>
          </div>
          <div className="mt-2.5 sm:mt-5 leading-3 sm:leading-6">
            <h4 className="font-bold">Oficina</h4>
            <h4>Mariano Boedo 332, M5505</h4>
            <h4>Mendoza, Argentina</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
