"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";

const myFont = localFont({
  src: "../blackrocketdemo-2okgk.otf",
});

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_itu17lv",
        "template_1spgig2",
        formRef.current,
        "uL_6j_Xf3CzIUYdET"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" w-full h-screen bg-black relative" id="contact">
      <div className="w-full h-full relative">
        <Image
          src="/contact.png"
          alt="contact"
          fill
          className="object-cover opacity-50"
        />
      </div>

      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center gap-4 px-4 max-w-[600px]">
        <div>
          <motion.h2
            className={`text-orange-500 text-6xl sm:text-7xl md:text-8xl xl:text-9xl ${myFont.className}`}
          >
            Contact
          </motion.h2>
        </div>
        <form
          className="flex flex-col gap-4 w-full z-[99]"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input
            placeholder="Your name"
            required
            className="py-3 px-2 rounded-lg"
            name="name"
          />
          <input
            placeholder="Your Email"
            required
            className="py-3 px-2 rounded-lg"
            name="email"
          />
          <textarea
            placeholder="Message"
            className="h-[200px] p-2 rounded-lg"
            name="message"
          />
          <Button
            className={
              "bg-orange-500 text-black border-2 border-white hover:bg-orange-500"
            }
          >
            Submit
          </Button>
        </form>
        <div className="flex flex-col md:flex-row items-center gap-2 justify-between text-white w-full text-sm">
          <div className="flex gap-3 cursor-default hover:text-orange-500">
            <Mail />
            <span>sushant20.sharma00@gmail.com</span>
          </div>
          <div className="flex gap-3 cursor-default hover:text-orange-500">
            <Phone />
            <span>+91-7678265751</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
