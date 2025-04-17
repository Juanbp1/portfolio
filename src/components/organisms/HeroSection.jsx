import HeroBanner from "../molecules/HeroBanner";
import yoLaptop from "../../../public/assets/design/yo-laptop.png";
import yoLaptopDark from "../../../public/assets/design/yo-laptop-dark.png";
const HeroSection = () => {
  return (
    <div
      className="mx-auto flex h-[96vh] max-w-container items-center justify-between"
      id="heroSection"
      data-testid="heroSection"
    >
      <HeroBanner />
      <img src={yoLaptop} className="w-[35%] dark:hidden" />
      <img src={yoLaptopDark} className="hidden w-[35%] dark:block" />
    </div>
  );
};

export default HeroSection;
