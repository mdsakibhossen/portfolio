"use client";

import PortfolioCard from "@/components/portfolio-card/PortfolioCard";
import SecHeader from "@/components/section-header/SecHeader";
import { portfolios } from "@/lib/portfolios";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Portfolio = () => {
  const speed = 6;
  const [boxWidth, setBoxWidth] = useState(330);
  const gap = 25;
  const [containerWidth, setContainerWidth] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  //   Without window resize
  useEffect(() => {
    if (ref.current) {
      const secWidth = ref.current.offsetWidth;
      if (secWidth > 768) {
        setBoxWidth(700);
      } else {
        setBoxWidth(Math.floor((secWidth * 95) / 100));
      }
      const width = portfolios.length * (boxWidth + gap) - secWidth;
      setContainerWidth(width);
    }
  }, [portfolios.length, boxWidth, gap]);

  return (
    <section
      ref={ref}
      className={`bg-slate-800`}
      style={{ height: `${speed * 100}vh` }}
    >
      <div className="overflow-hidden h-screen py-20 sticky top-0 px-3 gird items-center">
        <SecHeader title="Portfolio" tag="My Works" titleClass="text-white" />
        <motion.div
          className="flex mt-10 relative"
          style={{ x, width: containerWidth, gap }}
        >
          {portfolios.map((portfolio, i) => (
            <div
              key={i}
              className="box h-[400px]"
              style={{ minWidth: boxWidth }}
            >
              <PortfolioCard portfolio={portfolio} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
