"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
// import SecContainer from "@/components/sec-container/SecContainer";
import { portfolios } from "@/lib/portfolios";
import PortfolioCard from "@/components/portfolio-card/PortfolioCard";
import SecHeader from "@/components/section-header/SecHeader";

const Portfolio = () => {
  const speed = 6;
  const gap = 25;
  const [containerWidth, setContainerWidth] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
  const [boxWidth, setBoxWidth] = useState(340);

  const resizeBoxWidth = (secWidth) => {
    if (secWidth > 800) {
      setBoxWidth(700);
    } else if (secWidth < 800 && secWidth > 500) {
      setBoxWidth(Math.floor((secWidth * 90) / 100));
    } else {
      setBoxWidth(340);
    }
  };

  //   Without window resize
  useEffect(() => {
    if (ref.current) {
      const secWidth = ref.current.offsetWidth;
      const width = portfolios.length * (boxWidth + gap) - secWidth;
      resizeBoxWidth(secWidth);
      setContainerWidth(width);
    }
  }, [portfolios.length, boxWidth, gap]);
  return (
    <section className={"bg-primary-400"}>
      <div ref={ref} style={{ height: `${speed * 100}vh` }}>
        <div className="overflow-hidden py-20 sticky top-0 px-3 flex flex-col justify-center items-center">
          <SecHeader title="Portfolio" tag="My Works" titleClass="text-white" />
          <motion.div
            className="flex mt-10"
            style={{ x, width: containerWidth, gap }}
          >
            {portfolios.map((portfolio) => (
              <div
                key={portfolio.id}
                style={{ minWidth: boxWidth }}
              >
                <PortfolioCard portfolio={portfolio} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
