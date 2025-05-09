import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import ProjectCard from "./../../components/ProjectCard/ProjectCard";
import Footer from "./../../components/Footer/Footer";
import { Link } from "react-router-dom";
import cultivo from "../../images/cultivo.jpg";
import projects from "../../data/projects.json";
import seParte from "../../images/separte.jpeg";
/* import backImage from "../../images/fondoHome.jpeg"; */

const Home = () => {
  return (
    <main className="">
      <section className="relative h-56 sm:h-[35rem] lg:h-screen bg-[url(./images/fondoHome2.jpeg)] opacity-90 bg-cover bg-no-repeat bg-bottom">
        {/* Overlay blanco con transparencia */}
        {/* <div className="absolute inset-0 bg-white/20 z-0"></div> */}

        {/* Contenido encima del overlay */}
        {/* <div className="relative z-10"> */}
        <Navbar />
        <span className="text-center ">
          <h1 className="leading-none text-oliveGreen font-[DM_Serif_Text] text-xl sm:text-5xl lg:text-7xl">
            Impulsamos
          </h1>
          <h1 className="leading-none text-oliveGreen font-[DM_Serif_Text] text-xl sm:text-5xl lg:text-7xl">
            la co-construcción
          </h1>
          <h1 className="leading-none mt-0.5 text-lightOrange font-[Fraunces] font-bold text-base sm:text-4xl lg:text-[4.1rem]">
            del tejido social
          </h1>
        </span>
        {/* </div> */}
      </section>

      <section className="z-20 bg-[url(./images/texturaPapel6.jpg)] bg-repeat shadow-md">
        <div className="flex flex-col items-center justify-center text-center py-10 sm:pt-16 sm:pb-12">
          <h4 className="font-[Sora] font-black text-sm sm:text-xl mb-1">
            Somos fundación Cachypum
          </h4>
          <p className="font-[Sora] font-medium text-[0.70rem] sm:text-base px-2.5 sm:w-2/4 sm:px-10">
            Una organizacion no gubernamental y sin fines de lucro, que trabaja
            activamente para mejorar la calidad de vida de las personas en
            situacion de vulnerabilidad
          </p>

          <Link
            className="font-[Roboto] font-medium text-oliveGreen border-3 rounded-sm border-oliveGreen mt-8 px-1.5 py-0.5 sm:text-xl sm:px-2 sm:mt-20"
            to="/philosophy"
          >
            Nuestra filosofía
          </Link>
        </div>
        <div id="projects">
          <div className="relative h-36 sm:h-96">
            <img
              className="block w-full h-full object-cover opacity-90 brightness-75 sm:opacity-95 sm:brightness-90 sm:object-[50%_16%]"
              src={cultivo}
              alt="Cultivo"
            />
            <span className="absolute w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white sm:text-5xl">
              <h2 className="font-[Fraunces] font-medium">
                Cultivamos programas sociales
              </h2>
              <h2 className="inline font-[Roboto] font-medium ">
                en sinergia con la
              </h2>
              <h2 className="inline font-[Roboto] font-black"> naturaleza</h2>
            </span>
          </div>
          <div className="flex flex-col items-center text-center mt-8 sm:mt-10">
            <p className="text-[0.65rem] sm:text-xl sm:w-2/4 sm:px-28 text-black/60 font-[Montserrat] font-medium px-5">
              Generamos espacios que mejoran la calidad de vida y el bienestar
              integral mediante actividades sanitarias, terapeuticas, educativas
              y sociales.
            </p>
            <h3 className="mt-5 sm:mt-9 text-[0.95rem] sm:text-[1.8rem] text-lightOrange/80 sm:brightness-105 font-[Inter] font-black">
              PROGRAMAS Y PROYECTOS
            </h3>
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:w-full sm:max-w-6xl">
                {projects.map((project) => (
                  <ProjectCard project={project} key={project.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row mt-8 sm:mt-20 ml-1.5 mb-5 sm:mb-16">
        <div className="sm:flex sm:flex-col sm:w-[55%] sm:justify-center sm:items-center">
          <h5 className="font-[Roboto] font-light text-sm sm:text-3xl text-center mb-2 sm:mb-12">
            SÉ PARTE
          </h5>
          <h3 className="font-[Sora] font-black sm:w-3/4 sm:text-[2.7rem] sm:leading-11 sm:pl-3 text-black/80 mr-0.5">
            Desarrollamos actividades y eventos para tu{" "}
            <h3 className="inline text-oliveGreen">empresa</h3>
          </h3>
          <Link
            className="max-sm:hidden font-[Roboto] font-medium text-3xl bg-lightOrange text-white rounded-sm border-oliveGreen mt-36 px-5 py-2.5"
            to="/moreinfo"
          >
            Quiero saber más!
          </Link>
        </div>
        <div className="sm:w-[45%]">
          <img className="mb-3" src={seParte} alt="Se-parte" />
          <Link
            className="sm:hidden font-[Roboto] font-medium text-sm bg-lightOrange text-white  rounded-xs border-oliveGreen px-3.5 py-1.5"
            to="/moreinfo"
          >
            Quiero saber más!
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
