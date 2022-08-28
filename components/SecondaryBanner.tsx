import Image from "next/image";
import React from "react";

function SecondaryBanner() {
  return (
    <div className="absolute inset-0 max-h-[700px] shadow-lg shadow-blue-900">
      <Image
        src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        layout="fill"
        className="object-fit"
        alt="banner image"
      />
      <div className="absolute inset-0 opacity-70 bg-blue-900 bg-blend-lighten" />
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="inline-flex flex-col  md:flex-row items-center font-medium  leading-loose text-3xl md:text-4xl lg:text-6xl text-white px-4 text-center">
          Search suppliers with{" "}
          <p className="text-yellow-400 font-poppins uppercase underline decoration-2 underline-offset-8">
            &#160;partNumbers
          </p>
        </h1>
      </div>
    </div>
  );
}

export default SecondaryBanner;
