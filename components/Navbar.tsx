import {
  ArchiveBoxXMarkIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";
import ButtonLink from "./ButtonLink";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [show, setshow] = useState(false);
  const [Transparent, setTransparent] = useState(true);
  const handleScroll = () => {
    if (window.scrollY > 250) setTransparent(false);
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
      } px-4 lg:px-0 flex justify-between smooth-transition lg:justify-center z-10 inset-x-0 top-0 pt-5 items-center lg:py-5   overflow-hidden lg:rounded-b-full mx-2 shadow-md shadow-black`}
    >
      <Sidebar show={show} setshow={setshow} />
      <div className="relative lg:absolute left-14 text-white ">
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
      <div className="bg-black opacity-30 absolute  inset-0 bg-blend-darken " />
      <button
        onClick={() => setshow(!show)}
        className=" lg:hidden z-30 hover:scale-x-110 smooth-transition"
      >
        <Bars3CenterLeftIcon
          color="white"
          className="h-16 w-14 cursor-pointer"
        />
      </button>

      <div className="hidden  relative lg:flex justify-evenly items-center  text-xl text-white space-x-14 max-w-7xl ">
        <ButtonLink title="Home" link="/" />
        <ButtonLink title="Supplier" link="/suppliers" />
        <ButtonLink title="Generate" link="" />
        <ButtonLink title="Need help ?" link="" />
      </div>
    </div>
  );
};

export default Navbar;
