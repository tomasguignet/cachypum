import caballoBlanco from "../../images/caballoBlanco.jpeg";
import manosConejo from "../../images/manosConejo.jpeg";

const Fundation = () => {
  return (
    <div>
      <section className="flex flex-row pl-2 mt-2 sm:h-80 lg:h-[30rem]">
        <div className="w-2/4 sm:flex sm:flex-col sm:justify-center sm:px-3 lg:px-7">
          <h1 className="font-[DM_Serif_Text] text-base sm:text-2xl lg:text-[2.2rem] text-oliveGreen leading-2 sm:leading-4 lg:leading-6">
            nuestro
          </h1>
          <h1 className="font-[Sora] font-black text-base sm:text-2xl lg:text-[2.2rem] text-oliveGreen">
            proposito
          </h1>
          <div className="text-[0.5rem] sm:text-[0.73rem] lg:text-base text-justify">
            <p className="mt-1.5 mb-1.5">
              Generamos espacios que mejoran la calidad de vida y el bienestar
              integral mediante
              <strong> actividades sanitarias, educativas y sociales.</strong>
            </p>
            <p className="mb-1.5">
              Potenciamos el desarrollo de habilidades y conocimientos con
              enfoques lúdicos, recreativos y vivenciales, en un ambiente que
              estimula los sentidos y promueve la inclusión socio-laboral.
            </p>
            <p className="">
              Proporcionamos un entorno de apoyo que fomenta una vida plena y
              significativa <strong> en armonía con la naturaleza. </strong>
            </p>
          </div>
        </div>
        <img
          className="w-2/4 object-cover"
          src={caballoBlanco}
          alt="caballo"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%)", // Para navegadores basados en WebKit
          }}
        />
      </section>
      <section className="flex flex-row pr-2 mt-4 sm:h-80 lg:h-[30rem]">
        <img
          className="w-2/4 object-cover"
          src={manosConejo}
          alt="caballo"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)", // Para navegadores basados en WebKit
          }}
        />
        <div className="w-2/4 sm:flex sm:flex-col sm:justify-center sm:px-3 lg:px-7">
          <h1 className="font-[DM_Serif_Text] text-base sm:text-2xl lg:text-[2.2rem] text-right text-lightOrange leading-2 sm:leading-4 lg:leading-6">
            nuestra
          </h1>
          <h1 className="font-[Sora] font-black text-base sm:text-2xl lg:text-[2.2rem] text-right text-lightOrange">
            visión
          </h1>
          <div className="text-[0.5rem] sm:text-[0.73rem] lg:text-base text-justify">
            <p className="mt-1.5 mb-1.5">
              Nuestra visión es ser una
              <strong>
                entidad de referencia que promueva una sociedad justa y
                responsable
              </strong>
              , con igualdad de oportunidades y respeto a la diversidad.
            </p>
            <p className="mb-1.5">
              Buscamos <strong> fortalecer el tejido social </strong> mediante
              la integración, inclusión y movilidad social de niños, jóvenes,
              mujeres, adultos mayores y personas con discapacidad en situación
              de vulnerabilidad.
            </p>
            <p className="">
              Estamos comprometidos en
              <strong>
                crear un entorno donde cada individuo pueda alcanzar su máximo
                potencial
              </strong>
              en un ambiente de respeto y apoyo mutuo, en sinergia con la
              naturaleza.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-4 sm:mt-8 lg:mt-10">
        <div className="text-center mb-1.5 lg:mb-3">
          <h1 className="font-[DM_Serif_Text] text-base sm:text-2xl lg:text-[2.2rem] text-oliveGreen inline">
            nuestros
          </h1>
          <h1 className="font-[Sora] font-black text-base sm:text-2xl lg:text-[2.2rem] text-oliveGreen inline">
            {" "}
            valores
          </h1>
        </div>
        <div className="flex flex-row justify-center gap-x-14 sm:gap-x-28 lg:gap-x-48">
          <div className="flex flex-col text-center font-[Sora]">
            <h3 className="font-medium text-[0.7rem] sm:text-[0.8rem] lg:text-base mb-1">
              HUMANOS
            </h3>
            <ul className="text-[0.5rem] sm:text-[0.65rem] lg:text-[0.8rem]">
              <li>Justicia</li>
              <li>Cultura</li>
              <li>Alegría</li>
              <li>Inclusión</li>
              <li>Humanidad</li>
            </ul>
          </div>
          <div className="flex flex-col text-center font-[Sora]">
            <h3 className="font-medium text-[0.7rem] sm:text-[0.8rem] lg:text-base mb-1">
              PROFESIONALES
            </h3>
            <ul className="text-[0.5rem] sm:text-[0.65rem] lg:text-[0.8rem]">
              <li>Trabajo en equipo</li>
              <li>Compromiso social</li>
              <li>Integridad</li>
              <li>Superacion</li>
              <li>Perseverancia</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-4 sm:mt-8 lg:mt-10">
        <div className="text-center mb-1.5 lg:mb-3">
          <h1 className="font-[DM_Serif_Text] text-base sm:text-2xl lg:text-[2.2rem] text-lightOrange inline">
            nuestros
          </h1>
          <h1 className="font-[Sora] font-black text-base sm:text-2xl lg:text-[2.2rem] text-lightOrange inline">
            {" "}
            objetivos
          </h1>
        </div>
        <div className="flex flex-row font-[Sora] text-[0.47rem] sm:text-[0.73rem] lg:text-base px-2 sm:px-8 lg:px-16 gap-x-2 sm:gap-x-3.5 lg:gap-x-6 text-justify">
          <div className="w-1/2">
            <p className="mb-1">
              Desde Fundación Cachypum trabajamos activamente para mejorar la
              calidad de vida de las personas en situación de vulnerabilidad.
              Nuestra misión está alineada con los Objetivos de Desarrollo
              Sostenible (ODS) de las Naciones Unidas, los cuales guían nuestras
              acciones y proyectos.
            </p>
            <p>
              Creemos firmemente en la importancia de las alianzas y la
              colaboración para alcanzar estos objetivos, y estamos
              comprometidos a seguir trabajando en proyectos que generen un
            </p>
          </div>
          <div className="w-1/2">
            <p className="mb-1">
              impacto positivo en la sociedad y el medio ambiente.
            </p>
            <p className="mb-1">
              En Cachypum cada acción cuenta y cada esfuerzo nos acerca más a un
              futuro sostenible y próspero para todos.
            </p>
            <p>
              Invitamos a todas las personas y organizaciones a unirse a
              nosotros en este camino hacia el cumplimiento de los ODS,
              asegurando que nadie se quede atrás.
            </p>
          </div>
        </div>
        <img className="mt-2" src="" alt="CUADROS DE COLORES" />
      </section>
    </div>
  );
};

export default Fundation;
