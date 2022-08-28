import Image from "next/image";
import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
const Banner = () => {
  const scrollDown = () => {
    window.scrollTo({ top: 850, behavior: "smooth" });
  };
  return (
    <div className="absolute inset-0 max-h-screen ">
      <Image
        src="https://images.unsplash.com/photo-1613690399151-65ea69478674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
        layout="fill"
        className="object-cover"
        alt="banner image"
      />
      <div
        className="absolute inset-0 bg-gray-900 opacity-60 mix-blend-multiply"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center ">
        <h1 className="text-4xl font-poppins tracking-tight mt-32 sm:mt-2  text-white sm:text-5xl lg:text-6xl">
          ComplianceGrabber 2.0
        </h1>
        <p className="mt-6 hidden sm:block text-xl text-white font-poppins text-center leading-10">
          You’re digital tool to get all you need in one place and from all the
          best suppliers,we strive to make all the product details available for
          you,coming from the most used and trusted suppliers all around the
          Globe !
        </p>
      </div>
      <div className="absolute bottom-24 inset-x-auto w-full mt-56 sm:mt-36 flex justify-center px-2">
        <button
          className="font-poppins relative overflow-hidden text-xl group text-white rounded-full inline-flex items-center justify-center space-x-4  py-2 border-4 border-white  min-w-[350px] px-4"
          onClick={scrollDown}
        >
          <p className="lg:z-10 ">GET STARTED</p>
          <ArrowRightCircleIcon color="white" className="w-24 h-14 lg:z-10" />
          <div className="bg-[#183749]  hidden lg:block smooth-transition w-[250px] h-[100px] group-hover:translate-x-[175px]  absolute -left-[266px]" />
          <div className="bg-[#183749]  hidden lg:block w-[250px] smooth-transition h-[100px] group-hover:-translate-x-[175px] absolute  -right-[250px]" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
