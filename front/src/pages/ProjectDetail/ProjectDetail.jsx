import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";

const ProjectDetail = () => {
  const { id } = useParams(); // Se obtiene el id de la URL
  const [project, setProject] = useState(null);

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
        <div className="relative w-full h-24 content-center">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={project.titleImage}
            alt={project.title}
          />
          <div className="relative z-10 text-2xl text-white text-center">
            <h1 className="inline font-[DM_Serif_Text] text-[1.7rem]">
              {title1}
            </h1>
            <h1 className="inline font-[Sora] font-black">{` ${title2}`}</h1>
          </div>
        </div>
      </header>
      <div className="flex flex-col text-center mt-2">
        <h2 className="mb-3">{project.subtitle}</h2>
        <p>{project.summary}</p>
      </div>
      {project.purpose && (
        <div>
          <div>
            <h3>{"nuestro "}</h3>
            <h3>propósito</h3>
          </div>
          {typeof project.purpose === "string" ? (
            <p>{project.purpose}</p>
          ) : (
            <div>
              {project.purpose.map((purpose) => (
                <div key={purpose.title} className="mb-1.5">
                  <h3 className="font-[DM_Serif_Text] text-base sm:text-2xl lg:text-[2.2rem] text-oliveGreen leading-2 sm:leading-4 lg:leading-6">
                    {purpose.title}
                  </h3>
                  <p className="text-[0.5rem] sm:text-[0.73rem] lg:text-base text-justify">
                    {purpose.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
