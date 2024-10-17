// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// const PageTransition = ({ children }) => {
//   const pathname = usePathname();
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Animation variants for the overlay
//   const overlayVariants = {
//     hidden: { scaleX: 0, transformOrigin: "left" }, // Start with scale 0 from the left
//     visible: {
//       scaleX: 1,
//       transformOrigin: "left",
//       transition: { duration: 0.5 },
//     }, // Expand to full width
//     exit: {
//       scaleX: 0,
//       transformOrigin: "right",
//       transition: { duration: 0.5 },
//     }, // Collapse to the right
//   };

//   useEffect(() => {
//     setIsTransitioning(true);
//     const timer = setTimeout(() => {
//       setIsTransitioning(false);
//     }, 1000); // Total duration of the animation (expand + collapse)
//     return () => clearTimeout(timer);
//   }, [pathname]); // Trigger the effect on route change

//   return (
//     <>
//       <AnimatePresence mode="wait">
//         {isTransitioning && (
//           <>
//             {/* Overlay that covers the full screen */}
//             <motion.div
//               key={pathname} // Key ensures that the transition happens on route change
//               className="fixed top-0 left-0 w-full min-h-screen bg-secondary-400 z-[9999]"
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               variants={overlayVariants}
//             />
//           </>
//         )}
//       </AnimatePresence>
//       <main>{children}</main>
//     </>
//   );
// };

// export default PageTransition;


"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Animation variants for the overlay
  const overlayVariants = {
    hidden: { scaleX: 0, transformOrigin: "left" }, // Start with scale 0 from the left
    visible: {
      scaleX: 1,
      transformOrigin: "left",
      transition: { duration: 0.5 },
    }, // Expand to full width
    exit: {
      scaleX: 0,
      transformOrigin: "right",
      transition: { duration: 0.5 },
    }, // Collapse to the right
  };

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Total duration of the animation (expand + collapse)
    return () => clearTimeout(timer);
  }, [pathname]); // Trigger the effect on route change

  // Extract page name from pathname (e.g., /about => About)
  const getPageName = (pathname) => {
    if (pathname === "/") return "Home";
    return pathname.slice(1).replace(/-/g, " ").toUpperCase(); // Capitalize the first letter of each page
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <>
            {/* Overlay that covers the full screen */}
            <motion.div
              key={pathname} // Key ensures that the transition happens on route change
              className="fixed top-0 left-0 w-full min-h-screen bg-secondary-400 z-[9999] flex items-center justify-center"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
            >
              {/* Centered Page Name */}
              <motion.h1
                className="text-white text-5xl lg:text-6xl font-semibold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring", stiffness: 400, }}
              >
                {getPageName(pathname)}
              </motion.h1>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <>{children}</>
    </>
  );
};

export default PageTransition;
