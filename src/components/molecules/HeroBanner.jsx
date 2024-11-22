import { FaCircleArrowDown } from "react-icons/fa6";
import Buttons from "../atoms/Buttons";
import Arrow from "../../assets/svg/arrow.svg";
const HeroBanner = () => {
  return (
    <div className="flex gap-4">
      <img src={Arrow} />
      <div className="flex max-w-screen-md flex-col items-start gap-8">
        <h1 className="heading1">
          Lorem <span className="text-primary">Dolor Ipsum</span> sit amet,
          consecteur
        </h1>
        <p className="text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Buttons
          label="Lorem ipsum"
          icon={<FaCircleArrowDown className="size-size-lg text-light" />}
          className={"bg-primary hover:bg-primaryDark"}
          onclick={""}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
