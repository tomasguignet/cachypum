import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="m-4 sm:my-0 sm:mx-0 sm:w-[27%] sm:px-2">
      <div className="sm:flex sm:flex-col sm:h-[28rem] lg:h-[30rem] sm:p-4">
        <img
          className="w-full h-72 sm:h-auto sm:aspect-square object-cover"
          src={project.cardImage}
          alt={project.title}
        />
        <div className="flex-1 flex flex-col justify-between mt-4">
          <div className="sm:text-left text-[#41515e] max-sm:mb-7">
            <h3 className="font-[Sora] font-black text-base sm:text-sm lg:text-base">
              {project.title}
            </h3>
            <p className="font-[Sora] font-semibold text-xs sm:text-[0.7rem] lg:text-xs mt-2 mb-4 md:pr-8">
              {project.cardDescription}
            </p>
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="sm:min-w-20 font-[Roboto] font-medium text-sm sm:text-sm text-oliveGreen border-3 rounded-sm border-oliveGreen px-2.5 sm:px-3.5 py-0.5 self-center sm:self-start sm:mt-auto hover:bg-oliveGreen/20 active:bg-oliveGreen/20"
          >
            Más Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
