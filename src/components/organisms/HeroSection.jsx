import HeroBanner from "../molecules/HeroBanner";
import yoLaptop from "../../assets/design/yo-laptop.png";
const HeroSection = () => {
  return (
    <div className="mx-auto flex h-[96vh] max-w-container items-center justify-between">
      <HeroBanner />
      <img src={yoLaptop} className="h-[63%]" />
    </div>
  );
};

export default HeroSection;
