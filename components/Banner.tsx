import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="absolute inset-0 max-h-[800px] ">
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
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-poppins tracking-tight  text-white sm:text-5xl lg:text-6xl">
          ComplianceGrabber 2.0
        </h1>
        <p className="mt-6 hidden sm:block text-xl text-white font-poppins text-center leading-10">
          You’re digital tool to get all you need in one place and from all the
          best suppliers,we strive to make all the product details available for
          you,coming from the most used and trusted suppliers all around the
          Globe !
        </p>
      </div>
      <div className="relative bottom-0 mt-56 sm:mt-36 flex justify-center ">
        <button className="font-poppins relative overflow-hidden text-3xl group text-white rounded-full flex items-center justify-center space-x-4 border-4 border-white  min-w-[350px] px-4">
          <p className="">Features</p>

          <div className="bg-[#071a3a] smooth-transition w-[250px] h-[100px] group-hover:translate-x-[175px]  absolute -left-[260px]" />
          <div className="bg-[#071a3a] w-[250px] smooth-transition h-[100px] group-hover:-translate-x-[175px] absolute  -right-[250px]" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
