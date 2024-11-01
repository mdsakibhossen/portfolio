"use client";

import { useState, useEffect, useRef } from "react";
import SecContainer from "@/components/sec-container/SecContainer";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { categories, portfolios } from "@/lib/portfolios";
import PortfolioCard from "@/components/portfolio-card/PortfolioCard";

const parentVariants = {
  hidden: { y: 150, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.25,
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

// Animation variants for the tab buttons
const tabVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
  active: { scale: 1.1, transition: { duration: 0.2 } },
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePortfolios, setActivePortfolios] = useState(portfolios);

  // Effect to update portfolios based on the selected category
  useEffect(() => {
    const filtered =
      activeCategory === "all"
        ? portfolios
        : portfolios.filter(
            (portfolio) => portfolio.category === Number(activeCategory)
          );

    setActivePortfolios(filtered);
  }, [activeCategory]);

  const catRef = useRef(null);
  const isCatInView = useInView(catRef, { amount: 0.2, once: true });

  return (
    <SecContainer className={"py-20"}>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={isCatInView ? "visible" : "hidden"}
        ref={catRef}
        className="categories"
      >
        {/* Category Tabs for Desktop */}
        <div className="hidden lg:flex flex-wrap justify-center gap-6 mb-8">
          <motion.div variants={childVariants}>
            <motion.button
              variants={tabVariants}
              initial="initial"
              whileHover="hover"
              className={`${
                activeCategory === "all"
                  ? "text-secondary-400 border-b-2 border-secondary-400"
                  : "text-gray-500"
              } pb-2 transition-colors duration-300`}
              onClick={() => setActiveCategory("all")}
              animate={activeCategory === "all" ? "active" : "initial"}
            >
              All
            </motion.button>
          </motion.div>
          {categories.map((category) => (
            <motion.div key={category.id} variants={childVariants}>
              <motion.button
                // key={category.id}
                variants={tabVariants}
                initial="initial"
                whileHover="hover"
                className={`${
                  activeCategory === category.id
                    ? "text-secondary-400 border-b-2 border-secondary-400"
                    : "text-gray-500"
                } pb-2 transition-colors duration-300`}
                onClick={() => setActiveCategory(category.id)}
                animate={activeCategory === category.id ? "active" : "initial"}
              >
                {category.title}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Select Box for Mobile Devices */}
        <motion.div
          variants={childVariants}
          className="lg:hidden mb-8 max-w-[600px] mx-auto"
        >
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-secondary-400"
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </motion.div>
      </motion.div>

      {/* Portfolios or No Portfolios Message */}
      <AnimatePresence>
        {activePortfolios.length === 0 ? (
          <motion.div
            key="no-portfolios"
            className="text-center text-gray-500 py-10 text-2xl md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            No Portfolios are Available.
          </motion.div>
        ) : (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {activePortfolios.map((portfolio) => (
              <motion.div
                key={portfolio.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <PortfolioCard portfolio={portfolio} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </SecContainer>
  );
};

export default Portfolio;
