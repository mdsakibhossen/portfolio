import AboutSec from "@/components/about-page/about-sec/AboutSec";
import Hero from "@/components/hero/Hero";

export const metadata = {
  title: "About Me | Md Sakib Hossen",
  description: "I am a Full Stack Web Developer",
};

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
