import HeadingWithIcon from "../molecules/HeadingWithIcon";
import corona from "../../../public/assets/svg/corona.svg?react";
import ProjectContainer from "./ProjectContainer";
import Buttons from "../atoms/Buttons";
import { HiArrowLongRight } from "react-icons/hi2";
import { useState } from "react";

const ProjectsSection = () => {
  const [projectsToShow, setProjectsToShow] = useState(3); // Número inicial de proyectos a mostrar
  const showMoreProjects = () => {
    setProjectsToShow((prevState) => prevState + 3); // Aumentar el número de proyectos a mostrar
  };

  return (
    <div
      className="flex flex-col bg-primary-light pb-size-5xl pt-size-5xl dark:bg-gray-500"
      id="myProjects"
    >
      <div className="mx-auto flex w-full max-w-container flex-col gap-size-2xl">
        <HeadingWithIcon
          titleColor="text-gray-600 dark:text-white"
          hrColor="bg-gradient-to-r from-primary to-secondary dark:from-darkMode-primary dark:to-darkMode-secondary"
          Icon={corona}
          iconColor="dark:fill-accent dark:stroke-accent"
        />

        <ProjectContainer projectsToShow={projectsToShow} />
        {projectsToShow <= 3 && (
          <Buttons
            className="mx-auto bg-primary text-white hover:bg-primaryDark dark:bg-light dark:text-gray-600"
            label="Ver mas"
            icon={
              <HiArrowLongRight className="size-size-md text-white dark:text-gray-600" />
            }
            onclick={showMoreProjects}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
