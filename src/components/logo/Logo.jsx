"use client";

import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

// const containerVariants = {
//   initial: {},
//   animate: {
//     transition: {
//       staggerChildren: 0.25,
//     },
//   },
// };

// const pathVariants = {
//   initial: {
//     opacity: 0,
//     pathLength: 0,
//   },
//   animate: {
//     opacity: [0, 1, 1],
//     pathLength: 1,
//     transition: {
//       delay: 0.5,
//       duration: 3,
//       ease: "easeInOut",
//     },
//   },
// };

// const textVariants = {
//   initial: {
//     scale: 0,
//   },
//   animate: {
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       delay: 0.25,
//     },
//   },
// };

const Logo = () => {
  const [scope, animate] = useAnimate();
  const pathRef = useRef(null);
  const textRef = useRef(null);
  const animateLogo = async () => {
    await animate(
      pathRef.current,
      { opacity: [0, 1, 1], pathLength: 1 },
      { delay: 0.25, duration: 1, ease: "easeInOut" }
    );
    animate(
      pathRef.current,
      {
        rotate: [0, 10, -10, 5, -5, 15, -15, 0], // Quick, random small angles for a shaking effect
        opacity: [1, 0.35, 1, 0.5, 1, 0.25, 1], // Slight opacity variation to enhance the effect
      },
      {
        duration: 1.5, // Fast duration to give a sharp shaking effect
        ease: "easeInOut", // Smooth transitions between keyframes
        repeat: Infinity, // Infinite loop
        repeatType: "loop", // Continuous looping
        delay: 0.2, // Small delay before repeating
      }
    );

    await animate(
      textRef.current,
      { scale: 1 },
      { type: "spring", stiffness: 300, damping: 15 }
    );
  };

  useEffect(() => {
    animateLogo();
  }, []);
  return (
    <Link href={"/"}>
      <span
        ref={scope}
        // variants={containerVariants}
        // initial="initial"
        // animate="animate"
        className="flex items-center gap-2"
      >
        <svg
          className="max-w-[40px] w-full inline-block"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <motion.path
              ref={pathRef}
              d="M12 16C10.6193 16 9.5 17.1193 9.5 18.5C9.5 19.8807 10.6193 21 12 21C13.3807 21 14.5 19.8807 14.5 18.5C14.5 17.1193 13.3807 16 12 16ZM12 16V12M5.5 8C6.88071 8 8 6.88071 8 5.5C8 4.11929 6.88071 3 5.5 3C4.11929 3 3 4.11929 3 5.5C3 6.88071 4.11929 8 5.5 8ZM5.5 8V8.8C5.5 9.92011 5.5 10.4802 5.71799 10.908C5.90973 11.2843 6.21569 11.5903 6.59202 11.782C7.01984 12 7.57989 12 8.7 12H15.3C16.4201 12 16.9802 12 17.408 11.782C17.7843 11.5903 18.0903 11.2843 18.282 10.908C18.5 10.4802 18.5 9.92011 18.5 8.8V8M18.5 8C19.8807 8 21 6.88071 21 5.5C21 4.11929 19.8807 3 18.5 3C17.1193 3 16 4.11929 16 5.5C16 6.88071 17.1193 8 18.5 8Z"
              stroke="#da2777"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0, pathLength: 0 }}
              // variants={pathVariants}
            />
          </g>
        </svg>

        <motion.span
          // variants={textVariants}
          ref={textRef}
          initial={{ scale: 0 }}
          className="text-white font-semibold uppercase text-2xl inline-block"
        >
          Md <span className="text-secondary-400">Sakib</span>
        </motion.span>
      </span>
    </Link>
  );
};

export default Logo;
