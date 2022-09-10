import Link from "next/link";
import React from "react";

function DashbordSideBar() {
  return (
    <div className="sticky bg-gradient-to-t from-[#079290] to-[#215172] min-h-screen lg:min-w-[300px] bg-black px-4 py-4">
      <Link href="/">
        <a>
          <h1 className="font-bold text-xl text-gray-200 py-4 text-center">
            Compliance Grabber 2.0
          </h1>
        </a>
      </Link>
      <div className="pt-16 ">
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
      </div>
    </div>
  );
}

export default DashbordSideBar;
