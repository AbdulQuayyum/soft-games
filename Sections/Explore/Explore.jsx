'use client';

import { useState } from "react";
import { motion } from "framer-motion";

import Styles from "../../Styles/Index";
import { exploreWorlds } from "../../Constants/Index"
import { staggerContainer } from "../../Utilities/Motion/Motion";
import { ExploreCard, TitleText, TypingText } from "../../Components/Index.js";

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${Styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${Styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Game worlds" textStyles="text-center" />
        <TitleText
          title={<>Choose the game world you want <br className="hidden md:block" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
};

export default Explore;
