import { NextPage } from "next";
import React, { useState } from "react";
import Dropdown from "../components/Combobox";
import suppliersList from "../utils/suppliers";
import Navbar from "../components/Navbar";
import SecondaryBanner from "../components/SecondaryBanner";
import {
  getLiveManufacturerData,
  getLiveDistributersData,
} from "../utils/GetLiveData";
import DataTable from "../components/DataTable";

interface table {
  head: any[];
  body: any[];
}
const Suppliers: NextPage = () => {
  const [selectedTypesupplier, setSelectedTypesupplier] =
    useState("Distributors");
  const [selectedsupplier, setSelectedsupplier] = useState("");
  const [Partnumbers, setPartnumbers] = useState<string[]>([]);
  const [Loading, setLoading] = useState(false);
  const [liveData, setLiveData] = useState<table>();
  const handleSubmit = async () => {
    if (selectedsupplier == "" || Partnumbers.length == 0) return;
    try {
      if (selectedTypesupplier == "Manufacturers") {
        const response = await getLiveManufacturerData({
          supplier: selectedsupplier,
          partnumbers: Partnumbers,
        });
        setLiveData(response?.LiveData as any);
        console.log(liveData);
      } else {
        const response = await getLiveDistributersData({
          supplier: selectedsupplier,
          partnumbers: Partnumbers,
        });
        setLiveData(response?.LiveData as any);
        console.log(liveData?.body);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleKeypress = (e: any) => {
    if (e.charCode === 13 && Partnumbers.length > 0) {
      handleSubmit();
    }
  };
  const handleInput = (input: string) => {
    setPartnumbers(input.split(",").filter((item) => item !== ""));
  };
  return (
    <>
      <div className="relative min-h-[700px] ">
        <Navbar />
        <SecondaryBanner />
      </div>
      <div
        className={`flex flex-col  ${
          liveData && liveData?.head?.length > 5 ? "flex-col" : "xl:flex-row"
        } max-w-[1700px] container xl:mx-auto mt-5 space-y-9   px-4 pb-16`}
      >
        <div className="space-y-4 mr-4  ">
          <div className="md:flex space-y-6 pt-36  md:space-y-0 md:space-x-6">
            <Dropdown
              title="Select type of supplier"
              options={["Manufacturers", "Distributors"]}
              selectedoption={selectedTypesupplier}
              setSelectedoption={setSelectedTypesupplier}
            />
            <div className="">
              <Dropdown
                title="Select supplier"
                options={
                  selectedTypesupplier == "Manufacturers"
                    ? suppliersList.manufacturers
                    : suppliersList.distributers
                }
                selectedoption={selectedsupplier}
                setSelectedoption={setSelectedsupplier}
              />
            </div>
          </div>
          <div className="pt-8">
            <p className="text-blue-800 text-md font-semibold">
              *Tip:For bulk search use commas
            </p>
            <input
              onKeyPress={(e) => handleKeypress(e)}
              className="p-4 outline-none ring-none rounded-lg w-full font-poppins text-lg mx-2"
              placeholder="Partnumbers"
              onChange={(e) => handleInput(e.target.value)}
              type="text"
            />
          </div>
          <div className="pt-8 mx-2">
            <button
              className="w-full    hover:bg-[#3873c7] smooth-transition   py-3 bg-[#3865A6] rounded-xl text-white font-poppins"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col flex-1 ${
            liveData && liveData?.head?.length > 5 ? "" : "xl:ml-9"
          }  border border-dashed border-[#3873c7] shadow-xl rounded-lg w-full   min-h-[700px] overflow-x-auto`}
        >
          {liveData && (
            <DataTable head={liveData?.head} body={liveData?.body} />
          )}
          <div className="flex justify-center items-center h-full">
            Your Data will appear here
          </div>
        </div>
      </div>
    </>
  );
};

export default Suppliers;
