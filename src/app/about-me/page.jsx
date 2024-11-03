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
          "I'm a full-stack developer dedicated to crafting unique and efficient digital solutions with a focus on clean code and user-centric design."
        }
      />
      <AboutSec />
    </>
  );
};

export default AboutMePage;
