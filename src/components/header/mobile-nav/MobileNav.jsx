"use client";
import Logo from "@/components/logo/Logo";
import { links } from "@/lib/links";
import MenuCloseButton from "./menu-close-button/MenuCloseButton";
import { motion } from "framer-motion";
import NavLink from "../nav/nav-link/NavLink";

const navVariants = {
  hidden: {
    x: "100vw",
    opacity: 0.35,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const linkVariants = {
  hidden: {
    scale: 0,
    // originX: 0,
  },
  visible: {
    scale: 1,
    // originX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      // when: "beforeChildren",
      // staggerChildren: 0.3,
    },
  },
};
const MobileNav = ({ isMenuOpened, setIsMenuOpened }) => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      //   animate={ "visible"}
      animate={isMenuOpened ? "visible" : "hidden"}
      transition={"transition"}
      className="fixed top-0 right-0 bottom-0 left-0 w-full min-h-screen bg-primary-800"
    >
      <div className="wrapper bg-primary-700 py-6">
        <div className="container mx-auto px-3 flex justify-between">
          <Logo />
          <MenuCloseButton
            isMenuOpened={isMenuOpened}
            setIsMenuOpened={setIsMenuOpened}
          />
        </div>
      </div>
      <div className="links text-white flex justify-center items-center flex-col gap-10 text-4xl sm:text-5xl h-full mt-[-100px]">
        {links.map((link) => (
          <motion.div
            onClick={() => setIsMenuOpened(false)}
            variants={linkVariants}
            key={link.id}
            className="overflow-hidden"
          >
            <NavLink href={link.href}>{link.text}</NavLink>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default MobileNav;
