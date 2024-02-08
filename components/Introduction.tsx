"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import profile from "@/public/profile.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

export default function Introduction() {
  const listOfWords = ["Developer,", "Engineer,", "Problem Solver,"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % listOfWords.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [listOfWords.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-col gap-5 md:gap-8 lg:gap-[60px]"
    >
      {/* Image and main text */}
      <div className="flex items-center md:gap-[50px] gap-6">
        <div className="md:w-[250px] md:h-[220px] h-[150px] rounded-xl bg-slate-900 flex items-center justify-center">
          <Image
            className="w-[180px] h-[150px] md:w-[220px] md:h-[220px] mr-3"
            src={profile}
            alt="Profile"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="lg:text-6xl md:text-6xl text-3xl font-bold">
            Hello There!
            <br /> my name's{" "}
            <span className="w-fit font-bold bg-clip-text text-transparent bg-gradient-to-r  from-pink-500 to-blue-500">
              Mayank
            </span>
          </h1>
        </div>
      </div>

      {/* The 2nd title */}
      <div className="lg:ml-[60px] ml-3">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-gray-300">
          - You can call me{" "}
          <span className="word-transition text-green-500">
            {listOfWords[currentWordIndex]}
          </span>
        </h1>
      </div>

      {/* small description */}
      <div className="flex items-center justify-center xl:w-[900px] lg:ml-[60px] ml-5">
        <p className="lg:text-2xl md:text-xl text:md text-gray-500 text-wrap">
          I'm a full-stack developer with a profound passion for technology. My
          expertise lies in crafting dynamic, user-centric web applications,
          fueled by continuous learning and a drive for innovation.
        </p>
      </div>

      {/* Links */}
      <div className="flex lg:ml-[60px] ml-3 gap-5 ">
        <div className="border flex items-center justify-center w-[40px] h-[40px] rounded-lg border-gray-400 text-gray-400 hover:border-white hover:text-white">
          <LinkedInIcon className="w-[24px] h-[24px]" />
        </div>
        <div className="border flex items-center justify-center w-[40px] h-[40px] rounded-lg  border-gray-400 text-gray-400 hover:border-white hover:text-white">
          <InstagramIcon className="w-[24px] h-[24px]" />
        </div>
        <div className="border flex items-center justify-center w-[40px] h-[40px] rounded-lg  border-gray-400 text-gray-400 hover:border-white hover:text-white">
          <XIcon className="w-[24px] h-[24px]" />
        </div>
        <div className="border flex items-center justify-center w-[40px] h-[40px] rounded-lg  border-gray-400 text-gray-400 hover:border-white hover:text-white">
          <GitHubIcon className="w-[24px] h-[24px]" />
        </div>
      </div>
    </motion.div>
  );
}
