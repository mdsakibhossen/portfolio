"use client";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import MyPic from "../../../../public/images/my-pic.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareTwitter,
} from "react-icons/fa6";
import { useEffect, useRef } from "react";

const Hero = () => {
  const [scope, animate] = useAnimate();
  const imgRef = useRef(null);
  const textContainerRef = useRef(null);
  const iconContainerRef = useRef(null);

  const isTextInView = useInView(textContainerRef, { amount: 0.3, once: true });
  const isIconInView = useInView(iconContainerRef, { amount: 0.3, once: true });
  
  const animateHero = async () => {
    await animate(
      imgRef.current,
      { scale: 1, opacity: 1 },
      { delay: 1.5, type: "spring", stiffness: 400, damping: 30 }
    );

   if (isTextInView) {
     await animate(
       Array.from(textContainerRef.current.children),
       { y: 0, opacity: 1 },
       {
         delay: stagger(0.2,{startDelay: 0}),
         type: "spring",
         stiffness: 300,
         damping: 20,
         ease: "easeIn",
       }
     );
   }
   
    
     if (isIconInView) {
      await animate(
        Array.from(iconContainerRef.current.children),
        { scale: [0, 1], opacity: 1 },
        {
          delay: stagger(0.15,{startDelay: 0}),
          type: "spring",
          stiffness: 700,
          damping: 15,
        }
      );
     }
  };
  useEffect(() => {
    animateHero();
  }, [isIconInView,isTextInView]);
  return (
    <section
      ref={scope}
      id="hero"
      className="relative bg-primary-600 text-white min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="container mx-auto px-3 py-10 text-center lg:text-left flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-10 gap-16">
        {/* Text Section */}
        <div
          ref={textContainerRef}
          className="space-y-4 sm:space-y-5 lg:space-y-6"
        >
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            className="text-secondary-400 uppercase text-sm tracking-[4px] font-semibold overflow-hidden"
          >
            Creative Designer
          </motion.p>

          <motion.h4
            initial={{ y: 100, opacity: 0 }}
            className="text-xl lg:text-2xl font-medium overflow-hidden"
          >
            Hi, my name is
          </motion.h4>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            className="overflow-hidden text-4xl sm:text-5xl xl:text-7xl font-medium leading-tight uppercase"
          >
            Md <span className="text-secondary-400">Sakib</span> Hossen
          </motion.h1>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            className="overflow-hidden text-2xl lg:text-3xl font-light flex gap-4 flex-wrap justify-center lg:justify-start items-center"
          >
            <span>I&apos;m a </span>
            <span className="font-medium bg-secondary-400 inline-block px-2 py-1 rounded-sm">
              Full Stack Web Developer
            </span>
          </motion.h3>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            className="overflow-hidden text-lg text-gray-400 lg:max-w-[80%]"
          >
            I specialize in creating dynamic, responsive websites and web
            applications with a passion for clean code and seamless user
            experiences. Let&apos;s build something amazing together!
          </motion.p>
          <motion.div
            ref={iconContainerRef}
            className="icons pt-5 flex justify-center lg:justify-start gap-6 text-2xl sm:text-3xl"
          >
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={"/"}
                className="transition-all duration-300 hover:scale-125"
              >
                <FaLinkedin />
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={"/"}
                className="transition-all duration-300 hover:scale-125"
              >
                <FaSquareGithub />
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={"/"}
                className="transition-all duration-300 hover:scale-125"
              >
                <FaSquareTwitter />
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={"/"}
                className="transition-all duration-300 hover:scale-125"
              >
                <FaSquareFacebook />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="img-box">
          <motion.div
            ref={imgRef}
            initial={{ scale: 3, opacity: 0 }}
            // initial={{ x: "100vw", opacity: 0 }}
            className="border-4 border-secondary-500 bg-primary-800/60 rounded-full w-[340px] sm:w-[450px] lg:w-[400px] xl:w-[500px] h-[340px] sm:h-[450px] lg:h-[400px] xl:h-[500px] overflow-hidden"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          >
            <Image
              src={MyPic}
              alt="Md Sakib Hossen"
              className="w-full h-full object-cover scale-105"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
