'use client';

import { motion } from "framer-motion";

import Styles from "../../Styles/Index";
import { navVariants } from "../../Utilities/Motion/Motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${Styles.xPaddings} py-8 relative`}>
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${Styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        alt="..."
        className="w-[24px] h-[24px] object-contain"
        src="/search.svg" />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        Soft-Games
      </h2>
      <img
        alt="..."
        className="w-[24px] h-[24px] object-contain"
        src="/menu.svg" />
    </div>
  </motion.nav>
);

export default Navbar;
