"use client";

import SecContainer from "@/components/sec-container/SecContainer";
import Image from "next/image";
import MyPic from "../../../../public/images/about-0.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const imgVariants = {
  hidden: { y: 150, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};
const parentVariants = {
  hidden: { y: 150, opacity: 0 },
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

const AboutSec = () => {
  const imgRef = useRef(null);
  const isImgInView = useInView(imgRef, { once: true });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });
  return (
    <SecContainer className={"py-20 bg-secondary-50 overflow-hidden"}>
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          ref={imgRef}
          initial="hidden"
          animate={isImgInView ? "visible" : "hidden"}
          variants={imgVariants}
          className="img-box max-w-[1000px] mx-auto h-[500px] bg-secondary-100 rounded"
        >
          <Image
            src={MyPic}
            alt="My pic"
            width={1200}
            height={600}
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
        {/* Content Section */}

        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={isContentInView ? "visible" : "hidden"}
          variants={parentVariants}
          className="about-contents space-y-3 mt-16"
        >
          <motion.p
            variants={childVariants}
            className="text-secondary-400 uppercase text-sm tracking-[4px] font-semibold"
          >
            Md Sakib Hossen
          </motion.p>
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-medium"
          >
            Professional Web Developer
          </motion.h2>
          <motion.p variants={childVariants}>
            I am a Full Stack Web Developer with a passion for creating dynamic
            and engaging digital experiences. Specializing in both frontend and
            backend development, I work with technologies like Next.js, React,
            MongoDB, and animation libraries such as GSAP and Framer Motion.
            With a focus on clean code and responsive design, I strive to
            deliver solutions that are both visually appealing and highly
            functional, whether for e-commerce platforms, blogs, or business
            websites.
          </motion.p>
          <motion.p variants={childVariants}>
            Through years of self-driven learning and hands-on projects, I have
            developed a deep understanding of the complete web development
            process. My approach combines creativity with technical skill,
            always aiming to provide user-centric experiences that support
            business growth and client satisfaction. I'm dedicated to helping
            clients bring their ideas to life with high-quality, customized web
            solutions.
          </motion.p>

          {/* Link to Resume Section */}
          <motion.div
            variants={childVariants}
            whileHover={{
              scale: 1.15,
              originX: 0,
              transformOrigin: "center",
              transition: { type: "spring", stiffness: 300 },
            }}
            className="inline-block"
          >
            <Link
              href={"/files/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 text-sm font-semibold bg-secondary-400 text-white rounded-full shadow-lg hover:bg-secondary-500 transition-all duration-300 transform hover:scale-105 mt-5"
            >
              Resume
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </SecContainer>
  );
};

export default AboutSec;
