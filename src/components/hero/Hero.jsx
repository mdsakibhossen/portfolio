import SecContainer from "../sec-container/SecContainer";

const Hero = ({ heading, text }) => {
  return (
    <SecContainer className={"bg-primary-400 py-20 lg:py-40 text-center"}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-5 pt-20">
        {heading}
      </h1>
      <p className="text-slate-400">{text}</p>
    </SecContainer>
  );
};

export default Hero;
