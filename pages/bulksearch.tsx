import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SecondaryBanner from "../components/SecondaryBanner";

function Bulksearch() {
  return (
    <div>
      <div className="relative min-h-screen">
        <Navbar />
        <SecondaryBanner message="Search without specifying the suppplier" />
        <div className="absolute inset-0 container mx-auto flex ">
          <div className="relative flex  justify-center items-center flex-1 overflow-hidden ">
            <div className="w-full">
              <div className="py-16  w-full flex justify-center items-center">
                <h1 className="text-white text-3xl  font-poppins">
                  The easiest way to find supplier
                </h1>
              </div>

              <div className="flex flex-1 ">
                <input
                  className="flex w-full py-5 shadow-md text-white text-lg text-center text-gray-5   font-poppins bg-transparent border border-gray-400 focus:outline-0  focus:ring-none rounded-l-full"
                  placeholder="partnumbers..."
                />
                <button className=" py-5   hover:bg-orange-700  smooth-transition justify-center items-center text-white font-poppins text-lg flex flex-1 min-w-[150px] bg-orange-600 rounded-r-full">
                  <p>Find </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <Footer />
    </div>
  );
}

export default Bulksearch;
