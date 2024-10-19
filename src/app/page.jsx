import About from "@/components/home-page/about/About";
import Hero from "@/components/home-page/hero/Hero";
import Portfolio from "@/components/home-page/portfolio/Portfolio";
import Services from "@/components/home-page/services/Services";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
    </>
  );
};

export default HomePage;
