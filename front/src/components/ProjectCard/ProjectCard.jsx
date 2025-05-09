import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  return (
    <div className="m-4 sm:my-0 sm:mx-0 sm:w-1/3 sm:px-4">
      <div className="sm:flex sm:flex-col sm:h-[39rem] sm:p-4">
        <img
          className="w-full h-72 sm:h-auto sm:aspect-square object-cover"
          src={project.cardImage}
          alt={project.title}
        />
        <div className="flex-1 flex flex-col justify-between mt-4">
          <div className="sm:text-left">
            <h3 className="font-[Sora] font-black text-black/75 text-base sm:text-2xl">
              {project.title}
            </h3>
            <p className="font-[Sora] font-semibold text-black/70 text-xs sm:text-[1.120rem] mt-2 mb-3">
              {project.cardDescription}
            </p>
          </div>
          <Link
            to={project.link}
            className="sm:min-w-24 font-[Roboto] font-medium text-sm sm:text-lg text-oliveGreen border-3 rounded-sm border-oliveGreen px-2.5 sm:px-3.5 py-1 sm:py-0.5 self-center sm:self-start sm:mt-auto"
          >
            Más Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
