'use client';

import { motion } from "framer-motion";

import Styles from "../../Styles/Index.js";
import { slideIn, staggerContainer, textVariant } from "../../Utilities/Motion/Motion";

const Hero = () => (
  <section className={`${Styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      className={`${Styles.innerWidth} mx-auto flex flex-col`}
      initial="hidden"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      whileInView="show">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          className={Styles.heroHeading}
          variants={textVariant(1.1)}>
          Soft-Games
        </motion.h1>
      </div>
      <motion.div
        className="relative w-full md:-mt-[20px] -mt-[12px]"
        variants={slideIn("right", "tween", 0.2, 1)}>
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          alt="..."
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          src="/gnews.jpg" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
