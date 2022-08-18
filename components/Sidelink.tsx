import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";
interface SideProps {
  link: string;
  imgWhite: string;
  img: string;
  title: string;
}
const Sidelink = ({ link, imgWhite, img, title }: SideProps) => {
  return (
    <Link href={`${link}`}>
      <a className="flex justify-between py-3 rounded-lg group items-center hover:bg-gray-100 transition duration-500 ease-in-out cursor-pointer px-4">
        <span className="block relative group-hover:hidden w-9 h-9">
          <Image src={`/${imgWhite}`} layout="fill" alt="logo" />
        </span>
        <span className="hidden relative group-hover:block w-9 h-9">
          <Image src={`/${img}`} layout="fill" alt="logo" />
        </span>

        <span className="font-semibold  group-hover:text-gray-800">
          {title}
        </span>
        <span className="invisible relative group-hover:visible">
          <Image src="/arrow.svg" layout="fill" alt="arrow" />
        </span>
      </a>
    </Link>
  );
};

export default Sidelink;
