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
          "Agency provides a full service range including technical skills, design, business understanding."
        }
      />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
