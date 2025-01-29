import PropTypes from "prop-types";
import PROJECTS from "../../data/projects";
import Project from "../molecules/Project";

const ProjectContainer = ({ projectsToShow }) => {
  const projectsVisible = PROJECTS.slice(0, projectsToShow); // Mostrar proyectos según el estado

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-y-size-xl">
      {projectsVisible.map((project, index) => (
        <Project {...project} key={index} />
      ))}
    </div>
  );
};
ProjectContainer.propTypes = {
  projectsToShow: PropTypes.bool.isRequired,
};

export default ProjectContainer;
