import HeadingWithIcon from "./HeadingWithIcon";
import GloboDialogo from "../../../public/assets/svg/globo-dialogo.svg?react";
import Buttons from "../atoms/Buttons";
import { FiDownload } from "react-icons/fi";
import yoPortrait from "../../../public/assets/design/yo-portrait.png";
import firm from "../../../public/assets/design/firm.png";
import SocialNetworks from "./SocialNetworks";

const Card = () => {
  const DownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/assets/content/pdf/pdf-ejemplo.pdf";
    link.download = "ejemplo.pdf";
    link.click();
  };
  return (
    <div className="mx-auto flex max-w-cardAbout justify-evenly rounded-radius-xl bg-primary dark:bg-primaryDark">
      <div className="flex flex-col items-center justify-center gap-size-xl">
        <img alt="" src={yoPortrait} className="relative object-cover" />
        <SocialNetworks bgColor="bg-gray-600" gap="gap-size-lg" />
      </div>
      <div className="flex max-w-[50%] flex-col items-start justify-center py-size-3xl">
        <HeadingWithIcon
          titleColor="text-white"
          hrColor="bg-accent-light dark:bg-accent"
          Icon={GloboDialogo}
          iconColor="dark:fill-white dark:stroke-white"
        />
        <div className="text2 mb-size-2xl mt-size-2xl space-y-size-md text-primary-light dark:text-darkMode-primary-light">
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
        <div className="w-[93%] flex items-center justify-between">
          <Buttons
            className="bg-white text-gray-600 hover:bg-gray-100"
            label="Descargar CV"
            icon={<FiDownload className="size-size-md text-gray-600" />}
            onclick={DownloadPDF}
          />
          <img alt="" src={firm} />
        </div>
      </div>
    </div>
  );
};

export default Card;
