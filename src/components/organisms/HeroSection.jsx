import HeroBanner from "../molecules/HeroBanner";
import yoLaptop from "../../../public/assets/design/yo-laptop.png";
import yoLaptopDark from "../../../public/assets/design/yo-laptop-dark.png";
const HeroSection = () => {
  return (
    <div className="mx-auto flex h-[96vh] max-w-container items-center justify-between ">
      <HeroBanner />
      <img src={yoLaptop} className="w-[37%] dark:hidden" />
      <img src={yoLaptopDark} className="w-[37%] dark:block hidden" />
    </div>
  );
};

export default HeroSection;
