import HeadingWithIcon from "./HeadingWithIcon";
import GloboDialogo from "../../../public/assets/svg/globo-dialogo.svg?react";
import Buttons from "../atoms/Buttons";
import { FiDownload } from "react-icons/fi";
import yo from "../../../public/assets/design/yo-about.png";
const Card = () => {
  return (
    <div className="mx-auto flex max-w-cardAbout justify-evenly rounded-radius-xl bg-primary dark:bg-primaryDark">
      <div className="ml-size-3xl flex max-w-[35%] items-end overflow-hidden">
        <img
          alt=""
          src={yo}
          className="relative -bottom-10 w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-center p-size-3xl">
        <HeadingWithIcon
          titleColor="text-white"
          hrColor="border-accent-light dark:border-accent"
          Icon={GloboDialogo}
          iconColor="dark:fill-white dark:stroke-white"
        />
        <div className="text2 mb-size-2xl mt-size-2xl space-y-6 text-primary-light dark:text-darkMode-primary-light">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Buttons
          className="bg-white text-gray-600 hover:bg-gray-100"
          label="lorem ipsum"
          icon={<FiDownload className="size-size-md text-gray-600" />}
        />
      </div>
    </div>
  );
};

export default Card;
