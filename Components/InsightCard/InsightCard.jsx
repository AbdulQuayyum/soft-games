'use client';

import { motion } from 'framer-motion';

import { fadeIn } from "../../Utilities/Motion/Motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col gap-4 md:flex-row"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[290px] w-full h-[200px] rounded-[32px] object-cover"
    />
    <div className="flex items-center justify-between w-full">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[36px] text-[22px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[16px] text-[12px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white"
      >
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[20%] h-[20%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
