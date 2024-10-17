// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const NavLink = ({ href, children }) => {
//   const path = usePathname();
//   return (
//     <Link
//       href={href}
//       className={`${
//         href === path ? "text-secondary-400" : ""
//       } transition-all duration-300 hover:text-secondary-400 tracking-[1px]`}
//     >
//       {children}
//     </Link>
//   );
// };

// export default NavLink;



"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const containerVariants = {
  initial: {},
  hover: {},
};
const span1Variants = {
  initial: { y: 0 },
  hover: { y: "-100%" },
};
const span2Variants = {
  initial: { y: "100%" },
  hover: { y: 0 },
};

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`uppercase font-[500] tracking-[1px] hover:text-secondary-400 duration-300 transition-colors relative overflow-hidden  ${
        path === href ? "text-secondary-400" : ""
      }`}
    >
      <motion.span
        variants={containerVariants}
        initial="initial"
        whileHover="hover"
      >
        <motion.span variants={span1Variants} className="inline-block">
          {children}
        </motion.span>
        <motion.span
          variants={span2Variants}
          className="inline-block absolute left-0"
        >
          {children}
        </motion.span>
      </motion.span>
    </Link>
  );
};

export default NavLink;