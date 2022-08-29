import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SecondaryBanner from "../components/SecondaryBanner";

function Bulksearch() {
  return (
    <div>
      <div className="relative min-h-[700px] ">
        <Navbar />
        <SecondaryBanner message="Search without specifying the suppplier" />
      </div>
      <div className="relative container mx-auto flex ">
        <div className="absolute w-full flex  flex-1 bg-gray-300 rounded-full overflow-hidden  -top-8">
          <input
            className="flex w-full py-5  text-center font-poppins  bg-gray-300  focus:outline-0  focus:ring-none"
            placeholder="partnumbers..."
          />
          <button className=" py-2 justify-center items-center text-white font-poppins text-lg flex flex-1 min-w-[150px] bg-blue-600">
            <p>Find </p>
          </button>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}

export default Bulksearch;
