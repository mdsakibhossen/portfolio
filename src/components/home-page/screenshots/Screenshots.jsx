"use client";
import Image from "next/image";
import Pic from "../../../../public/images/1.png";
import { useEffect, useRef, useState } from "react";
import "./screenshots.css";

const Screenshots = () => {
  const screenshots = [Pic, Pic, Pic, Pic, Pic, Pic];
  const [boxWidth, setBoxWidth] = useState(330);
  const gap = 0;
  const [containerWidth, setContainerWidth] = useState(0);
  const ref = useRef(null);

  // Calculate container width based on the number of screenshots
  useEffect(() => {
    if (ref.current) {
      const secWidth = ref.current.offsetWidth;

      if (secWidth > 768) {
        setBoxWidth(700);
      } else {
        setBoxWidth(Math.floor((secWidth * 95) / 100));
      }

      const width = screenshots.length * (boxWidth + gap);
      setContainerWidth(width);
    }
  }, [screenshots.length, boxWidth, gap]);

  return (
    <section ref={ref} className="bg-slate-800 overflow-hidden">
      <div
        className="scrolling-container flex"
        style={{ width: containerWidth * 2, gap }}
      >
        {[...screenshots, ...screenshots].map((screenshot, i) => (
          <div key={i} className="box h-[400px]" style={{ minWidth: boxWidth }}>
            <Image
              src={screenshot}
              alt="ScreenShots"
              width={1500}
              height={500}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Screenshots;
