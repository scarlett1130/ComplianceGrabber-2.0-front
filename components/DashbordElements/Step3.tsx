import React from "react";
import suppliersList from "../../utils/suppliers";
interface stepProps {
  nextStep: () => void;
}
function step3({ nextStep }: stepProps) {
  return (
    <>
      <div className="bg-gray-200 rounded-lg space-y-3 px-5 py-24 mt-9 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gray-300 px-5 py-9 ">
            <h1 className="text-2xl font-poppins text-center text-[#225373]">
              Manufacturer
            </h1>
            <select
              name="Type of supplier"
              className="w-full  mt-12 smooth-transition min-h-[50px] rounded-lg font-poppins text-lg cursor-pointer hover:shadow-lg shadow-md border-0"
            >
              <option value="">Select supplier</option>
              {suppliersList.manufacturers.map((manufacturer, i) => (
                <option key={i} value="Manufacturer">
                  {manufacturer}
                </option>
              ))}
            </select>
          </div>
          <div className="rounded-lg bg-gray-300  px-5 py-9  ">
            <h1 className="text-2xl text-center font-poppins text-[#225373] ">
              Distrubuter
            </h1>
            <select
              name="Type of supplier"
              className="w-full mt-12  smooth-transition min-h-[50px] rounded-lg font-poppins text-lg cursor-pointer hover:shadow-lg shadow-md border-0"
            >
              <option value="">Select supplier</option>
              {suppliersList.distributers.map((manufacturer, i) => (
                <option key={i} value="Manufacturer">
                  {manufacturer}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-7">
        <button
          className="border border-gray-400 rounded-lg text-gray-400 font-poppins text-lg px-16 py-2 "
          onClick={nextStep}
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default step3;
