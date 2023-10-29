"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import localFont from "next/font/local";
import { tai } from "../fonts";

const myFont = localFont({
  src: "../blackrocketdemo-2okgk.otf",
});

const AboutSection = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yScroll = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const titleScroll = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const descScroll = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  const desc =
    "Based in New Delhi, India, a creative and logical-oriented Software Engineer with a deep interest in tech, programming, Game-dev and AI. Proven track record of creating and implementing successful front-end applications. Looking to bring my skills to a tech company with global reach.";

  return (
    <motion.div className="h-full bg-black w-full" ref={ref} id="about">
      <div className="h-full flex justify-center relative overflow-hidden">
        <motion.div className="flex flex-col gap-10 items-center mt-[50px] px-4 xl:mt-[200px]">
          <motion.h2
            style={{ x: titleScroll }}
            className={`text-orange-500 text-6xl sm:text-7xl md:text-8xl xl:text-9xl ${myFont.className}`}
          >
            About
          </motion.h2>
          <motion.div style={{ x: descScroll }} className="flex flex-col gap-4">
            <motion.p
              className={`text-white max-w-[800px] text-center text-lg font-light border border-orange-500 p-8 ${tai.className}`}
            >
              {desc}
            </motion.p>
            <div className="flex flex-col gap-3 justify-center items-center">
              <span className="text-orange-500 text-xl">My Tech Stack:</span>
              <div className="flex gap-4 bg-white p-2 rounded-xl flex-wrap">
                <Image src="/react.png" alt="react" width={40} height={40} />
                <Image src="/nextjs.png" alt="nextjs" width={40} height={40} />
                <Image src="/type.png" alt="type" width={40} height={40} />
                <Image
                  src="/tailwind.png"
                  alt="tailwind"
                  width={40}
                  height={40}
                />
                <Image src="/node.png" alt="node" width={40} height={40} />
                <Image
                  src="/express.png"
                  alt="express"
                  width={40}
                  height={40}
                />
                <Image src="/mongo.png" alt="mongo" width={40} height={40} />
                <Image src="/framer.png" alt="framer" width={40} height={40} />
                <Image
                  src="/javascript.png"
                  alt="javascript"
                  width={40}
                  height={40}
                />
                <Image src="/css.png" alt="css" width={40} height={40} />
                <Image src="/html.png" alt="html" width={40} height={40} />
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="absolute bottom-0 w-full h-full">
          <Image src="/stars.png" alt="stars" fill className="object-cover" />
        </motion.div>
      </div>{" "}
    </motion.div>
  );
};

export default AboutSection;
