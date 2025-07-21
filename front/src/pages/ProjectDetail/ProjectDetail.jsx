import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import BackArrow from "../../components/BackArrow/BackArrow";

const ProjectDetail = () => {
  const { id } = useParams(); // Se obtiene el id de la URL
  const [project, setProject] = useState(null);

  // Función que devuelve el subtitulo con la palabra resaltada
  const resaltarPalabra = (text, word) => {
    const parts = text.split(/(\s+)/);
    console.log(parts);

    // Encontramos el índice de la última coincidencia
    const lastIndex = parts.length - 1;
    console.log(lastIndex);

    return parts.map((part, i) => {
      const isHighlighted = part.toLowerCase() === word.toLowerCase();
      const isLastHighlighted = isHighlighted && i === lastIndex;

      const baseClass = isHighlighted
        ? "font-[Sora] text-lightOrange font-black"
        : "font-[DM_Serif_Text] lg:text-[1.6rem] text-oliveGreen";

      const blockClass = isLastHighlighted ? " block" : "";

      return (
        <span key={i} className={baseClass + blockClass}>
          {part}
        </span>
      );
    });
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
      <header className="lg:mb-10">
        <BackArrow />
        <div className="relative w-full h-24 sm:h-36 lg:h-56 content-center">
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
      <div className="lg:w-4/5 lg:flex lg:flex-col lg:justify-self-center px-2 mb-2.5">
        <div className="flex flex-col lg:flex-row text-center mt-2 sm:mt-4 lg:mt-6 lg:mb-10 lg:pl-8">
          <h2 className="lg:w-1/2 lg:px-3 lg:pr-10 xl:pr-10 2xl:pr-30  mb-3 text-lg sm:text-xl lg:text-2xl leading-7 lg:content-center lg:text-left lg:place-self-start lg:mt-8">
            {resaltarPalabra(project.subtitle, project.importantWord)}
          </h2>
          <div className="flex flex-col lg:w-2/3 whitespace-pre-line">
            <p className="lg:w-4/5 text-justify text-xs sm:text-base lg:text-lg lg:leading-6 text-[#435360]">
              {project.summary?.map((line, i) => (
                <span key={i} className={line.class}>
                  {line.text}
                </span>
              ))}
            </p>
            {project.summaryImage && (
              <img
                className="w-50 sm:w-60 self-center lg:w-64 lg:self-end lg:mr-10"
                src={project.summaryImage}
              />
            )}
          </div>
        </div>
        {project.purpose && (
          <div className="mt-6 lg:flex lg:gap-x-5">
            <div className=" lg:content-center">
              <div className="mb-1.5 lg:mb-4 text-center lg:text-left text-oliveGreen inline-block relative">
                <div className="inline-block">
                  <h3 className="inline font-[DM_Serif_Text] font-normal text-base sm:text-xl lg:text-2xl">
                    {"nuestro "}
                  </h3>
                  <h3 className="inline font-[Sora] font-black text-[0.9rem] sm:text-xl lg:text-2xl">
                    propósito
                  </h3>
                </div>
                <div className="absolute left-[57.5%] transform -translate-x-1/2 bottom-[-0.1rem] lg:-bottom-1 mt-1 h-[3px] bg-oliveGreen w-[115%]"></div>
              </div>
              {Array.isArray(project.purpose.purposeText) ? (
                <div className="whitespace-pre-line">
                  <p className="lg:w-4/6 text-[0.59rem] sm:text-[0.76rem] lg:text-base text-[#435360]">
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
                    <div
                      key={purpose.title}
                      className="mb-1.5 text-[#435360] lg:mr-8"
                    >
                      <h3 className="font-[Sora] font-bold text-[0.95rem] sm:text-lg lg:text-lg lg:leading-6 lg:mb-1">
                        {purpose.title}
                      </h3>
                      <p className="text-[0.59rem] sm:text-[0.76rem] lg:text-base mb-2.5">
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
          <div className="mt-6 lg:mt-12 lg:flex lg:gap-x-4">
            <div className="lg:w-3/5 lg:content-center">
              <div className="mb-1.5 lg:mb-4 text-center lg:text-left text-oliveGreen inline-block relative">
                <div className="inline-block">
                  <h3 className="inline font-[DM_Serif_Text] font-normal text-base sm:text-xl lg:text-2xl">
                    la{" "}
                  </h3>
                  <h3 className="inline font-[Sora] font-black text-[0.9rem] sm:text-xl lg:text-2xl">
                    propuesta
                  </h3>
                </div>
                <div className="absolute left-[57.5%] transform -translate-x-1/2 bottom-[-0.1rem] lg:-bottom-1 h-[3px] bg-oliveGreen w-[115%]"></div>
              </div>
              <div>
                {project.proposal.proposalList ? (
                  <ul className="px-3 pl-4">
                    {project.proposal.proposalList.map((proposal) => (
                      <li className="text-[0.59rem] sm:text-[0.76rem] lg:text-base list-disc text-[#435360]">
                        <h5 className="inline font-bold">{proposal.title}</h5>
                        <p className="inline">{proposal.text}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="whitespace-pre-line">
                    <p className="text-[0.59rem] sm:text-[0.76rem] lg:text-base text-[#435360]">
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
          <div className="mt-20 lg:flex lg:gap-x-4">
            <div className="lg:w-3/5 lg:content-center">
              <div className="mb-1.5 lg:mb-4 text-center lg:text-left text-oliveGreen inline-block relative">
                <div className="inline-block">
                  <h3 className="inline font-[DM_Serif_Text] font-normal text-base sm:text-xl lg:text-2xl">
                    estado del{" "}
                  </h3>
                  <h3 className="inline font-[Sora] font-black text-[0.9rem] sm:text-xl lg:text-2xl">
                    proyecto
                  </h3>
                </div>
                <div className="absolute left-[57.5%] transform -translate-x-1/2 bottom-[-0.1rem] lg:-bottom-1 h-[3.5px] bg-oliveGreen w-[115%]"></div>
              </div>
              <p className="text-[0.59rem] sm:text-[0.76rem] lg:text-base mb-2 text-[#435360]">
                {project.stateOfProject.text}
              </p>
            </div>
            <div className="lg:w-2/5 content-center">
              <img
                className="justify-self-center lg:w-4/6"
                src={project.stateOfProject.image}
                alt=""
              />
            </div>
          </div>
        )}
        {project.team && (
          <div className="mt-6">
            <div className="mb-1.5 lg:mb-3 text-center lg:text-left text-oliveGreen inline-block relative">
              <div className="inline-block">
                <h3 className="inline font-[DM_Serif_Text] font-normal text-base sm:text-xl lg:text-2xl">
                  el{" "}
                </h3>
                <h3 className="inline font-[Sora] font-black text-[0.9rem] sm:text-xl lg:text-2xl">
                  equipo
                </h3>
              </div>
              <div className="absolute left-[57.5%] transform -translate-x-1/2 bottom-[-0.1rem] lg:-bottom-1 h-[3px] bg-oliveGreen w-[115%]"></div>
            </div>
            <div className="lg:flex">
              <p className="text-[0.59rem] sm:text-[0.76rem] lg:text-base text-center lg:text-left lg:w-3/5 mb-1.5 lg:pr-12 text-[#435360]">
                {project.team.text}
              </p>
              <img
                className=" place-self-center object-cover w-48 lg:w-2/5 h-44 lg:h-80"
                src={project.team.image}
                alt=""
              />
            </div>
          </div>
        )}
        {project.workshops && (
          <div className="mt-3 whitespace-pre-line">
            <div className="mb-1.5 lg:mb-2 text-center lg:text-left text-oliveGreen inline-block relative">
              <div className="inline-block">
                <h3 className="inline font-[DM_Serif_Text] font-normal text-base sm:text-xl lg:text-2xl">
                  sus{" "}
                </h3>
                <h3 className="inline font-[Sora] font-black text-[0.9rem] sm:text-xl lg:text-2xl">
                  talleres
                </h3>
              </div>
              <div className="absolute left-[57.5%] transform -translate-x-1/2 bottom-[-0.1rem] lg:-bottom-1 h-[3px] bg-oliveGreen w-[115%]"></div>
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
      {project.images && (
        <div className="flex bg-[url(/images/fondo.jpg)] justify-center mt-10">
          <div className="flex justify-center xs:flex-row flex-wrap items-center w-full max-w-6xl gap-6 my-16">
            {project.images.map((image) => (
              <div
                key={image.src}
                className="w-30 h-30 sm:w-40 sm:h-40 lg:w-60 lg:h-60 relative"
              >
                <img
                  key={image.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {project.finalContent && (
        <div className="flex flex-col xs:h-[56vw] h-[48vw]">
          <div className="h-[60%]">
            <img
              className="w-full h-full object-cover object-center"
              src={project.finalContent.image}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center py-3 sm:py-5 md:py-8 lg:py-10 xl:py-14 h-2/5 whitespace-pre-line bg-[url(/images/finfondo.jpg)] bg-cover">
            <p className="text-center text-[0.35rem] xs:text-[0.45rem] sm:text-[0.6rem] md:text-xs lg:text-[0.8rem] xl:text-sm italic font-[Montserrat] text-[#6a8876] max-w-xl">
              {project.finalContent.text}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
