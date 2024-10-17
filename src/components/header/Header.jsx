"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "../logo/Logo";
import Nav from "./nav/Nav";
import { useState } from "react";
import MenuBarsButton from "./nav/menu-bars-button/MenuBarsButton";
import MobileNav from "./mobile-nav/MobileNav";

const headerVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: {delay: .5} },
  transition: {
    type: "tween",
    duration: 0.25,
    ease: "easeInOut",
  },
};

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

  });
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition="transition"
      className={`fixed top-0 left-0 w-full bg-primary-700 py-6 z-[999]`}
    >
      <div className="container mx-auto px-3 flex justify-between items-center">
        <Logo />
        <Nav />
        <MenuBarsButton isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
        <MobileNav isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      </div>
    </motion.header>
  );
};

export default Header;
