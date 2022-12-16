'use client';

import { motion } from 'framer-motion';

import Styles from '../../Styles/Index.js';
import { insights } from '../../Constants/Index';
import { staggerContainer } from "../../Utilities/Motion/Motion";
import { InsightCard, TitleText, TypingText } from "../../Components/Index.js";

const Insights = () => (
  <section className={`${Styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${Styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about Soft-Games</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
