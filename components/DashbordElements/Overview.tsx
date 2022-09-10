import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
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
      <div>
        <h1 className="text-2xl font-bold text-gray-600">Overview</h1>
      </div>
      {/* End top section */}
      <div className="w-full mt-16 p-5 grid grid-cols-1  xl:grid-cols-3 gap-4 lg:gap-x-24 ">
        <StatCard title="Total number of suppliers" quantity={10} />
        <StatCard title="Manufacturers" quantity={7} />
        <StatCard title="Distributers" quantity={3} />
      </div>
      <div className="w-full px-4">
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
            <div className="w-full h-[500px]" key={i}>
              <Image
                src={`/${logo}`}
                layout="fill"
                alt={logo}
                className="object-center"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Overview;
