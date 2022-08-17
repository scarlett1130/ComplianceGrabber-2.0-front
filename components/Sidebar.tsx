import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
const Sidebar: NextPage = () => {
  return (
    <div className="bg-gradient-to-t from-[#079290] to-[#215172]   min-h-screen relative">
      <Link href="/">
        <a className="flex space-x-2 justify-center items-center px-2 hover:bg-cyan-700 text-white font-semibold pt-7 pb-5  border-gray-400 border-b-2 max-h-screen ">
          <img src="/logo.jpeg" className="w-12 h-12" />
          <div>Compliance Grabber</div>
        </a>
      </Link>

      <div className="mt-20 space-y-4 px-3 col-span-2  ">
        <span className="uppercase font-semibold text-white">menu</span>
        <Link href="/">
          <a className="flex justify-between py-3 rounded-lg group items-center hover:bg-gray-100 transition duration-500 ease-in-out cursor-pointer px-4">
            <span className="block group-hover:hidden">
              <img src="/windowLight.svg" />
            </span>
            <span className="hidden group-hover:block">
              <img src="/window.svg" />
            </span>

            <span className="font-bold text-[#1c2931] group-hover:text-gray-800">
              Home
            </span>
            <span className="invisible group-hover:visible">
              <img src="/arrow.svg" />
            </span>
          </a>
        </Link>
        <Link href="/Manufacturers">
          <a className="flex justify-between py-3 rounded-lg group items-center hover:bg-gray-100 transition duration-500 ease-in-out cursor-pointer px-2">
            <span className="block group-hover:hidden w-9 h-12">
              <img src="/manifacturewhite.svg" className="w-full h-full" />
            </span>
            <span className="hidden group-hover:block w-9 h-12">
              <img src="/manifacture.svg" className="w-full h-full" />
            </span>

            <span className="font-bold text-[#1c2931] group-hover:text-gray-800">
              Manufacturers
            </span>
            <span className="invisible group-hover:visible">
              <img src="/arrow.svg" />
            </span>
          </a>
        </Link>
        <Link href="/Distributors">
          <a className="flex justify-between py-3 rounded-lg group items-center hover:bg-gray-100 transition duration-500 ease-in-out cursor-pointer px-2">
            <span className="block group-hover:hidden w-9 h-12">
              <img src="/distributewhite.svg" className="w-full h-full" />
            </span>
            <span className="hidden group-hover:block w-9 h-12">
              <img src="/distribute.svg" className="w-full h-full" />
            </span>

            <span className="font-bold text-[#1c2931] group-hover:text-gray-800">
              Distributors
            </span>
            <span className="invisible group-hover:visible">
              <img src="/arrow.svg" />
            </span>
          </a>
        </Link>
        <Link href="/search">
          <a className="flex justify-between py-3 rounded-lg group items-center hover:bg-gray-100 transition duration-500 ease-in-out cursor-pointer px-2">
            <span className="block group-hover:hidden w-9 h-12">
              <img src="/extension.svg" className="w-full h-full" />
            </span>
            <span className="hidden group-hover:block w-9 h-12">
              <img src="/extensionblack.svg" className="w-full h-full" />
            </span>

            <span className="font-bold text-[#1c2931] text-md pl-1 w-full group-hover:text-gray-800">
              Find The Supplier
            </span>
            <span className="invisible group-hover:visible">
              <img src="/arrow.svg" />
            </span>
          </a>
        </Link>

        <Link href="/help">
          <a className="flex justify-between py-3 rounded-lg group items-center hover:bg-gray-100 transition duration-500 ease-in-out cursor-pointer px-4">
            <span className="block group-hover:hidden">
              <img src="/faq.svg" />
            </span>
            <span className="hidden group-hover:block">
              <img src="/faqDark.svg" />
            </span>
            <span className="font-semibold group-hover:text-blue-900">
              HELP
            </span>
            <span className="invisible group-hover:visible">
              <img src="/arrow.svg" />
            </span>
          </a>
        </Link>

        <Link href="/About">
          <a className="flex justify-between py-3 rounded-lg group items-center hover:bg-gray-100 transition duration-500 ease-in-out cursor-pointer px-4">
            <span className="block group-hover:hidden">
              <img src="/about.svg" />
            </span>
            <span className="hidden group-hover:block">
              <img src="/aboutDark.svg" />
            </span>
            <span className="font-semibold group-hover:text-blue-900">
              About
            </span>
            <span className="invisible group-hover:visible">
              <img src="/arrow.svg" />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
