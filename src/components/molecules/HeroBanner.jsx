import { FaCircleArrowDown } from "react-icons/fa6";
import Buttons from "../atoms/Buttons";
import Arrow from "../../../public/assets/svg/arrow.svg";
const HeroBanner = () => {
  return (
    <div className="flex gap-size-sm">
      <img src={Arrow} />
      <div className="flex max-w-screen-md flex-col items-start gap-size-lg">
        <h1 className="heading1 dark:text-light">
          Lorem{" "}
          <span className="text-primary dark:text-darkMode-primary">
            Dolor Ipsum
          </span>{" "}
          sit amet, consecteur
        </h1>
        <p className="text1 dark:text-gray-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Buttons
          label="Lorem ipsum"
          icon={<FaCircleArrowDown className="size-size-lg text-light" />}
          className={
            "bg-primary hover:bg-primaryDark dark:bg-gradient-to-r dark:from-darkMode-secondary dark:to-darkMode-primary"
          }
          onclick={""}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
