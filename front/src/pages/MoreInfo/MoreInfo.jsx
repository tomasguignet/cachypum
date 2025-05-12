import caballoNegro from "../../images/caballoNegro.jpg";
import chicaMate from "../../images/chicaMate.jpeg";
import grupoPersonas from "../../images/grupoPersonas.jpeg";
import caballoAbajo from "../../images/caballoAbajo.jpg";

const MoreInfo = () => {
  return (
    <section className="bg-oliveGreen brightness-110 text-center text-white pt-3.5">
      <p className="text-sm px-4 mb-4">
        En nuestra <strong>fundación</strong>, diseñamos experiencias
        significativas para empresas que desean fortalecer su compromiso con la
        <strong> Responsabilidad Social Empresarial</strong> (RSE).
      </p>
      <div className="font-[Sora] px-1 pb-4">
        <div className="mb-4">
          <img src={caballoNegro} alt="" />
          <h4 className="font-black text-sm mt-1">EVENTOS RESPONSABLES</h4>
          <p className="font-light text-xs">
            A través de nuestros Eventos Responsables, ofrecemos celebraciones
            de fin de año con impacto positivo, jornadas de forestación y
            cuidado ambiental. Actividades de bienestar para colaboradores y sus
            familias.
          </p>
        </div>
        <div className="mb-4">
          <img src={chicaMate} alt="" />
          <h4 className="font-black text-sm mt-1">SOLUCIONES DE ASE</h4>
          <p className="font-light text-xs">
            Convertimos regalos corporativos en una oportunidad para generar
            impacto social. Nuestros regalos empresariales son creados con
            dedicación por personas en situación de vulnerabilidad, brindándoles
            una oportunidad de inclusión y desarrollo.
          </p>
        </div>
        <div className="mb-4">
          <img src={grupoPersonas} alt="" />
          <h4 className="font-black text-sm mt-1">TEAM BULDING</h4>
          <p className="font-light text-xs">
            A través de dinámicas al aire libre, experiencias con animales y
            propuestas innovadoras, creamos jornadas que potencian la cohesión y
            el bienestar de los equipos. ¡Transformá la manera de conectar con
            tu equipo!
          </p>
        </div>
        <div>
          <img src={caballoAbajo} alt="" />
          <h4 className="font-black text-sm mt-1">COLABORA CON PROYECTOS</h4>
          <p className="font-light text-xs">
            Consulta y conoce nuestros proyectos activos para ser parte de la
            construccion de un tejido social mas solido en Mendoza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
