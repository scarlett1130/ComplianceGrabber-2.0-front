import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Sidelink from "./Sidelink";
import { useState } from "react";
const Sidebar: NextPage = () => {
  const [shown, setshown] = useState(false);
  return (
    <div>
      <button
        className="p-2 block  lg:hidden"
        onClick={() => {
          shown ? setshown(false) : setshown(true);
        }}
      >
        <Image
          src="/menu.svg"
          width="40"
          height="50"
          alt="menu"
          className="hover:scale-105 cursor-pointer transition duration-500"
        />
      </button>

      <div
        className={`absolute ${
          shown ? "block" : "hidden"
        }   lg:block lg:relative z-20 top-0 bg-gradient-to-t from-[#079290] to-[#215172]   min-h-screen  min-w-[200px]`}
      >
        <button
          className="p-2 block  lg:hidden"
          onClick={() => {
            shown ? setshown(false) : setshown(true);
          }}
        >
          <Image
            src="/menu.svg"
            width="40"
            height="50"
            alt="menu"
            className="hover:scale-105 cursor-pointer transition duration-500"
          />
        </button>
        <Link href="/">
          <a className="flex space-x-2 justify-center items-center px-2 hover:bg-cyan-700 text-white font-semibold pt-7 pb-5  border-gray-400 border-b-2 max-h-screen ">
            <Image src="/logo.jpeg" width="50" height="50" alt="logo" />
            <div>Compliance Grabber</div>
          </a>
        </Link>

        <div className="mt-20 space-y-4 px-3 col-span-2  ">
          <span className="uppercase font-semibold text-white">menu</span>
          <Sidelink
            title="Manufacturers"
            link="/Manufacturers"
            img="manifacture.svg"
            imgWhite="manifacturewhite.svg"
          />
          <Sidelink
            title="Distributors"
            link="/Distributors"
            img="distribute.svg"
            imgWhite="distributewhite.svg"
          />
          <Sidelink
            title="Find supplier"
            link="/search"
            img="extensionblack.svg"
            imgWhite="extension.svg"
          />

          <Sidelink
            title="Help"
            link="/help"
            img="faqDark.svg"
            imgWhite="faq.svg"
          />

          <Sidelink
            title="About"
            link="/About"
            img="aboutDark.svg"
            imgWhite="about.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
