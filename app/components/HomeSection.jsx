import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div className="h-screen w-full p-8 relative z-[99]">
      <div className="w-full h-full absolute top-0 left-0">
        <Image src="/hero.jpg" alt="hero" fill className="object-cover" />
      </div>
      <div className=" z-[99] flex flex-col h-full">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default HomeSection;
