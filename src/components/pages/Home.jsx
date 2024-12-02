import AboutSection from "../organisms/AboutSection";
import HeroSection from "../organisms/HeroSection";

const Home = () => {
  return (
    <div data-testid="home" >
      <HeroSection />
      <AboutSection/>
    </div>
  );
};

export default Home;
