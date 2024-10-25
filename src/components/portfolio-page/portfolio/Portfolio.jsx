"use client";

import { useState, useEffect } from "react";
import SecContainer from "@/components/sec-container/SecContainer";
import { motion, AnimatePresence } from "framer-motion";
import { categories, portfolios } from "@/lib/portfolios";
import PortfolioCard from "@/components/portfolio-card/PortfolioCard";

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

  // Animation variants for the tab buttons
  const tabVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    active: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <SecContainer className={"py-20"}>
      {/* Category Tabs for Desktop */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 mb-8">
        <motion.button
          variants={tabVariants}
          initial="initial"
          whileHover="hover"
          className={`${
            activeCategory === "all"
              ? "text-primary-500 border-b-2 border-primary-500"
              : "text-gray-500"
          } pb-2 transition-colors duration-300`}
          onClick={() => setActiveCategory("all")}
          animate={activeCategory === "all" ? "active" : "initial"}
        >
          All
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category.id}
            variants={tabVariants}
            initial="initial"
            whileHover="hover"
            className={`${
              activeCategory === category.id
                ? "text-primary-500 border-b-2 border-primary-500"
                : "text-gray-500"
            } pb-2 transition-colors duration-300`}
            onClick={() => setActiveCategory(category.id)}
            animate={activeCategory === category.id ? "active" : "initial"}
          >
            {category.title}
          </motion.button>
        ))}
      </div>

      {/* Select Box for Mobile Devices */}
      <div className="md:hidden mb-8">
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-400"
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {/* Portfolios or No Portfolios Message */}
      <AnimatePresence>
        {activePortfolios.length === 0 ? (
          <motion.div
            key="no-portfolios"
            className="text-center text-gray-500 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            No portfolios are available.
          </motion.div>
        ) : (
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
