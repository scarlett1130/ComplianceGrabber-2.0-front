import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SecondaryBanner from "../components/SecondaryBanner";

function Bulksearch() {
  return (
    <div>
      <div className="relative min-h-screen">
        <Navbar />
        <div className="absolute inset-0  ">
          <video
            src="/Search_by_SPN.mp4"
            autoPlay
            muted
            loop
            className="absolute inset-0 h-full w-full object-fill"
          />
        </div>
        <div className="absolute inset-x-0 bottom-36 shadow-lg shadow-black container mx-auto flex bg-black bg-opacity-30">
          <div className="relative flex  mx-4 justify-center items-center flex-1 overflow-hidden ">
            <div className="w-full ">
              <div className="flex flex-col md:flex-row flex-1  ">
                <input
                  className="flex w-full py-5 shadow-md text-white text-lg text-center text-gray-5 placeholder-white   font-poppins bg-transparent border border-gray-400 focus:outline-0  focus:ring-none rounded-full"
                  placeholder="Type some partnumbers..."
                />
                <button className=" py-5  mt-6 md:mt-0  ml-0 md:ml-3 smooth-transition justify-center items-center text-white font-poppins text-lg flex flex-1 min-w-[150px] bg-gradient-to-r from-indigo-500  to-[#84FDFF] rounded-full">
                  <p>Find Supplier</p>
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
