'use client';

import { useState } from "react";
import { motion } from "framer-motion";

import Styles from "../../Styles/Index";
import { startingFeatures } from "../../Constants/Index"
import { staggerContainer, fadeIn, planetVariants } from "../../Utilities/Motion/Motion";
import { StartSteps, TitleText, TypingText } from "../../Components/Index.js";

const GetStarted = () => (
  <section className={`${Styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${Styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${Styles.flexCenter}`}
      >
        <img
          src="/gp.png"
          alt="get-started"
          className="w-[70%] h-[70%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Soft-Games Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);


export default GetStarted;
