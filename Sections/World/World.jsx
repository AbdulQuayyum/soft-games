'use client';

import { motion } from 'framer-motion';

import Styles from '../../Styles/Index';
import { TitleText, TypingText } from "../../Components"
import { fadeIn, staggerContainer } from "../../Utilities/Motion/Motion";

const World = () => (
  <section className={`${Styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${Styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on Soft-Games" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play games in multiplayer mode
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="object-cover w-full h-full" />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
