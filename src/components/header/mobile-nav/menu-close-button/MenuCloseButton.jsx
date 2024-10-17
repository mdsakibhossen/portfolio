"use client";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
const MenuCloseButton = ({ setIsMenuOpened }) => {
  return (
    <motion.button
      onClick={() => setIsMenuOpened(false)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: 1.75,
          type: "spring",
          stiffness: 600,
          damping: 20,
        },
      }}
      className=" text-3xl lg:hidden  rounded-full text-white w-[40px] h-[40px] flex justify-center items-center"
      whileHover={{
        backgroundColor: "#ffffff",
        color: "#000000",
        rotate: "180deg",
      }}
      transition={{ duration: 0.25 }}
    >
      <MdClose />
    </motion.button>
  );
};

export default MenuCloseButton;
