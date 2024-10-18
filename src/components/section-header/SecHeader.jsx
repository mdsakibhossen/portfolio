"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const parentVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
const charParentVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
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

const SecHeader = ({ title = "", tag = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.35 });
  return (
    <motion.div
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col justify-center gap-4 text-center"
    >
      <div className="overflow-hidden">
        <motion.p
          variants={childVariants}
          className="text-secondary-400 uppercase text-sm tracking-[4px] font-semibold"
        >
          {tag}
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <motion.h2
          variants={charParentVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-medium"
        >
          {title.split("").map((el, i) =>
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
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default SecHeader;
