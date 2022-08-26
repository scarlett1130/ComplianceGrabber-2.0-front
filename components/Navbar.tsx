import React from "react";
import type { NextPage } from "next";

const Navbar = () => {
  return (
    <div className="absolute flex justify-center z-10 inset-x-0 top-0 py-5  overflow-hidden rounded-b-full mx-2 shadow-md shadow-black">
      <div className="absolute left-14 text-white ">Logo</div>
      <div className="bg-black opacity-30 absolute  inset-0 bg-blend-darken" />
      <div className=" relative flex justify-evenly items-center  text-xl text-white space-x-14 max-w-7xl ">
        <button className="relative group">
          <p className="text-md">Manufactureres</p>
          <hr className=" absolute w-0 group-hover:w-full smooth-transition" />
        </button>
        <button className="relative group">
          <p className="text-md"> Distributers</p>
          <hr className=" absolute w-0 group-hover:w-full smooth-transition" />
        </button>
        <button className="relative group">
          <p className="text-md">Generate</p>
          <hr className=" absolute w-0 group-hover:w-full smooth-transition" />
        </button>
        <button className="relative group">
          <p className="text-md">Need help ?</p>
          <hr className=" absolute w-0 group-hover:w-full smooth-transition" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
