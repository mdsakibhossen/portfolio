"use client";

import { motion } from "framer-motion";
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
const CounterBox = ({ counterInfo }) => {
  const { icon: Icon, number, postFix, text } = counterInfo;
  return (
    <div className="counter-card flex gap-4 items-center p-4">
      <motion.div variants={childVariants}>
        <div className="icon text-4xl w-16 h-16 bg-secondary-400/80 flex justify-center items-center rounded-full text-white border-2 border-secondary-400">
          <Icon />
        </div>
      </motion.div>
      <div className="counter-contents">
        <motion.h3 variants={childVariants} className="text-xl font-medium">
          {number}
          {postFix}
        </motion.h3>
        <motion.p variants={childVariants}>{text}</motion.p>
      </div>
    </div>
  );
};

export default CounterBox;
