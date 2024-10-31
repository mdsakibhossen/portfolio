"use client";

import SecContainer from "@/components/sec-container/SecContainer";

// Importing motion from Framer Motion for stagger animation
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ContactForm from "@/components/contact-form/ContactForm";
import { contactInfos } from "@/lib/contactInfos";

const Contact = () => {
  // Animation Variants
  const parentVariants = {
    hidden: { y: 150, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
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
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { amount: 0.2, once: true });

  return (
    <SecContainer className={"py-20 bg-secondary-50"}>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-20 overflow-hidden">
        <div className="flex-1 w-full">
          <ContactForm />
        </div>

        {/* Content Section */}
        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={isContentInView ? "visible" : "hidden"}
          variants={parentVariants}
          className="contact-contents flex-1 space-y-5"
        >
          <motion.p
            variants={childVariants}
            className="text-secondary-400 uppercase text-sm tracking-[4px] font-semibold"
          >
            Contact Me
          </motion.p>
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-medium"
          >
            Give Your Site A New Look
          </motion.h2>
          <motion.p variants={childVariants} className="text-slate-700">
            Offering a comprehensive range of services that blend technical
            expertise, design sensibility, and business insight to elevate your
            digital presence. From aesthetic upgrades to functional
            improvements, I provide solutions that align with your goals and
            enhance user experience, ensuring your site stands out.
          </motion.p>
          <ul className="text-slate-600 flex flex-col gap-3">
            {contactInfos.map((item) => (
              <motion.li
                variants={childVariants}
                key={item.id}
                className="flex items-center gap-2"
              >
                <span className="flex justify-center items-center w-8 h-8 rounded-full bg-secondary-400 text-white">
                  <item.icon />
                </span>
                {item.href ? (
                  <Link href={item.href}>{item.info}</Link>
                ) : (
                  <address>{item.info}</address>
                )}
              </motion.li>
            ))}
          </ul>
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
              href={"https://www.linkedin.com/in/mdsakibhossen/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 text-sm font-semibold bg-secondary-400 text-white rounded-full shadow-lg hover:bg-secondary-500 transition-all duration-300 transform hover:scale-105 mt-5"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </SecContainer>
  );
};

export default Contact;
