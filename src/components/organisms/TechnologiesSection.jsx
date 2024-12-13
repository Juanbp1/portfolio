import HeadingWithIcon from "../molecules/HeadingWithIcon";
import simboloCode from "../../../public/assets/svg/simbolo-code.svg?react";
import TechTag from "../atoms/TechTag";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoSass } from "react-icons/io5";
import { SiPenpot } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiJest } from "react-icons/si";

const TECHNOLOGIES = [
  { name: "HTML", icon: IoLogoHtml5, iconColor: "text-html" },
  { name: "Css", icon: IoLogoCss3, iconColor: "text-css" },
  { name: "Sass", icon: IoLogoSass, iconColor: "text-sass" },
  { name: "Javascript", icon: RiJavascriptFill, iconColor: "text-javascript" },
  { name: "React", icon: IoLogoReact, iconColor: "text-react" },
  { name: "Tailwind", icon: RiTailwindCssFill, iconColor: "text-tailwind" },
  { name: "Jest", icon: SiJest, iconColor: "text-jest" },
  { name: "Git", icon: FaGitAlt, iconColor: "text-git" },
  { name: "Penpot", icon: SiPenpot, iconColor: "text-penpot" },
];
const TechnologiesSection = () => {
  return (
    <div className="flex flex-col gap-16 pb-48">
      <HeadingWithIcon
        titleColor="text-gray-600 dark:text-white"
        hrColor="bg-gradient-to-r from-primary to-secondary dark:from-darkMode-primary dark:to-darkMode-secondary"
        Icon={simboloCode}
        iconColor="dark:fill-accent dark:stroke-accent"
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-x-6 gap-y-10">
          {TECHNOLOGIES.map((tech, index) => (
            <TechTag
              key={index}
              name={tech.name}
              iconColor={tech.iconColor}
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
