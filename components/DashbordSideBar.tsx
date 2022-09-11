import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
function DashbordSideBar() {
  const [showSidebar, setshowSidebar] = useState(true);
  return (
    <div
      className={`flex md:block bg-gray-200 ${
        showSidebar
          ? "absolute md:relative inset-y-0 left-0 z-20 min-w-[250px] sidebar-color "
          : ""
      } justify-center items-center smooth-tranisiton md:sidebar-color min-h-screen px-2  lg:min-w-[300px] md:px-4 py-4`}
    >
      <div className={`${showSidebar ? "block" : "hidden md:block "}`}>
        <button
          onClick={() => setshowSidebar(!showSidebar)}
          className={`relative w-full justify-items-end  ${
            showSidebar ? "" : " "
          }   md:hidden `}
        >
          <svg
            className="absolute -top-16  -right-4"
            width="50"
            height="80"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="96" height="96" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_13_4" transform="scale(0.0104167)" />
              </pattern>
              <image
                id="image0_13_4"
                width="80"
                height="96"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </button>
        <Link href="/">
          <a>
            <motion.h1
              animate={{
                y: showSidebar ? "0" : -200,
              }}
              transition={{ duration: 0.4 }}
              className="font-bold text-xl text-gray-200 py-4 text-center"
            >
              Compliance Grabber 2.0
            </motion.h1>
          </a>
        </Link>
        <motion.div
          className="pt-16 "
          animate={{
            x: showSidebar ? "0" : -200,
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="sidebar-element">
            <p>Overview</p>
          </div>
          <div className="sidebar-element">
            <p>Type of supplier</p>
          </div>
          <div className="sidebar-element">
            <p>Generate SPN data</p>
          </div>
          <div className="sidebar-element">
            <p>Find the supplier</p>
          </div>
          <div className="sidebar-element">
            <p>Live SPN data search</p>
          </div>
        </motion.div>
      </div>
      <button
        onClick={() => setshowSidebar(!showSidebar)}
        className={`p-2 bg-cyan-700 shadow-xl rounded-full ${
          showSidebar ? "hidden" : "block"
        }`}
      >
        <ArrowRightIcon className="w-6 h-6 text-white animate-pulse" />
      </button>
    </div>
  );
}

export default DashbordSideBar;
