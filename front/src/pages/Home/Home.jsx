import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import ProjectCard from "./../../components/ProjectCard/ProjectCard";
import Footer from "./../../components/Footer/Footer";
import { Link } from "react-router-dom";
import cultivo from "../../images/cultivo.jpg";
import projects from "../../data/projects.json";
import seParte from "../../images/quierosabermas.png";
/* import backImage from "../../images/fondoHome.jpeg"; */

const Home = () => {
  return (
    <main className="">
      <section className="relative h-56 sm:h-[35rem] lg:h-screen bg-[url(./images/fondohome.png)] bg-center bg-cover bg-no-repeat">
        <Navbar />
        <span className="text-center ">
          <h1 className="leading-none text-oliveGreen font-[Fraunces] text-xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            Impulsamos
          </h1>
          <h1 className="leading-none text-oliveGreen font-[Fraunces] text-xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            la co-construcción
          </h1>
          <h1 className="leading-none mt-0.5 text-lightOrange font-[Fraunces] font-bold text-lg sm:text-4xl lg:text-[3rem] xl:text-[3.3rem]">
            del tejido social
          </h1>
        </span>
        {/* </div> */}
      </section>

      <section className="z-20 bg-[url(/images/fondo.jpg)] bg-repeat shadow-md">
        <div className="flex flex-col items-center justify-center text-[#41515e] text-center max-md:px-6 py-10 sm:pt-16 sm:pb-12">
          <h4 className="font-[Sora] font-black text-xs sm:text-xl mb-1">
            Somos fundación Cachypum
          </h4>
          <p className="font-[Sora] font-medium text-[0.65rem] sm:text-base px-2.5 sm:w-2/3 sm:px-10">
            Una organización no gubernamental y sin fines de lucro que trabaja
            activamente para mejorar la calidad de vida de todas las personas,
            con especial compromiso hacia quienes atraviesan contextos de
            vulnerabilidad
          </p>

          <Link
            className="font-[Roboto] font-medium text-[#99a581] border-[3.5px] rounded-sm border-[#99a581] mt-8 px-1.5 py-0.5 text-xs sm:text-base sm:px-2 sm:mt-20 tracking-[0.07rem]"
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
            <span className="absolute w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white sm:text-3xl lg:text-4xl">
              <h2 className="font-[Fraunces] font-medium">
                Cultivamos programas sociales
              </h2>
              <h2 className="inline font-[Roboto] font-medium ">
                en sinergia con la
              </h2>
              <h2 className="inline font-[Roboto] font-black"> naturaleza</h2>
            </span>
          </div>
          <div className="flex flex-col items-center text-center mt-8 sm:mt-10 text-[#41515e]">
            <p className="text-[0.65rem] sm:text-base lg:text-lg sm:w-2/3 xl:w-1/2 px-6 sm:px-12 lg:px-10 xl:px-[2rem] font-[Montserrat] font-medium">
              Generamos espacios que mejoran la calidad de vida y el bienestar
              integral mediante actividades sanitarias, terapeuticas, educativas
              y sociales.
            </p>
            <h3 className="mt-5 sm:mt-9 text-[0.95rem] sm:text-[1.3rem] text-lightOrange/80 sm:brightness-105 font-[Inter] font-black">
              PROGRAMAS Y PROYECTOS
            </h3>
            <div className="flex justify-center sm:px-24">
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:place-content-center items-center sm:w-full sm:max-w-6xl">
                {projects.map((project) => (
                  <ProjectCard project={project} key={project.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row mt-8 sm:mt-20 sm:ml-1.5 mb-5 sm:mb-16">
        <div className="sm:flex sm:flex-col sm:w-[50%] lg:w-[55%] place-items-center text-center sm:justify-center sm:items-center">
          <h5 className="font-[Roboto] font-light text-sm sm:text-lg lg:text-lg xl:text-xl pb-2 sm:mb-2 lg:mb-4 xl:mb-6 [word-spacing:0.25rem] lg:[word-spacing:0.3rem] xl:[word-spacing:0.5rem] md:tracking-[0.17em]">
            SÉ PARTE
          </h5>
          <h3 className="font-[Sora] font-black w-4/5 sm:w-3/4 sm:text-[1.2 rem] lg:text-[1.5rem] xl:text-[1.8rem] leading-5 xl:leading-9 xl:pl-3 text-black/80 mr-0.5">
            Desarrollamos actividades y eventos para tu
            <span className="inline text-oliveGreen"> empresa</span>
          </h3>
          <Link
            className="max-sm:hidden font-[Roboto] font-medium text-lg lg:text-base xl:text-lg bg-[#ddba81] text-white rounded-xs border-oliveGreen mt-10 lg:mt-12 xl:mt-20 px-5 lg:px-5 py-1.5 lg:py-1"
            to="/moreinfo"
          >
            Quiero saber más!
          </Link>
        </div>
        <div className="justify-items-center text-center sm:w-[50%] lg:w-[45%] sm:content-center max-md:mt-2">
          <img className="pb-3" src={seParte} alt="Se-parte" />
          <Link
            className="sm:hidden font-[Roboto] font-medium text-xs bg-lightOrange text-white rounded-xs border-oliveGreen px-3.5 py-1.5"
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
