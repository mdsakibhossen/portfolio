"use client";

import { motion } from "framer-motion";

const AlertMessage = ({ message }) => {
  const { text, isSucceed } = message;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={`px-3 py-2.5 rounded font-medium ${
        isSucceed
          ? "bg-green-100 text-green-400"
          : "bg-secondary-100 text-secondary-400"
      } ${text ? "block" : "hidden"}`}
    >
      {text}
    </motion.div>
  );
};

export default AlertMessage;
