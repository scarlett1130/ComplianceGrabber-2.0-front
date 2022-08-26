import React from "react";
import type { NextPage } from "next";

const Navbar = () => {
  return (
    <div className="absolute px-4 lg:px-0 flex justify-between lg:justify-center z-10 inset-x-0 top-0 pt-5 items-center lg:py-5  overflow-hidden lg:rounded-b-full mx-2 shadow-md shadow-black">
      <div className="lg:absolute left-14 text-white ">
        <svg
          width="60"
          height="60"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36 28.64V0C16 2 0 19.16 0 40C0 60.84 16 78 36 80V51.36C32 49.72 28 45.28 28 40C28 34.72 32 30.28 36 28.64ZM51.44 36H80C78.08 17 64 1.88 44 0V28.64C48 29.84 50.08 32.56 51.44 36ZM44 51.36V80C64 78.12 78.08 63 80 44H51.44C50.08 47.44 48 50.16 44 51.36Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="bg-black opacity-30 absolute  inset-0 bg-blend-darken" />
      <svg
        className=" lg:hidden "
        width="60"
        height="60"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="60" height="60" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_55_3" transform="scale(0.0104167)" />
          </pattern>
          <image
            id="image0_55_3"
            width="60"
            height="60"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAAhElEQVR4nO3aMQ6AMAwEwZj//9l8AEHlHIpm6hRWtr21AAAAAAAAADhVfT3o7t5xyKmq6vWPr12H8EyAMAHCBAgTIEyAMAEAAAAAAACG2QUNswv6OQHCBAgTIEyAMAHCBAAAAAAAABhmFzTMLujnBAgTIEyAMAHCBAgTAAAAAAAAAACG3E2GDC7VbgLhAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>

      <div className="hidden  relative lg:flex justify-evenly items-center  text-xl text-white space-x-14 max-w-7xl ">
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
