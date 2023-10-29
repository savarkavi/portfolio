"use client";

import React, { useState } from "react";
import { navlinks } from "@/utils/Navlinks";
import { Instagram, Linkedin, MenuIcon, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Link from "next/link";

const linksVariant = {
  hover: {
    scale: 1.2,
  },
};

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const renderedLinks = navlinks.map((link) => {
    return (
      <Link href={`#${link.link}`} key={link.name}>
        <motion.div
          className="text-white"
          variants={linksVariant}
          whileHover="hover"
        >
          <span className="cursor-pointer font-medium text-lg hover:text-orange-500">
            {link.name}
          </span>
        </motion.div>
      </Link>
    );
  });

  return (
    <div
      className={`w-full flex justify-between z-[999] max-w-[1360px] mx-auto`}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <MenuIcon
        className="text-white cursor-pointer md:hidden"
        onClick={handleSidebarOpen}
      />
      <div className="hidden md:flex items-center gap-16 w-full">
        {renderedLinks}
      </div>
      <div className="text-white flex items-center gap-6">
        <motion.div variants={linksVariant} whileHover="hover">
          <Instagram className="cursor-pointer hover:text-orange-500" />
        </motion.div>
        <motion.div variants={linksVariant} whileHover="hover">
          <Twitter className="cursor-pointer hover:text-orange-500" />
        </motion.div>
        <motion.div variants={linksVariant} whileHover="hover">
          <Linkedin className="cursor-pointer hover:text-orange-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
