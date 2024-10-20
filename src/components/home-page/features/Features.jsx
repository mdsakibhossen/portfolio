"use client";

import SecContainer from "@/components/sec-container/SecContainer";
import FeaturePic from "../../../../public/images/1.png";
import { GiCheckMark } from "react-icons/gi";
import { LuGift } from "react-icons/lu";

import Image from "next/image";

// Importing motion from Framer Motion for stagger animation
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import SecHeader from "@/components/section-header/SecHeader";
import SVGImg from "./svg-img/SVGImg";

const Features = () => {
  const features = [
    "Range including technical skills",
    "Range including technical skills",
    "Range including technical skills",
    "Range including technical skills",
    "Range including technical skills",
    "Range including technical skills",
    "Range including technical skills",
  ];
  // Animation Variants
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
  const imgVariants = {
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
  const imgRef = useRef(null);
  const isImageInView = useInView(imgRef, { amount: 0.3, once: true });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { amount: 0.3, once: true });
  const bottomContentRef = useRef(null);
  const isBottomContentInView = useInView(bottomContentRef, {
    amount: 0.3,
    // once: true,
  });

  return (
    <>
      <SecContainer
        className={"py-20 bg-primary-400 text-white relative"}
      >
        <motion.div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 lg:gap-20 lg:mt-10 overflow-hidden">
          {/* Image Slider Section */}
          <motion.div
            ref={imgRef}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            variants={parentVariants}
            className="lg:flex-[3] images grid grid-cols-4 grid-rows-2 gap-4 max-h-[500px]"
          >
            <motion.div
              variants={imgVariants}
              className="col-span-4 xl:row-span-2 xl:col-span-2"
            >
              <Image
                src={FeaturePic}
                alt="My Pic"
                width={800}
                height={600}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            <motion.div variants={imgVariants} className="col-span-2">
              <Image
                src={FeaturePic}
                alt="My Pic"
                width={800}
                height={600}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            <motion.div variants={imgVariants} className="col-span-2">
              <Image
                src={FeaturePic}
                alt="My Pic"
                width={800}
                height={600}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            variants={parentVariants}
            className="features-contents lg:flex-[2] space-y-5"
          >
            <motion.p
              variants={childVariants}
              className="text-secondary-400 uppercase text-sm tracking-[4px] font-semibold"
            >
              Features
            </motion.p>
            <motion.h2
              variants={childVariants}
              className="text-3xl md:text-4xl font-medium"
            >
              Give Your Site A New Look
            </motion.h2>
            <motion.p variants={childVariants} className="text-slate-300">
              Service range including technical skills, design, business
              understanding. Service range including technical skills, design,
              business understanding.Service range including technical skills,
              design, business understanding.
            </motion.p>
            <ul className="text-slate-400 flex flex-col gap-3">
              {features.map((feature, i) => (
                <motion.li
                  variants={childVariants}
                  key={i}
                  className="flex items-center gap-2"
                >
                  <span className="flex justify-center items-center w-6 h-6 rounded-full bg-secondary-400 text-white">
                    <GiCheckMark />
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, scale: 1, translateY: "50%" }}
          transition={{ type: "spring", stiffness: 300 }}
          viewport={{ amount: 0.3 }}
          className="icon w-32 h-32 bg-secondary-400/80  text-white absolute bottom-0 left-8 flex justify-center items-center text-3xl z-10"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        >
          <LuGift />
        </motion.div>
      </SecContainer>
      <SecContainer
        className={"bg-primary-600 text-white py-20  overflow-hidden"}
      >
        <motion.div
          ref={bottomContentRef}
          className="flex flex-col lg:flex-row justify-between gap-10 items-center"
          initial="hidden"
          animate={isBottomContentInView ? "visible" : "hidden"}
          variants={parentVariants}
        >
          {" "}
          <div className="space-y-4 max-w-[800px]">
            {/* Link to Features Me Section */}
            <motion.p
              variants={childVariants}
              className="text-secondary-400 uppercase text-sm tracking-[4px] font-semibold"
            >
              Get Started
            </motion.p>
            <motion.h2
              variants={childVariants}
              className="text-3xl md:text-4xl font-medium"
            >
              I Help Companies Move Faster
            </motion.h2>
            <motion.p variants={childVariants} className="text-slate-400">
              Service range including technical skills, design, business
              understanding. Service range including technical skills, design,
              business understanding.Service range including technical skills,
              design, business understanding.
            </motion.p>
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
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-sm font-semibold bg-secondary-400 text-white rounded-full shadow-lg hover:bg-secondary-500 transition-all duration-300 transform hover:scale-105 mt-5"
              >
                Portfolios
              </Link>
            </motion.div>
          </div>
          <motion.div className="max-w-[350px] w-full" variants={childVariants}>
            <SVGImg />
          </motion.div>
        </motion.div>
      </SecContainer>
    </>
  );
};

export default Features;
