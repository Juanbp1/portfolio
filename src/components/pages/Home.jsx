import AboutSection from "../organisms/AboutSection";
import ContactSection from "../organisms/ContactSection";
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
      <ContactSection />
    </div>
  );
};

export default Home;
