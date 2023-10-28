"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Parallex = ({ type, desc }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yScroll = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const xScroll = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <motion.div
      className="h-full flex justify-center items-center relative overflow-hidden"
      ref={ref}
    >
      <motion.div
        style={{ y: yScroll }}
        className="flex flex-col gap-10 items-center"
      >
        <motion.h2 className={`text-white uppercase text-7xl`}>
          {type}
        </motion.h2>
        <motion.p className="text-white max-w-[800px] text-center text-lg font-light">
          {desc}
        </motion.p>
      </motion.div>
      <motion.div
        style={{ x: xScroll }}
        className="absolute bottom-0 w-full h-full"
      >
        <Image src="/stars.png" alt="mountains" fill className="object-cover" />
      </motion.div>
      {/* <div className="absolute bottom-0 w-full h-full">
        <Image
          src="/planets.png"
          alt="mountains"
          fill
          className="object-cover"
        />
      </div> */}
      <div className="absolute bottom-0 w-full h-full">
        <Image
          src="/mountains.png"
          alt="mountains"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );
};

export default Parallex;
