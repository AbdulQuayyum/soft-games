'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../../Components/CustomTexts/CustomTexts.jsx';

import Styles from '../../Styles/Index';
import { fadeIn, staggerContainer } from '../../Utilities/Motion/Motion.js';

const About = () => (
  <section className={`${Styles.paddings} sm:!mt-20 mt-0 relative z-10`}>
    <div className="z-0 gradient-02" />
    <motion.div
      className={`${Styles.innerWidth} mx-auto ${Styles.flexCenter} flex-col`}
      initial="hidden"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      whileInView="show">
      <TypingText
        textStyle="text-center"
        title="| About Soft-Games" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[28px] text-[22px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Soft-Games</span> is a new
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis minus
        vitae et enim, facere doloremque eius eos iusto accusantium qui in architecto
        inventore totam obcaecati praesentium neque. Perspiciatis temporibus rerum.{' '}
        <span className="font-extrabold text-white">
          lorem ipsum dolor sit amet,
        </span>{' '}
        consectetur adipiscing{' '}
        <span className="font-extrabold text-white">lorem</span>
        is a new
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis minus
        . Let's{' '}
        <span className="font-extrabold text-white">explore</span> soft games choices by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
