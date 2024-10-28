"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const NotFound = () => {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for button hover
  const buttonVariants = {
    hover: {
      scale: 1.5,
      transition: { type: "spring", stiffness: 800, damping: 25  },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* Animated Icon */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-24 h-24 mb-8 text-secondary-400"
        initial={{ rotate: -15, scale: 0 }}
        animate={{ rotate: 15, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
        }}
      >
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16z" />
        <path d="M12 8a1 1 0 100 2 1 1 0 000-2zM8.464 8.464a1 1 0 011.415 0l2.121 2.121-2.121 2.121a1 1 0 11-1.415-1.415L10.586 12l-2.122-2.121a1 1 0 010-1.415zm7.071 7.071a1 1 0 010-1.415l2.121-2.121-2.121-2.121a1 1 0 111.415-1.415L17.414 12l2.121 2.121a1 1 0 01-1.415 1.415L15.535 12l2.121 2.121a1 1 0 01-1.415 1.415l-2.121-2.121-2.121 2.121a1 1 0 01-1.415-1.415L12 15.535l-2.121 2.121-2.121-2.121a1 1 0 11-1.415-1.415L10.586 12 8.464 9.879a1 1 0 011.415-1.415L12 10.586l2.121-2.121a1 1 0 011.415 1.415L13.414 12l2.121 2.121a1 1 0 01-1.415 1.415L12 13.414l-2.121 2.121a1 1 0 01-1.415 1.415l2.121-2.121-2.121 2.121a1 1 0 01-1.415-1.415z" />
      </motion.svg>

      {/* Text Animation */}
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        404
      </motion.h1>
      <motion.p
        className="text-lg mb-8"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ delay: 0.2 }}
      >
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </motion.p>

      {/* Button Animation */}
      <Link href="/">
        <motion.button
          className="bg-primary-500 px-6 py-3 rounded-lg font-semibold text-white"
          variants={buttonVariants}
          whileHover="hover"
        >
          Go Back Home
        </motion.button>
      </Link>
    </div>
  );
};

export default NotFound;
