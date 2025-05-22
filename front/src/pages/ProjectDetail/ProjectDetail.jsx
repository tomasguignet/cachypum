import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";

const ProjectDetail = () => {
  const { id } = useParams(); // Se obtiene el id de la URL
  const [project, setProject] = useState(null);

  // Función que devuelve el subtitulo con la palabra resaltada
  const resaltarPalabra = (text, word) => {
    const parts = text.split(new RegExp(`(${word})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === word.toLowerCase() ? (
        <span key={i} className="font-[Sora] text-lightOrange font-black">
          {part}
        </span>
      ) : (
        <span key={i} className="font-[DM_Serif_Text] text-oliveGreen">
          {part}
        </span>
      )
    );
  };

  useEffect(() => {
    const currentProject = projects.find((p) => p.id === parseInt(id));
    setProject(currentProject);
  }, [id]);

  const title1 = project?.title.split(" ")[0];
  const title2 = project?.title.trim().split(" ").slice(1).join(" ");

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }
  return (
    <section>
      <header>
        <div className="relative w-full h-24 sm:h-36 lg:h-44 content-center">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={project.titleImage}
            alt={project.title}
          />
          <div className="relative z-10 text-2xl text-white text-center">
            <h1 className="inline font-[DM_Serif_Text] text-[1.7rem] sm:text-4xl lg:text-5xl">
              {title1}
            </h1>
            <h1 className="inline font-[Sora] font-black sm:text-3xl lg:text-[2.5rem]">{` ${title2}`}</h1>
          </div>
        </div>
      </header>
      <div className="px-2 xl:px-10 2xl:px-14 mb-2.5">
        <div className="flex flex-col lg:flex-row text-center mt-2 sm:mt-4 lg:mt-6 lg:px-8">
          <h2 className="lg:w-1/2 lg:px-3 xl:pr-48  mb-3 text-lg sm:text-xl lg:text-2xl leading-5 lg:content-center lg:text-left">
            {resaltarPalabra(project.subtitle, project.importantWord)}
          </h2>
          <p className="lg:w-1/2 text-justify text-xs sm:text-base lg:text-lg lg:leading-6">
            {project.summary?.map((line, i) => (
              <span key={i} className={line.class}>
                {line.text}
              </span>
            ))}
          </p>
        </div>
        {project.purpose && (
          <div className="mt-6 lg:flex lg:gap-x-5">
            <div className="lg:w-3/5 lg:content-center">
              <div className="mb-0.5 lg:mb-2.5 text-center lg:text-left text-oliveGreen">
                <h3 className="inline font-[DM_Serif_Text font-normal text-base sm:text-xl lg:text-2xl">
                  {"nuestro "}
                </h3>
                <h3 className="inline font-[Sora] font-black text-[0.9rem] sm:text-xl lg:text-2xl">
                  propósito
                </h3>
              </div>
              {Array.isArray(project.purpose.purposeText) ? (
                <div className="whitespace-pre-line">
                  <p className="text-[0.59rem] sm:text-[0.76rem] lg:text-base">
                    {project.purpose.purposeText?.map((line, i) => (
                      <span key={i} className={line.class}>
                        {line.text}
                      </span>
                    ))}
                  </p>
                </div>
              ) : (
                <div className="lg:flex lg:gap-x-10">
                  {project.purpose.array?.map((purpose) => (
                    <div key={purpose.title} className="mb-1.5 ">
                      <h3 className="font-[Sora] font-bold text-[0.95rem] sm:text-lg lg:text-2xl lg:leading-6 lg:mb-1">
                        {purpose.title}
                      </h3>
                      <p className="text-[0.59rem] sm:text-[0.76rem] lg:text-base text-justify mb-2.5">
                        {purpose.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {project.purpose.image && (
              <div className="lg:w-2/5">
                <img
                  className="justify-self-center lg:w-4/5 mt-2"
                  src={project.purpose.image}
                  alt=""
                />
              </div>
            )}
          </div>
        )}
        {project.proposal && (
          <div className="mt-6 lg:flex lg:gap-x-4">
            <div className="lg:w-3/5 lg:content-center">
              <div className="mb-0.5 lg:mb-2 text-center lg:text-left text-oliveGreen">
                <h3 className="inline font-[DM_Serif_Text font-normal text-base sm:text-xl lg:text-2xl">
                  {"la "}
                </h3>
                <h3 className="inline font-[Sora] font-black text-[0.9rem] sm:text-xl lg:text-2xl">
                  propuesta
                </h3>
              </div>
              <div>
                {project.proposal.proposalList ? (
                  <ul className="px-3 pl-4">
                    {project.proposal.proposalList.map((proposal) => (
                      <li className="text-[0.59rem] sm:text-[0.76rem] lg:text-base list-disc">
                        <h5 className="inline font-bold">{proposal.title}</h5>
                        <p className="inline">{proposal.text}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="whitespace-pre-line">
                    <p className="text-[0.59rem] sm:text-[0.76rem] lg:text-base">
                      {project.proposal.proposalText?.map((line, i) => (
                        <span key={i} className={line.class}>
                          {line.text}
                        </span>
                      ))}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {project.proposal.image && (
              <div className="lg:w-2/5 content-center">
                <img
                  className="justify-self-center mt-2 lg:w-4/5 lg:object-cover"
                  src={project.proposal.image}
                  alt=""
                />
              </div>
            )}
          </div>
        )}
        {project.stateOfProject && (
          <div className="mt-10 lg:flex lg:gap-x-4">
            <div className="lg:w-3/5 lg:content-center">
              <div className="mb-0.5 text-center lg:text-left text-oliveGreen">
                <h3 className="inline font-[DM_Serif_Text font-normal text-base sm:text-xl lg:text-2xl">
                  {"estado del "}
                </h3>
                <h3 className="inline font-[Sora] font-black text-[0.9rem] sm:text-xl lg:text-2xl">
                  proyecto
                </h3>
              </div>
              <p className="text-[0.59rem] sm:text-[0.76rem] lg:text-base mb-2">
                {project.stateOfProject.text}
              </p>
            </div>
            <div className="lg:w-2/5">
              <img
                className="justify-self-center lg:w-4/5"
                src={project.stateOfProject.image}
                alt=""
              />
            </div>
          </div>
        )}
        {project.team && (
          <div className="mt-6">
            <div className="mb-0.5 lg:mb-1 text-center lg:text-left text-oliveGreen">
              <h3 className="inline font-[DM_Serif_Text font-normal text-base sm:text-xl lg:text-2xl">
                {"el "}
              </h3>
              <h3 className="inline font-[Sora] font-black text-[0.9rem] sm:text-xl lg:text-2xl">
                equipo
              </h3>
            </div>
            <div className="lg:flex">
              <p className="text-[0.59rem] sm:text-[0.76rem] lg:text-base text-center lg:text-left lg:w-3/5 mb-1.5">
                {project.team.text}
              </p>
              <img
                className=" place-self-center object-cover w-48 lg:w-2/5 h-44 lg:h-60"
                src={project.team.image}
                alt=""
              />
            </div>
          </div>
        )}
        {project.workshops && (
          <div className="mt-3 whitespace-pre-line">
            <div className="mb-0.5 text-center lg:text-left text-oliveGreen">
              <h3 className="inline font-[DM_Serif_Text font-normal text-base sm:text-xl lg:text-2xl">
                {"sus "}
              </h3>
              <h3 className="inline font-[Sora] font-black text-[0.9rem] sm:text-xl lg:text-2xl">
                talleres
              </h3>
            </div>
            <div className="flex gap-x-2.5 justify-center">
              {project.workshops.map((workshop) => (
                <div className="flex flex-col items-center justify-between">
                  <img
                    className="w-12 sm:w-22 lg:w-[7.4rem]"
                    src={workshop.image}
                    alt=""
                  />
                  <h3 className="text-lightOrange font-extrabold text-[0.73em] sm:text-[0.8rem] lg:text-base">
                    {workshop.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
