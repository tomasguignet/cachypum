import caballoNegro from "../../images/caballoNegro.jpg";
import chicaMate from "../../images/chicaMate.jpeg";
import manosJuntas from "../../images/manosjuntas.jpg";
import colaboraConProyectos from "../../images/colaboraconproyectos.jpg";
import { useEffect } from "react";
import BackArrow from "../../components/BackArrow/BackArrow";

const MoreInfo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // 👈 Esto scrollea al tope
  }, []);

  return (
    <section className="bg-[#aeb997] lg:h-screen text-center text-white pt-3.5">
      <BackArrow />
      <p className="text-sm lg:text-base px-4 lg:w-[30rem] lg:place-self-center max-lg:mt-10 mb-8 lg:mb-10">
        <strong>Co-creamos </strong>
        propuestas vivenciales con
        <strong>
          {" "}
          empresas que buscan integrar el bienestar, la inclusion y el
          compromiso comunitario
        </strong>
        como parte de su identidad.
      </p>
      <div className="font-[Sora] px-4 lg:px-6 pb-4 lg:flex lg:w-full">
        <div className="mb-4 lg:mb-7 lg:w-1/4 lg:px-0.5 lg:flex lg:flex-col">
          <img
            loading="lazy"
            className="max-lg:max-h-[260px] lg:h-56 object-cover"
            src={caballoNegro}
            alt=""
          />
          <h4 className="font-black text-sm lg:text-lg lg:px-14 mt-1 lg:my-1.5">
            EVENTOS RESPONSABLES
          </h4>
          <p className="font-light text-xs lg:text-base lg:text-[0.75rem] text-justify lg:px-4">
            A través de nuestros Eventos Responsables, ofrecemos celebraciones
            de fin de año con impacto positivo, jornadas de forestación y
            cuidado ambiental. Actividades de bienestar para colaboradores y sus
            familias.
          </p>
        </div>
        <div className="mb-4 lg:mb-7 lg:w-1/4 lg:px-0.5 lg:flex lg:flex-col">
          <img
            loading="lazy"
            className="max-lg:max-h-[260px] lg:h-56 object-cover"
            src={chicaMate}
            alt=""
          />
          <h4 className="font-black text-sm lg:text-lg lg:px-14 mt-1 lg:my-1.5">
            SOLUCIONES DE RSE
          </h4>
          <p className="font-light text-xs lg:text-base lg:text-[0.75rem] text-justify lg:px-4">
            Convertimos regalos corporativos en una oportunidad para generar
            impacto social. Nuestros regalos empresariales son creados con
            dedicación por personas en situación de vulnerabilidad, brindándoles
            una oportunidad de inclusión y desarrollo.
          </p>
        </div>
        <div className="mb-4 lg:mb-7 lg:w-1/4 lg:px-0.5 lg:flex lg:flex-col">
          <img
            loading="lazy"
            className="max-lg:max-h-[260px] max-lg:w-full lg:h-56 object-cover"
            src={manosJuntas}
            alt=""
          />
          <h4 className="font-black text-sm lg:text-lg lg:px-14 mt-1 lg:my-1.5">
            BIENESTAR
          </h4>
          <p className="font-light text-xs lg:text-base lg:text-[0.75rem] text-justify lg:px-4">
            A través de dinámicas al aire libre, experiencias con animales y
            propuestas innovadoras, creamos jornadas que potencian la cohesión,
            creatividad y el bienestar de los equipos. ¡Transformá la manera de
            conectar con tu equipo!
          </p>
        </div>
        <div className="lg:w-1/4 lg:px-0.5 lg:flex lg:flex-col">
          <img
            loading="lazy"
            className="max-lg:max-h-[260px] max-lg:w-full lg:h-56 object-cover"
            src={colaboraConProyectos}
            alt=""
          />
          <h4 className="font-black text-sm lg:text-lg lg:px-14 mt-1 lg:my-1.5">
            COLABORA CON PROYECTOS
          </h4>
          <p className="font-light text-xs lg:text-base lg:text-[0.75rem] text-justify lg:px-4">
            Consulta y conoce nuestros proyectos activos para ser parte de la
            construccion de un tejido social mas solido en Mendoza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
