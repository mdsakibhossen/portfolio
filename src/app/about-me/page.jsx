import AboutSec from "@/components/about-page/about-sec/AboutSec";
import Hero from "@/components/hero/Hero";

const AboutMePage = () => {
  return (
    <>
      <Hero
        heading={"About Me"}
        text={
          "Agency provides a full service range including technical skills, design, business understanding."
        }
      />
      <AboutSec />
    </>
  );
};

export default AboutMePage;
