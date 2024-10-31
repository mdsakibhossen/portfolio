"use client";
import { links } from "@/lib/links";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { socialLinks } from "@/lib/socialLinks";
import { useRef } from "react";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareTwitter,
} from "react-icons/fa6";
import { SiCodewars } from "react-icons/si";

const boxVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
const upVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const scaleVariants = {
  hidden: {
    scale: 0,
    originX: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    originX: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300 },
  },
};

const Footer = () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  // const iconContainerRef = useRef(null);

  const box1IsInView = useInView(box1Ref, { amount: 0.35, once: true });
  const box2IsInView = useInView(box2Ref, { amount: 0.35, once: true });
  const box3IsInView = useInView(box3Ref, { amount: 0.35, once: true });
  const box4IsInView = useInView(box4Ref, { amount: 0.35, once: true });
  // const isIconInView = useInView(iconContainerRef, { amount: 0.3, once: true });

  return (
    <footer className="bg-primary-800 text-white py-10 overflow-hidden">
      <div className="top container mx-auto px-3 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <motion.div
          ref={box1Ref}
          variants={boxVariants}
          initial="hidden"
          animate={box1IsInView ? "visible" : "hidden"}
          className="box-1 info"
        >
          <motion.div
            variants={upVariants}
            className="logo flex gap-2 items-center"
          >
            <svg
              className="max-w-[40px] w-full inline-block"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16C10.6193 16 9.5 17.1193 9.5 18.5C9.5 19.8807 10.6193 21 12 21C13.3807 21 14.5 19.8807 14.5 18.5C14.5 17.1193 13.3807 16 12 16ZM12 16V12M5.5 8C6.88071 8 8 6.88071 8 5.5C8 4.11929 6.88071 3 5.5 3C4.11929 3 3 4.11929 3 5.5C3 6.88071 4.11929 8 5.5 8ZM5.5 8V8.8C5.5 9.92011 5.5 10.4802 5.71799 10.908C5.90973 11.2843 6.21569 11.5903 6.59202 11.782C7.01984 12 7.57989 12 8.7 12H15.3C16.4201 12 16.9802 12 17.408 11.782C17.7843 11.5903 18.0903 11.2843 18.282 10.908C18.5 10.4802 18.5 9.92011 18.5 8.8V8M18.5 8C19.8807 8 21 6.88071 21 5.5C21 4.11929 19.8807 3 18.5 3C17.1193 3 16 4.11929 16 5.5C16 6.88071 17.1193 8 18.5 8Z"
                stroke="#da2777"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-white font-semibold uppercase text-2xl inline-block">
              Md <span className="text-secondary-400">Sakib</span>
            </span>
          </motion.div>
          <motion.p variants={upVariants} className="mt-5 text-slate-300">
            Passionate Full Stack Web Developer dedicated to creating responsive
            and user-friendly web applications. I transform ideas into
            functional digital solutions. Always eager to learn and grow, I aim
            to deliver high-quality, efficient code while enhancing user
            experiences. Connect to bring your web projects to life!
          </motion.p>
          <div
            // ref={iconContainerRef}
            className="icons pt-5 flex lg:justify-start gap-6 text-2xl sm:text-3xl"
          >
            <motion.div
              variants={scaleVariants}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={"https://www.linkedin.com/in/mdsakibhossen"}
                className="transition-all duration-300 hover:scale-125"
              >
                <FaLinkedin />
              </Link>
            </motion.div>
            <motion.div
              variants={scaleVariants}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={"https://github.com/mdsakibhossen"}
                className="transition-all duration-300 hover:scale-125"
              >
                <FaSquareGithub />
              </Link>
            </motion.div>
            <motion.div
              variants={scaleVariants}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={"https://x.com/mdsakibhossen01"}
                className="transition-all duration-300 hover:scale-125"
              >
                <FaSquareTwitter />
              </Link>
            </motion.div>
            <motion.div
              variants={scaleVariants}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={"https://www.facebook.com/mdsakibhossen01"}
                className="transition-all duration-300 hover:scale-125"
              >
                <FaSquareFacebook />
              </Link>
            </motion.div>

            <motion.div
              variants={scaleVariants}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={"https://www.codewars.com/users/mdsakibhossen"}
                className="transition-all duration-300 hover:scale-125"
              >
                <SiCodewars />
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          ref={box2Ref}
          variants={boxVariants}
          initial="hidden"
          animate={box2IsInView ? "visible" : "hidden"}
          className="box-2 quick-links"
        >
          <motion.h3 variants={upVariants} className="font-medium text-xl mb-5">
            Quick Links
          </motion.h3>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <motion.li
                key={link.id}
                className="max-w-max cursor-pointer"
                variants={scaleVariants}
                whileHover={{ scale: 1.25, originX: 0, color: "#da2777" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={link.href}>{link.text}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          ref={box3Ref}
          variants={boxVariants}
          initial="hidden"
          animate={box3IsInView ? "visible" : "hidden"}
          className="box-3 social-links"
        >
          <motion.h3 variants={upVariants} className="font-medium text-xl mb-5">
            Social Links
          </motion.h3>
          <ul className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <motion.li
                key={link.id}
                className="max-w-max cursor-pointer"
                variants={scaleVariants}
                whileHover={{ scale: 1.25, originX: 0, color: "#da2777" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={link.href}>{link.text}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          ref={box4Ref}
          variants={boxVariants}
          initial="hidden"
          animate={box4IsInView ? "visible" : "hidden"}
          className="box-4 address"
        >
          <motion.h3 variants={upVariants} className="font-medium text-xl mb-5">
            Address
          </motion.h3>
          <address className="flex flex-col gap-2">
            <motion.p variants={upVariants}>Ashulia, Savar, Dhaka</motion.p>
            <motion.p variants={upVariants}>
              <span className="font-medium">Email:</span>{" "}
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.25, originX: 0, color: "#da2777" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={"mailto:sakib.hossen0143@gmail.com"}>
                  sakib.hossen0143@gmail.com
                </Link>
              </motion.span>
            </motion.p>
            <motion.p variants={upVariants}>
              <span className="font-medium">Phone:</span>{" "}
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.25, originX: 0, color: "#da2777" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={"tel:+8801903549906"}>+8801903549906</Link>
              </motion.span>
            </motion.p>
          </address>
        </motion.div>
      </div>
      <div className="bottom container mx-auto px-3 text-center text-slate-400 pt-10 border-t border-t-slate-600">
        <motion.p
          variants={upVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Copyright &copy; 2024{" "}
          <span className="text-slate-200 font-medium">
            Md <span className="text-secondary-400">Sakib</span>
          </span>
          . All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
