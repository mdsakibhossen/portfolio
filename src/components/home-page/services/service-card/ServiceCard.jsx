"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const parentVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};
const ServiceCard = ({ service }) => {
  const { icon: ServiceIcon, title, description } = service;
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="bg-white py-8 px-5 rounded shadow cursor-pointer group transition-all duration-300 relative z-[1] after:content-[''] after:w-[200px] after:h-[200px] after:bg-secondary-400/70 after:absolute after:bottom-0 after:right-0 after:rounded-full after:translate-x-[50%] after:translate-y-[50%] after:z-[-1] hover:after:w-[300%] hover:after:h-[300%] after:transition-all after:duration-500 overflow-hidden">
          <motion.div variants={childVariants}>
            <div className="icon text-4xl w-16 h-16 bg-secondary-400/80 flex justify-center items-center rounded-full text-white border-2 border-secondary-400 mb-5 group-hover:bg-white group-hover:text-secondary-400 group-hover:border-white transition-all duration-300">
              <ServiceIcon />
            </div>
          </motion.div>
          <motion.div variants={childVariants}>
            <h3 className="text-2xl font-medium mb-2.5 transition-all duration-300 group-hover:text-white">
              {title}
            </h3>
          </motion.div>
          <motion.div variants={childVariants}>
            <p className="transition-all duration-300 group-hover:text-slate-200/90">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
