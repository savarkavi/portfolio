"use client";

import Image from "next/image";
import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import WorkSection from "./components/WorkSection";
import { motion } from "framer-motion";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-zinc-900 to-slate-950 w-screen min-h-[100vh] relative">
      <div className="w-full h-screen">
        <HomeSection />
        <div className="relative h-screen min-h-screen w-full">
          <div className="h-full w-full">
            <AboutSection />
            <WorkSection />
            <Contact />
          </div>
          <div className="w-full h-full sticky bottom-0">
            <Image
              src="/mountains.png"
              alt="mountains"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
