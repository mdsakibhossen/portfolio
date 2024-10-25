"use client";
import { motion, useInView } from "framer-motion";
import SecContainer from "../sec-container/SecContainer";
import { useRef } from "react";
const charParentVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 20,
    },
  },
};
const Hero = ({ heading, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.35 });
  return (
    <SecContainer className={"bg-primary-400 py-20 lg:py-40 text-center"}>
      <motion.div
        ref={ref}
        variants={charParentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-5 pt-20 overflow-hidden">
          {heading.split("").map((el, i) =>
            el != " " ? (
              <motion.span
                variants={childVariants}
                key={i}
                className="inline-block"
              >
                {el}
              </motion.span>
            ) : (
              " "
            )
          )}
        </h1>

        <div className="overflow-hidden">
          <motion.p
            variants={childVariants}
            className="text-slate-400 overflow-hidden"
          >
            {text}
          </motion.p>
        </div>
      </motion.div>
    </SecContainer>
  );
};

export default Hero;
