import HeadingWithIcon from "../molecules/HeadingWithIcon";
import corona from "../../../public/assets/svg/corona.svg?react";
import ProjectContainer from "./ProjectContainer";
import Buttons from "../atoms/Buttons";
import { HiArrowLongRight } from "react-icons/hi2";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col bg-primary-light pb-size-5xl pt-size-5xl dark:bg-gray-500">
      <div className="mx-auto flex w-full max-w-container flex-col gap-size-2xl">
        <HeadingWithIcon
          titleColor="text-gray-600 dark:text-white"
          hrColor="bg-gradient-to-r from-primary to-secondary dark:from-darkMode-primary dark:to-darkMode-secondary"
          Icon={corona}
          iconColor="dark:fill-accent dark:stroke-accent"
        />

        <ProjectContainer />
        <Buttons
          className="mx-auto bg-primary text-white hover:bg-primaryDark dark:bg-darkMode-primary dark:text-light dark:hover:bg-darkMode-secondary"
          label="Ver mas"
          icon={
            <HiArrowLongRight className="size-size-md text-white dark:text-light" />
          }
          // size="small"
          // onclick={() => handleRedirect(liveUrl)}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
