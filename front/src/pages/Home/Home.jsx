import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import ProjectCard from "./../../components/ProjectCard/ProjectCard";
import Footer from "./../../components/Footer/Footer";
import { Link } from "react-router-dom";
import backImage from "../../images/fondoHome.jpeg";

const Home = () => {
  return (
    <main>
      <section className="">
        <div className="relative">
          <img src={backImage} alt="" />
        </div>
        <Navbar />
        <div className="">
          <h1>Impulsamos la co-construcción del tejido social</h1>
        </div>
      </section>
      <section>
        <div>
          <h4>Somos fundacion Cachypum</h4>
          <p>
            Una organizacion no gubernamental y sin fines de lucro, que trabaja
            activamente para mejorar la calidad de vida de las personas en
            situacion de vulnerabilidad
          </p>

          <Link to="/philosophy">Nuestra filosofia</Link>
        </div>
        <div id="projects">
          <div>
            <img src="" alt="" />
            <h2>Cultivamos programas sociales en sinergia con la naturaleza</h2>
          </div>
        </div>
        <div>
          <p>
            Generamos espacios que mejoran la calidad de vida y el bienestar
            integral mediante actividades sanitarias, terapeuticas, educativas y
            sociales.
          </p>
          <h3>PROGRAMAS Y PROYECTOS</h3>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
      <section>
        <div>
          <h5>SÉ PARTE</h5>
          <h3>Desarrollamos actividades y eventos para tu empresa</h3>
          <Link to="/moreinfo">Quiero saber más!</Link>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
