"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import localFont from "next/font/local";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { tai } from "../fonts";

const myFont = localFont({
  src: "../blackrocketdemo-2okgk.otf",
});

const textVariant = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const buttonsVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-1 w-full z-[99] max-w-[1360px] mx-auto">
      <div className="lg:mt-0 flex flex-col justify-center gap-10 w-full h-full py-16 lg:py-20">
        <motion.h1
          className={`${myFont.className} text-orange-500 text-6xl sm:text-7xl md:text-8xl xl:text-9xl max-w-[200px] xl:max-w-[500px] tracking-wider`}
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          Sushant Sharma
        </motion.h1>
        <h2 className={`text-white ${tai.className}`}>
          <Typewriter
            options={{
              strings: ["Log: FullStack Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <motion.div
          className="flex gap-4"
          variants={buttonsVariant}
          initial="hidden"
          animate="visible"
        >
          <Button className="bg-transparent border hover:bg-orange-500 hover:text-black">
            See my work
          </Button>
          <Button className="bg-transparent border hover:bg-orange-500 hover:text-black">
            Contact me
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
