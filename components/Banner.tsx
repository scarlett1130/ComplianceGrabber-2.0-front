import Image from "next/image";
import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const Banner = () => {
  const scrollDown = () => {
    window.scrollTo({ top: 950, behavior: "smooth" });
  };
  return (
    <div className="absolute inset-0 max-h-screen bg-blue-900 ">
      <video
        src="/animation.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 h-full w-full object-fill"
      />

      <motion.div
        className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center "
        initial={{ opacity: 1, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-poppins tracking-tight mt-32 sm:mt-2  text-white sm:text-5xl lg:text-6xl">
          ComplianceGrabber 2.0
        </h1>
        <p className="mt-6 hidden sm:block text-xl text-white font-poppins text-center leading-10">
          You’re digital tool to get all you need in one place and from all the
          best suppliers,we strive to make all the product details available for
          you,coming from the most used and trusted suppliers all around the
          Globe !
        </p>
      </motion.div>
      <div className="absolute bottom-16 inset-x-auto w-full mt-[18rem] sm:mt-36 flex justify-center px-2 ">
        <motion.button
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="font-poppins bg-cyan-800 relative hover:scale-105 mx-2 overflow-hidden text-lg group text-white rounded-md inline-flex items-center justify-center space-x-4  py-3 border-4 border-white  min-w-[350px] px-4"
          onClick={scrollDown}
        >
          <p className="lg:z-10 ">GO DASHBORD</p>

          <div className="bg-[#38c04e]  hidden lg:block smooth-transition w-[250px] h-[100px] group-hover:translate-x-[175px]  absolute -left-[266px]" />
          <div className="bg-[#38c04e]   hidden lg:block w-[250px] smooth-transition h-[100px] group-hover:-translate-x-[175px] absolute  -right-[250px]" />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="font-poppins bg-cyan-900 relative mx-2 hover:scale-105 overflow-hidden text-lg group text-white rounded-md inline-flex items-center justify-center space-x-4  py-3 border-4 border-white  min-w-[350px] px-4"
          onClick={scrollDown}
        >
          <p className="lg:z-10 ">GET STARTED</p>

          <div className="bg-[#16801b]  hidden lg:block smooth-transition w-[250px] h-[100px] group-hover:translate-x-[175px]  absolute -left-[266px]" />
          <div className="bg-[#16801b]  hidden lg:block w-[250px] smooth-transition h-[100px] group-hover:-translate-x-[175px] absolute  -right-[250px]" />
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
