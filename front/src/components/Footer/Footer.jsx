import React from "react";
import Logo from "../../images/logoazul.png";
import youtube from "../../images/youtube2.png";
import instagram from "../../images/instagram1.png";
import linkedin from "../../images/linkedin1.png";
import facebook from "../../images/facebook2.png";
import whatsapp from "../../images/whatsapp2.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer
      id="contacts"
      className="bg-oliveGreen/80 flex flex-col justify-items-center py-20 px-1.5"
    >
      {/*       <div className="self-center m-2 max-md:mb-2 sm:mt-9">
        <img
          className="w-16 sm:w-32 lg:w-40 opacity-70"
          src={Logo}
          alt="Logo"
        />
      </div> */}
      <div className="flex flex-row justify-between text-white px-4 sm:px-16 lg:px-24">
        <div className="justify-between flex flex-col">
          <h3 className="w-32 sm:w-38 font-[Montserrat] font-semibold text-[0.6rem] sm:text-base leading-3 sm:leading-5 max-md:mb-1.5">
            CONTACTATE CON NOSOTROS
          </h3>
          <ul className="flex flex-row items-end space-x-2 sm:space-x-3.5 lg:space-x-5 sm:mt-6">
            <Link to={"https://wa.me/+5492614165100"} className="inline-block ">
              <img
                src={whatsapp}
                alt=""
                className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 filter brightness-0 invert"
              />
            </Link>
            <Link
              to={"https://www.facebook.com/profile.php?id=100068790017070"}
              className="inline-block "
            >
              <img
                src={facebook}
                alt=""
                className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 filter brightness-0 invert"
              />
            </Link>
            <Link
              to={
                "https://www.instagram.com/fundacion.cachypum?igsh=MTBwYTJnaDEyaXcybA=="
              }
              className="inline-block "
            >
              <div className="">
                <img
                  src={instagram}
                  alt=""
                  className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 filter brightness-0 invert"
                />
              </div>
            </Link>
            <Link
              to={"https://www.linkedin.com/company/fundacioncachypum/"}
              className="inline-block "
            >
              <img
                src={linkedin}
                alt=""
                className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 filter brightness-0 invert"
              />
            </Link>
            <Link
              to={"https://www.youtube.com/@Cachypum"}
              className="inline-block overflow-hidden h-3.5 sm:h-[1.1rem] lg:h-5"
            >
              <img
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 block filter brightness-0 invert"
                src={youtube}
                alt=""
              />
            </Link>
          </ul>
          <div className="mt-3 sm:mt-1 sm:space-y-1 lg:space-y-2">
            <h4 className="font-[Montserrat] text-[0.55rem] sm:text-sm lg:text-[0.9rem]">
              +5492614165100
            </h4>
            <h4 className="font-[Montserrat] text-[0.55rem] sm:text-sm lg:text-[0.9rem]">
              cachypum@gmail.com
            </h4>
          </div>
        </div>
        <div className="font-[Montserrat] text-[0.6rem] sm:text-sm lg:text-[0.9rem] text-right self-end">
          <div className="leading-3.5 sm:leading-5 lg:leading-5">
            <h4 className="font-bold">Sede Central</h4>
            <h4>Olavarria 32,</h4>
            <h4>M5509</h4>
            <h4>Mendoza,</h4>
            <h4>Argentina</h4>
          </div>
          <div className="mt-2.5 sm:mt-5 leading-3.5 sm:leading-5 lg:leading-5">
            <h4 className="font-bold">Oficina</h4>
            <h4>Mariano Boedo 332,</h4>
            <h4>M5505</h4>
            <h4>Mendoza,</h4>
            <h4>Argentina</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
