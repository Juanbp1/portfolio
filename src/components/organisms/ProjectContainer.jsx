import PROJECTS from "../../data/projects";
import Project from "../molecules/Project";

const ProjectContainer = () => {
  return (
    <div className="flex justify-between">
      {PROJECTS.map((project, index) => (
        <Project {...project} key={index} />
      ))}
    </div>
  );
};

export default ProjectContainer;
