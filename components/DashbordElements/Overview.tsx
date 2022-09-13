import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import DahbordHeader from "./DahbordHeader";

import StatCard from "./StatCard";

function Overview() {
  const Suppliers_LOGOS = [
    "digikeyFactory.png",
    "festoFactory.png",
    "molexFactory.png",
    "mouserFactory.png",
    "slidershowToo.png",
  ];
  return (
    <div>
      {/* Top section */}
      <DahbordHeader />
      {/* End top section */}
      <div className="w-full mt-16 p-5 grid grid-cols-1  xl:grid-cols-3 gap-4 lg:gap-x-24 ">
        <StatCard
          title="Total number of suppliers"
          quantity={10}
          src="stats.png"
        />
        <StatCard title="Manufacturers" quantity={7} src="truck.png" />
        <StatCard title="Distributers" quantity={3} src="plane.png" />
      </div>
      <div className="flex justify-center px-4 mt-16">
        <Carousel
          infiniteLoop
          autoPlay
          emulateTouch
          interval={2000}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
        >
          {Suppliers_LOGOS.map((logo, i) => (
            <div className="w-1/3 h-[550px]" key={i}>
              <img src={`/${logo}`} alt={logo} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Overview;
