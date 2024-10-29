import Contact from "@/components/contact/Contact";
import About from "@/components/home-page/about/About";
import Features from "@/components/home-page/features/Features";
import Hero from "@/components/home-page/hero/Hero";
import Portfolio from "@/components/home-page/portfolio/Portfolio";
import Screenshots from "@/components/home-page/screenshots/Screenshots";
import Services from "@/components/home-page/services/Services";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Features />
      <Contact />
      <Screenshots />
    </>
  );
};

export default HomePage;
