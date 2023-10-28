import React from "react";
import { navlinks } from "@/utils/Navlinks";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const linksVariant = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const sidebarVariant = {
  hidden: {
    left: "-100%",
    transition: {
      // duration: 3,
      when: "afterChildren",
    },
  },
  visible: {
    left: 0,
  },
};

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const renderedLinks = navlinks.map((link) => {
    return (
      <motion.div
        key={link.name}
        className="cursor-pointer font-medium text-2xl text-black"
        variants={linksVariant}
      >
        {link.name}
      </motion.div>
    );
  });

  return (
    <motion.div
      className="md:hidden w-screen h-screen bg-orange-500 fixed top-0 overflow-y-hidden z-[999]"
      variants={sidebarVariant}
      initial="hidden"
      animate={isSidebarOpen ? "visible" : "hidden"}
    >
      <X
        className="absolute right-4 top-4 cursor-pointer"
        onClick={handleSidebarClose}
      />
      <motion.div
        variants={linksVariant}
        className="flex flex-col justify-center items-center gap-10 text-center h-full"
      >
        {renderedLinks}
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
