"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const Map = () => {
  const ref = useRef(null);
  return (
    <section className="map h-[60vh] w-full bg-secondary-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="w-full h-full"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66877.51453154082!2d90.324992!3d23.894425599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c25a71cf5873%3A0xd64e6f32619e3132!2sAshulia!5e1!3m2!1sen!2sbd!4v1729653813279!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale-[70%] hover:grayscale-0 transition-all duration-300"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Map;
