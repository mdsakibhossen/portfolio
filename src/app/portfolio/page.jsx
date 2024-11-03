import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio-page/portfolio/Portfolio";

export const metadata = {
  title: "My Portfolios | Md Sakib Hossen",
  description: "I am a Full Stack Web Developer",
};

const PortfolioPage = () => {
  return (
    <>
      <Hero
        heading={"Portfolio"}
        text={
          "Explore my collection of web projects showcasing diverse skills, from responsive design to seamless functionality and interactive features."
        }
      />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
