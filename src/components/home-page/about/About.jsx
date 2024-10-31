"use client";

import SecContainer from "@/components/sec-container/SecContainer";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./about.css";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";

// Importing motion from Framer Motion for stagger animation
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import SecHeader from "@/components/section-header/SecHeader";
import CounterBox from "./counter-box/CounterBox";
import { countersInfo, images, techStacks } from "@/lib/about";

const About = () => {
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
  const isImgInView = useInView(imgRef, { amount: 0.2, once: true });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { amount: 0.3, once: true });
  const bottomRef = useRef(null);
  const isBottomSecInView = useInView(bottomRef, { amount: 0.2, once: true });

  return (
    <SecContainer className={"py-20 bg-secondary-50 overflow-hidden"}>
      <SecHeader title="Who I Am?" tag="About Me" />
      <motion.div className="flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-20 lg:mt-10">
        {/* Image Slider Section */}
        <motion.div
          className="images"
          ref={imgRef}
          initial="hidden"
          animate={isImgInView ? "visible" : "hidden"}
          variants={parentVariants}
        >
          <div className="max-w-[600px] w-[70%] mx-auto sm:w-full h-[450px] sm:h-[550px]  p-10">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              // autoplay={{
              //   delay: 5000,
              //   disableOnInteraction: false,
              // }}
              className="mySwiper"
            >
              {images.map((image, i) => (
                <div key={i} className="max-w-[600] mx-auto">
                  <SwiperSlide key={i}>
                    <Image
                      src={image}
                      alt="My Pic"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover select-none"
                    />
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={isContentInView ? "visible" : "hidden"}
          variants={parentVariants}
          className="about-contents space-y-3"
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
          <motion.p variants={childVariants} className=" leading-7 tracking-wide">
            I&apos;m a dedicated Full Stack Web Developer with a passion for
            creating efficient, responsive, and user-friendly digital solutions.
            With expertise in both frontend and backend development, I
            specialize in modern technologies like Next.js, React, and MongoDB
            to build dynamic, scalable web applications. Over the years,
            I&apos;ve developed a diverse skill set in component-based design,
            responsive layouts, API integration, and animations that bring
            websites to life. I am committed to delivering high-quality code and
            exceptional user experiences, transforming complex requirements into
            seamless, robust solutions.
          </motion.p>

          {/* Tech Stack Section */}
          <div className="mt-5">
            <motion.h3
              variants={childVariants}
              className="text-secondary-500 font-semibold text-lg"
            >
              Tech Stack
            </motion.h3>
            <div className="flex flex-wrap gap-3 mt-2">
              {techStacks.map((tech, index) => (
                <motion.span
                  variants={childVariants}
                  key={index}
                  className="inline-block px-3 py-1.5 text-xs font-medium bg-secondary-100 text-secondary-500 rounded shadow"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Link to About Me Section */}
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
              href={"/about-me"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 text-sm font-semibold bg-secondary-400 text-white rounded-full shadow-lg hover:bg-secondary-500 transition-all duration-300 transform hover:scale-105 mt-5"
            >
              About Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={bottomRef}
        className="grid grid-cols-1 lg:grid-cols-3 mt-10 border-2 border-secondary-100 max-w-[600px] lg:max-w-[1000px] mx-auto"
        initial="hidden"
        animate={isBottomSecInView ? "visible" : "hidden"}
        variants={parentVariants}
      >
        {countersInfo.map((info, i) => (
          <div
            key={info.id}
            className={`${
              i !== 0 ? "border-t-2 lg:border-t-0 lg:border-l-2 " : ""
            } border-secondary-100`}
          >
            <CounterBox counterInfo={info} />
          </div>
        ))}
      </motion.div>
    </SecContainer>
  );
};

export default About;
