"use client";
import AlertMessage from "@/components/alert-message/AlertMessage";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
// Animation Variants
const parentVariants = {
  hidden: { y: 150, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
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
const ContactForm = () => {
  const ref = useRef();
  const formRef = useRef();
  const [message, setMessage] = useState({ text: "", isSucceed: false });

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(formRef.current);
    const user_name = e.target[0].value;
    const user_email = e.target[1].value;
    const message = e.target[2].value;
    // console.log(user_name, user_email, message);

    if (!user_name || !user_email || !message) {
      setMessage({ text: "Please Fill All The Fields.", isSucceed: false });
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLETE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_API_KEY,
        }
      )
      .then(
        () => {
          // console.log("SUCCESS!");
          setMessage({ text: "Send Successfully!!!", isSucceed: true });
          formRef.current.reset();
        },
        (error) => {
          setMessage({
            text: error.text || "Failed to Send",
            isSucceed: false,
          });
          console.log("FAILED...", error.text);
        }
      );
  };
  const isFormInView = useInView(formRef, { amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={isFormInView ? "visible" : "hidden"}
      className="w-full bg-white p-8 rounded-md shadow-md"
    >
      <motion.h3 variants={childVariants} className="text-lg font-medium mb-3">
        Get In Touch
      </motion.h3>
      <div className="mb-3">
        <AlertMessage message={message} />
      </div>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-6">
          <div className="overflow-hidden">
            <motion.label
              variants={childVariants}
              className="inline-block text-gray-700 font-medium mb-2"
              htmlFor="user_name"
            >
              Name
            </motion.label>
          </div>
          <motion.input
            variants={childVariants}
            type="text"
            id="user_name"
            name="user_name"
            className="w-full px-3 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-400"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <motion.label
            variants={childVariants}
            className="block text-gray-700 font-medium mb-2"
            htmlFor="user_email"
          >
            Email
          </motion.label>
          <motion.input
            variants={childVariants}
            type="user_email"
            id="user_email"
            name="user_email"
            className="w-full px-3 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-400"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <motion.label
            variants={childVariants}
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Message
          </motion.label>
          <motion.textarea
            variants={childVariants}
            id="message"
            name="message"
            className="w-full px-3 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-400 resize-none"
            placeholder="Your Message"
            rows="5"
          />
        </div>
        <div className="text-center">
          <motion.button
            variants={childVariants}
            type="submit"
            className="bg-secondary-400 text-white px-6 py-3 rounded hover:bg-secondary-400"
          >
            Send Message
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
