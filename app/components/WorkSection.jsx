"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import localFont from "next/font/local";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const myFont = localFont({
  src: "../blackrocketdemo-2okgk.otf",
});

const WorkSection = () => {
  const ref = useRef();

  return (
    <motion.div className="h-full bg-black w-full border-b" ref={ref} id="work">
      <div className=" w-full h-full">
        <div className="h-full flex justify-center relative overflow-hidden pt-10">
          <div className="flex flex-col gap-24 items-center w-full h-full">
            <motion.h2
              // style={{ x: titleScroll }}
              className={`text-orange-500 text-6xl sm:text-7xl md:text-8xl xl:text-9xl ${myFont.className}`}
            >
              Projects
            </motion.h2>
            <div className="w-full bg-zinc-950 h-full z-[10] xl:p-8">
              <Carousel
                className="w-full h-[300px] xl:h-[500px] max-w-[1500px] mx-auto"
                showIndicators={false}
              >
                <div className="flex flex-col lg:flex-row items-center h-full gap-2 sm:gap-8 p-8">
                  <div className="relative w-full h-[200px] lg:h-[500px] rounded-xl">
                    <Image
                      src="/jasper.png"
                      alt="jasper"
                      fill
                      className="rounded-xl object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-8">
                    <h2
                      className={`${myFont.className} text-orange-500 text-5xl`}
                    >
                      Jasper
                    </h2>
                    <p className="text-white text-left max-w-[800px] text-sm">
                      Jasper is an advanced note taking app inspired by notion.
                      Made with NextJs, it has features like authentication
                      system, CRUD operations to create, delete and update
                      notes, fully integrated light, dark or system modes to
                      some of the more advanced features like ability to archive
                      notes, add Emojies and Cover images and advanced editor
                      for writing your notes. <br />
                      <span className="text-red-500">
                        **The website is not mobile responsive as the main
                        purpose is to show the functionalities. Please see it on
                        desktop.
                      </span>
                    </p>
                    <div className="flex gap-4 text-white">
                      <Link
                        href="https://github.com/savarkavi/jasper"
                        target="_blank"
                      >
                        <Github className="cursor-pointer hover:text-orange-500" />
                      </Link>
                      <Link
                        href="https://jasper-project.vercel.app/"
                        target="_blank"
                      >
                        <ExternalLink className="cursor-pointer hover:text-orange-500" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center h-full gap-2 sm:gap-8 p-8">
                  <div className="relative w-full h-[200px] lg:h-[500px] rounded-xl">
                    <Image
                      src="/ecom.png"
                      alt="ecom"
                      fill
                      className="rounded-xl object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-8">
                    <h2
                      className={`${myFont.className} text-orange-500 text-5xl`}
                    >
                      Ecomboard
                    </h2>
                    <p className="text-white text-left max-w-[800px] text-sm">
                      A MERN fullstack admin dashboard, this project showcase
                      the advanced backend data modelling and reflecting it into
                      a beautiful layout to the frontend. It has every
                      fundamental feature which an ecommerce dashboard should
                      have- from faetching live data of customers, products info
                      and sales and transaction history to beautiful graphs and
                      tables with advanced sorting functionalities.
                    </p>
                    <div className="flex gap-4 text-white">
                      <Link
                        href="https://github.com/savarkavi/dashboard"
                        target="_blank"
                      >
                        <Github className="cursor-pointer hover:text-orange-500" />
                      </Link>
                      <Link
                        href="https://dashboard-frontend-hom7.onrender.com"
                        target="_blank"
                      >
                        <ExternalLink className="cursor-pointer hover:text-orange-500" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center h-full justify-between gap-8 p-8">
                  <div className="relative w-full h-[200px] lg:h-[500px] rounded-xl">
                    <Image
                      src="/cinemania.png"
                      alt="ecom"
                      fill
                      className="rounded-xl object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-8">
                    <h2
                      className={`${myFont.className} text-orange-500 text-5xl`}
                    >
                      CineMania
                    </h2>
                    <p className="text-white text-left max-w-[800px] text-sm">
                      CineMania Zone is purely a frontend application to
                      showcase the ability to make beautiful designs and working
                      with API&apos;s. From sorting movies based on genre to
                      filtering trending section by Day or Week.
                    </p>
                    <div className="flex gap-4 text-white">
                      <Link
                        href="https://github.com/savarkavi/cine-mania"
                        target="_blank"
                      >
                        <Github className="cursor-pointer hover:text-orange-500" />
                      </Link>
                      <Link
                        href="https://cinemaniazone.netlify.app/"
                        target="_blank"
                      >
                        <ExternalLink className="cursor-pointer hover:text-orange-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <motion.div className="absolute bottom-0 w-full h-full">
            <Image src="/stars.png" alt="stars" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkSection;
