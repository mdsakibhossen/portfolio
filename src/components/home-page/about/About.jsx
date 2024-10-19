// "use client";

// import SecContainer from "@/components/sec-container/SecContainer";
// import MyPic from "../../../../public/images/my-pic.png";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";

// import "./about.css";

// // import required modules
// import { EffectCards } from "swiper/modules";
// import Image from "next/image";

// // Importing motion from Framer Motion for stagger animation
// import { motion, useInView } from "framer-motion";
// import Link from "next/link";
// import { useRef } from "react";

// const About = () => {
//   const images = [MyPic, MyPic, MyPic];

//   // Animation Variants
//   const parentVariants = {
//     hidden: { y: 150, opacity: 0 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         staggerChildren: 0.1,
//         when: "beforeChildren",
//         type: "spring",
//         stiffness: 300,
//         damping: 20,
//       },
//     },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: "100%" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 20,
//       },
//     },
//   };
//   const ref = useRef(null);
//   const isInView = useInView(ref);

//   return (
//     <SecContainer className={"py-20 bg-secondary-50 overflow-hidden"}>
//       <motion.div
//         ref={ref}
//         className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20"
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         variants={parentVariants}
//       >
//         {/* Image Slider Section */}
//         <motion.div className="images" variants={childVariants}>
//           <div className="max-w-[600px] w-[330px] sm:w-full h-[400px] sm:h-[450px] p-10">
//             <Swiper
//               effect={"cards"}
//               grabCursor={true}
//               modules={[EffectCards]}
//               className="mySwiper"
//             >
//               {images.map((image, i) => (
//                 <div key={i} className="max-w-[600] mx-auto w-[70%]">
//                   <SwiperSlide>
//                     <Image
//                       src={image}
//                       alt="My Pic"
//                       width={800}
//                       height={600}
//                       className="w-full h-full object-cover"
//                     />
//                   </SwiperSlide>
//                 </div>
//               ))}
//             </Swiper>
//           </div>
//         </motion.div>

//         {/* Content Section */}
//         <div className="about-contents space-y-3">
//           <motion.p
//             variants={childVariants}
//             className="text-secondary-400 uppercase text-sm tracking-[4px] font-semibold"
//           >
//             Md Sakib Hossen
//           </motion.p>
//           <motion.h2
//             variants={childVariants}
//             className="text-3xl md:text-4xl font-medium"
//           >
//             Professional Web Designer
//           </motion.h2>
//           <motion.p variants={childVariants}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero
//             sint dignissimos minus animi sunt architecto possimus dolorem ipsam
//             aspernatur in libero culpa, dolores officiis repellendus atque
//             beatae perspiciatis vel.
//           </motion.p>
//           {/* My Tech Stack Here */}
//           <motion.div
//             variants={childVariants}
//             whileHover={{
//               scale: 1.15,
//               originX: 0,
//               transformOrigin: "center",
//               transition: { type: "spring", stiffness: 300 },
//             }}
//           >
//             <Link
//               href={""}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block px-5 py-2 text-sm font-semibold bg-secondary-400 text-white rounded-full shadow-lg hover:bg-secondary-500 transition-all duration-300 transform hover:scale-105 mt-5"
//             >
//               About Me
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </SecContainer>
//   );
// };

// export default About;
"use client";

import SecContainer from "@/components/sec-container/SecContainer";
import MyPic from "../../../../public/images/my-pic.png";
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

const About = () => {
  const images = [MyPic, MyPic, MyPic];
  const techStacks = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "SASS",
    "JavaScript",
    "Swiper JS",
    "GSAP",
    "Framer Motion",
    "React JS",
    "Redux (RTK, RTK Query)",
    "Next JS",
    "MongoDB (Mongoose)",
    "Python (Basic)",
    "Django (Basic)",
    "MySQL",
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
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <SecContainer className={"py-20 bg-secondary-50 overflow-hidden"}>
      <SecHeader title="Who I Am?" tag="About Me" />
      <motion.div
        ref={ref}
        className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 lg:mt-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={parentVariants}
      >
        {/* Image Slider Section */}
        <motion.div className="images" variants={childVariants}>
          <div className="max-w-[600px] w-[330px] sm:w-full h-[400px] sm:h-[450px] p-10">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {images.map((image, i) => (
                <div key={i} className="max-w-[600] mx-auto w-[70%]">
                  <SwiperSlide>
                    <Image
                      src={image}
                      alt="My Pic"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="about-contents space-y-3">
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
            Professional Web Designer
          </motion.h2>
          <motion.p variants={childVariants}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero
            sint dignissimos minus animi sunt architecto possimus dolorem ipsam
            aspernatur in libero culpa, dolores officiis repellendus atque
            beatae perspiciatis vel.
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
          >
            <Link
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 text-sm font-semibold bg-secondary-400 text-white rounded-full shadow-lg hover:bg-secondary-500 transition-all duration-300 transform hover:scale-105 mt-5"
            >
              About Me
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </SecContainer>
  );
};

export default About;