"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import "./portfolio-card.css";

// import required modules
import { Navigation } from "swiper/modules";

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
  hidden: { opacity: 0, y: 150 },
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
const PortfolioCard = ({ portfolio }) => {
  const { images, title, description, skills } = portfolio;
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      // className="overflow-hidden"
    >
      <div className="portfolio-card w-full h-auto group rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl duration-500 bg-white">
        {/* Image container */}

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <div className="img-box w-full h-[300px] relative overflow-hidden">
                <Link href={""}>
                  <Image
                    src={image}
                    alt={title}
                    width={1000}
                    height={600}
                    className="absolute top-0 left-0 h-auto min-h-full w-full object-top transition-transform duration-1000 ease-in-out group-hover:translate-y-[calc(-100%_+_300px)]"
                    priority
                  />
                </Link>{" "}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content */}
        <div className="content p-4">
          {/* Title */}
          <motion.h3
            variants={childVariants}
            className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-secondary-400 transition-colors duration-300"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={childVariants}
            className="text-sm text-gray-600 leading-relaxed mb-4"
          >
            {description}
          </motion.p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={childVariants}
                className="text-xs font-medium bg-secondary-100 text-secondary-400 px-3 py-1 rounded-full inline-block"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            {/* Live Demo Button */}
            <motion.div
              variants={childVariants}
              whileHover={{
                scale: 1.15,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Link
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-sm font-semibold bg-primary-400 text-white rounded-full shadow-lg hover:bg-primary-500 transition-all duration-300 transform hover:scale-105"
              >
                Live Demo
              </Link>
            </motion.div>

            {/* Source Code Button */}
            <motion.div
              variants={childVariants}
              whileHover={{
                scale: 1.15,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Link
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-sm font-semibold bg-secondary-400 text-white rounded-full shadow-lg hover:bg-secondary-500 transition-all duration-300 transform hover:scale-105"
              >
                Source Code
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
