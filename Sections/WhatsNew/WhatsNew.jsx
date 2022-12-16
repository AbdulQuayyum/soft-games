'use client';

import { motion } from 'framer-motion';

import Styles from '../../Styles/Index';
import { newFeatures } from '../../Constants/Index';
import { NewFeatures, TitleText, TypingText } from "../../Components/Index"
import { planetVariants, staggerContainer, fadeIn } from "../../Utilities/Motion/Motion";

const WhatsNew = () => (
  <section className={`${Styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${Styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What's new about Soft-Games?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${Styles.flexCenter}`}
      >
        <img
          src="/random-1.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
