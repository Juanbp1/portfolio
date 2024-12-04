import AboutSection from "../organisms/AboutSection";
import HeroSection from "../organisms/HeroSection";
import TechnologiesSection from "../organisms/TechnologiesSection";

const Home = () => {
  return (
    <div data-testid="home" >
      <HeroSection />
      <AboutSection/>
      <TechnologiesSection/>
    </div>
  );
};

export default Home;
