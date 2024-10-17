"use client";
import { links } from "@/lib/links";
import NavLink from "./nav-link/NavLink";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

const navVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const linkVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
    },
  },
};

const Nav = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="gap-6 text-white font-medium hidden lg:flex overflow-hidden"
    >
      {links.map((link) => (
        <motion.div
          variants={linkVariants}
          key={link.id}
          className="overflow-hidden"
        >
          <NavLink href={link.href}>{link.text}</NavLink>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Nav;
