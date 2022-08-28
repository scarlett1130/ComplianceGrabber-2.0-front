import { NextPage } from "next";
import React, { useState } from "react";
import Dropdown from "../components/Combobox";

import Navbar from "../components/Navbar";
import SecondaryBanner from "../components/SecondaryBanner";

const Suppliers: NextPage = () => {
  const [selectedTypesupplier, setSelectedTypesupplier] = useState("");
  const [selectedsupplier, setSelectedsupplier] = useState("");
  return (
    <>
      <div className="relative min-h-[700px] ">
        <Navbar />
        <SecondaryBanner />
      </div>
      <div className="flex flex-col md:flex-row max-w-[1700px] container mx-auto mt-5 space-y-9  pt-16  px-4 pb-16">
        <div className="space-y-4 mr-4">
          <div className="md:flex space-y-6 md:space-y-0 md:space-x-6">
            <Dropdown
              title="Select type of supplier"
              options={["Manufacturers", "Distributors"]}
              selectedoption={selectedTypesupplier}
              setSelectedoption={setSelectedTypesupplier}
            />
            <Dropdown
              title="Select supplier"
              options={["adam", "dfdf"]}
              selectedoption={selectedsupplier}
              setSelectedoption={setSelectedsupplier}
            />
          </div>
          <div className="pt-8">
            <input
              className="p-4 outline-none ring-none rounded-lg w-full font-poppins text-lg mx-2"
              placeholder="Partnumbers"
              type="text"
            />
          </div>
          <div className="pt-8 mx-2">
            <button className="w-full hover:scale-105 smooth-transition  shadow-md py-3 bg-[#3865A6] rounded-xl text-white font-poppins">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-1 md:ml-9">{selectedsupplier}</div>
      </div>
    </>
  );
};

export default Suppliers;
