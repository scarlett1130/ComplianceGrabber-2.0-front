import {
  ArchiveBoxXMarkIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";
import ButtonLink from "./ButtonLink";
import Sidebar from "./Sidebar";
import Image from "next/image";
const Navbar = () => {
  const [show, setshow] = useState(false);
  const [Transparent, setTransparent] = useState(true);
  const handleScroll = () => {
    if (window.scrollY > 350) setTransparent(false);
    else setTransparent(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed ${
        Transparent ? "bg-transparent" : "bg-[#254153f5]"
      } px-4 lg:px-0 flex justify-between smooth-transition lg:justify-center z-10 inset-x-0 top-0  items-center lg:py-4   overflow-hidden lg:rounded-b-full mx-2 shadow-md shadow-gray-800`}
    >
      <Sidebar show={show} setshow={setshow} />
      <div className="relative lg:absolute lg:left-14 text-white ">
        <Image src="/logo.png" width="90" height="60" alt="logo" />
      </div>

      <button
        onClick={() => setshow(!show)}
        className=" lg:hidden z-30 hover:scale-x-110 smooth-transition"
      >
        <Bars3CenterLeftIcon
          color="white"
          className="h-16 w-14 cursor-pointer"
        />
      </button>

      <div className="hidden  relative lg:flex justify-evenly items-center  text-lg text-white space-x-14 max-w-7xl ">
        <ButtonLink title="Home" link="/" />
        <ButtonLink title="Get Data" link="/suppliers" />
        <ButtonLink title="Find Suppliers" link="/bulksearch" />
        <ButtonLink title="Need help ?" link="" />
      </div>
    </div>
  );
};

export default Navbar;
