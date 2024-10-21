"use client";
import { FaJs } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./icons.css";

// Animation Variants
const parentVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      staggerChildren: 0.2,
      when: "beforeChildren",
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
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

const Icons = () => {
  const icons = [
    { id: 1, icon: FaJs, iconColor: "red", title: "HTML" },
    { id: 2, icon: FaJs, iconColor: "red", title: "CSS" },
    { id: 3, icon: FaJs, iconColor: "red", title: "Bootstrap" },
    { id: 4, icon: FaJs, iconColor: "red", title: "Tailwind CSS" },
    { id: 5, icon: FaJs, iconColor: "red", title: "SASS" },
    { id: 6, icon: FaJs, iconColor: "red", title: "JavaScript" },
    { id: 7, icon: FaJs, iconColor: "red", title: "Python" },
    { id: 8, icon: FaJs, iconColor: "red", title: "Django" },
  ];

  const boxWidth = 180;
  const gap = 20;
  const [containerWidth, setContainerWidth] = useState(0);
  const ref = useRef(null);

  // Calculate container width based on the number of icons
  useEffect(() => {
    const width = icons.length * (boxWidth + gap);
    setContainerWidth(width);
  }, [icons.length, boxWidth, gap]);

  // Use InView to animate when the component is in view
  const isInView = useInView(ref, {});

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={parentVariants}
        className="overflow-hidden bg-primary-700 text-slate-400 hover:text-white"
      >
        <div
          className="scrolling-container flex"
          style={{ minWidth: containerWidth * 2, gap }}
        >
          {[...icons, ...icons].map((el, i) => (
            <div key={i} className="box" style={{ minWidth: boxWidth }}>
              <div className="flex items-center gap-2 text-lg hover:text-slate-400 py-5 lg:py-8">
                <motion.span
                  variants={iconVariants}
                  className="text-slate-100 text-2xl inline-block"
                  style={{ color: el.iconColor }}
                >
                  <el.icon />
                </motion.span>
                <motion.span variants={childVariants} className="inline-block">
                  {el.title}
                </motion.span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Icons;
