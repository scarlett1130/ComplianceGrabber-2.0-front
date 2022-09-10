import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import StatCard from "../components/DashbordElements/StatCard";
import DashbordSideBar from "../components/DashbordSideBar";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Overview from "../components/DashbordElements/Overview";
const Suppliers: NextPage = () => {
  return (
    <div className="relative flex ">
      <DashbordSideBar />

      <div className="p-5 w-full bg-gray-100 ">
        <Overview />
      </div>
    </div>
  );
};

export default Suppliers;
