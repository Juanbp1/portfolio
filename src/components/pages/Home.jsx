import AboutSection from "../organisms/AboutSection";
import HeroSection from "../organisms/HeroSection";
import ProjectsSection from "../organisms/ProjectsSection";
import TechnologiesSection from "../organisms/TechnologiesSection";

const Home = () => {
  return (
    <div data-testid="home" className="mx-auto">
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
