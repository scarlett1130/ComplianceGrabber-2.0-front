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
          <p className="z-10">Features</p>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g clipPath="url(#clip0_55_4)">
              <path
                d="M44 36.64V8C24 10 8 27.16 8 48C8 68.84 24 86 44 88V59.36C40 57.72 36 53.28 36 48C36 42.72 40 38.28 44 36.64ZM59.44 44H88C86.08 25 72 9.88 52 8V36.64C56 37.84 58.08 40.56 59.44 44ZM52 59.36V88C72 86.12 86.08 71 88 52H59.44C58.08 55.44 56 58.16 52 59.36Z"
                fill="white"
              />
              <rect width="96" height="96" fill="url(#pattern0)" />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_55_4" transform="scale(0.0104167)" />
              </pattern>
              <clipPath id="clip0_55_4">
                <rect width="96" height="96" fill="white" />
              </clipPath>
              <image
                id="image0_55_4"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>

          <div className="bg-[#071a3a] smooth-transition w-[250px] h-[100px] group-hover:translate-x-[175px]  absolute -left-[260px]" />
          <div className="bg-[#071a3a] w-[250px] smooth-transition h-[100px] group-hover:-translate-x-[175px] absolute  -right-[250px]" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
