'use client';

import { motion } from 'framer-motion';

import Styles from "../../Styles/Index";

import { fadeIn, staggerContainer, zoomIn } from "../../Utilities/Motion/Motion";

const Feedback = () => (
  <section className={`${Styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${Styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Alao Abdul-Quayyum
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Software Engineer @Soft-Games
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[20px] text-[16px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias labore aut reiciendis voluptatibus explicabo, iure earum aliquid id esse molestiae”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex items-center justify-center flex-1"
      >
        <img
          src="/xbox-2.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/cat.jpeg"
            alt="stamp"
            className="w-[155px] h-[155px] rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
