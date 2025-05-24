import caballoNegro from "../../images/caballoNegro.jpg";
import chicaMate from "../../images/chicaMate.jpeg";
import grupoPersonas from "../../images/grupoPersonas.jpeg";
import caballoAbajo from "../../images/caballoAbajo.jpg";
import { useEffect } from "react";

const MoreInfo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // 👈 Esto scrollea al tope
  }, []);

  return (
    <section className="bg-oliveGreen xl:h-full brightness-110 text-center text-white pt-3.5">
      <p className="text-sm lg:text-base px-4 xl:w-[30rem] xl:place-self-center mb-8 lg:mb-10">
        En nuestra <strong>fundación</strong>, diseñamos experiencias
        significativas para empresas que desean fortalecer su compromiso con la
        <strong> Responsabilidad Social Empresarial</strong> (RSE).
      </p>
      <div className="font-[Sora] px-1 lg:px-6 pb-4 xl:flex xl:w-full">
        <div className="mb-4 lg:mb-7 xl:w-1/4 xl:px-0.5 xl:flex xl:flex-col">
          <img
            loading="lazy"
            className="xl:h-56 xl:object-cover"
            src={caballoNegro}
            alt=""
          />
          <h4 className="font-black text-sm lg:text-xl xl:text-lg xl:px-14 mt-1 xl:my-1.5">
            EVENTOS RESPONSABLES
          </h4>
          <p className="font-light text-xs lg:text-base xl:text-[0.9rem] xl:px-4">
            A través de nuestros Eventos Responsables, ofrecemos celebraciones
            de fin de año con impacto positivo, jornadas de forestación y
            cuidado ambiental. Actividades de bienestar para colaboradores y sus
            familias.
          </p>
        </div>
        <div className="mb-4 lg:mb-7 xl:w-1/4 xl:px-0.5 xl:flex xl:flex-col">
          <img
            loading="lazy"
            className="xl:h-56 xl:object-cover"
            src={chicaMate}
            alt=""
          />
          <h4 className="font-black text-sm lg:text-xl xl:px-14 mt-1 xl:my-1.5">
            SOLUCIONES DE ASE
          </h4>
          <p className="font-light text-xs lg:text-base xl:text-[0.9rem] xl:px-4">
            Convertimos regalos corporativos en una oportunidad para generar
            impacto social. Nuestros regalos empresariales son creados con
            dedicación por personas en situación de vulnerabilidad, brindándoles
            una oportunidad de inclusión y desarrollo.
          </p>
        </div>
        <div className="mb-4 lg:mb-7 xl:w-1/4 xl:px-0.5 xl:flex xl:flex-col">
          <img
            loading="lazy"
            className="xl:h-56 xl:object-cover"
            src={grupoPersonas}
            alt=""
          />
          <h4 className="font-black text-sm lg:text-xl xl:px-14 mt-1 xl:my-1.5">
            TEAM BULDING
          </h4>
          <p className="font-light text-xs lg:text-base xl:text-[0.9rem] xl:px-4">
            A través de dinámicas al aire libre, experiencias con animales y
            propuestas innovadoras, creamos jornadas que potencian la cohesión y
            el bienestar de los equipos. ¡Transformá la manera de conectar con
            tu equipo!
          </p>
        </div>
        <div className="xl:w-1/4 xl:px-0.5 xl:flex xl:flex-col">
          <img
            loading="lazy"
            className="xl:h-56 xl:object-cover"
            src={caballoAbajo}
            alt=""
          />
          <h4 className="font-black text-sm lg:text-xl xl:px-14 mt-1 xl:my-1.5">
            COLABORA CON PROYECTOS
          </h4>
          <p className="font-light text-xs lg:text-base xl:text-[0.9rem] xl:px-4">
            Consulta y conoce nuestros proyectos activos para ser parte de la
            construccion de un tejido social mas solido en Mendoza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
