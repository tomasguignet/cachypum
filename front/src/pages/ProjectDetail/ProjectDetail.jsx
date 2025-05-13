import React from "react";
import PropTypes from "prop-types";

const ProjectDetail = ({ project }) => {
  const {
    title,
    titleImage,
    subtitle,
    summary,
    purpose,
    team,
    workshops,
    images,
    proposal,
    stateOfProject,
  } = project;

  return <div></div>;
};

ProjectDetail.propTypes = {
  project: PropTypes.object,
};

export default ProjectDetail;
