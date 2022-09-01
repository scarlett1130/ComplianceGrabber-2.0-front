import { NextPage } from "next";
import React, { useState } from "react";
import Dropdown from "../components/Combobox";
import suppliersList from "../utils/suppliers";
import Navbar from "../components/Navbar";
import SecondaryBanner from "../components/SecondaryBanner";
import Image from "next/image";
import {
  getLiveManufacturerData,
  getLiveDistributersData,
} from "../utils/GetLiveData";
import DataTable from "../components/DataTable";
import Footer from "../components/Footer";
import fileDownload from "js-file-download";

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
  const [download, setDownload] = useState<any>();
  const [liveData, setLiveData] = useState<table>();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLiveData(undefined);
    setDownload(undefined);
    e.preventDefault();
    if (selectedsupplier == "" || Partnumbers.length == 0) return;
    try {
      setLoading(true);
      if (selectedTypesupplier == "Manufacturers") {
        const response = await getLiveManufacturerData({
          supplier: selectedsupplier,
          partnumbers: Partnumbers,
        });
        setLiveData(response?.LiveData as any);
        setDownload(response?.csv_data);
      } else {
        const response = await getLiveDistributersData({
          supplier: selectedsupplier,
          partnumbers: Partnumbers,
        });
        setLiveData(response?.LiveData as any);
        setDownload(response?.csv_data);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handleInput = (input: string) => {
    setPartnumbers(input.split(",").filter((item) => item !== ""));
  };
  const Export = () => {
    fileDownload(download, "TableData.csv");
  };
  return (
    <>
      <div className="relative min-h-screen ">
        <Navbar />
        <SecondaryBanner message="Search our suppliers with partnumbers" />
        <div className="absolute inset-x-0 inset-b-0 top-5 h-full pt-14 xl:pt-2 flex justify-center items-center">
          <div
            className={`flex  flex-col xl:flex-row smooth-transition w-full  mt-5 space-y-9 xl:space-y-0 space-x-0  xl:space-x-9 lg:px-16 pb-16`}
          >
            <form
              className="space-y-4 group hover:scale-[1.009] smooth-transition shadow-xl shadow-[#666377] bg-gradient bg-gradient-to-r from-[#3675A5] to-[#666377]   px-7 rounded-lg "
              onSubmit={handleSubmit}
            >
              <div className="relative text-2xl w-full text-white pt-9 text-center ">
                <p>Fill the form and search for data</p>
                <hr className=" absolute w-0 group-hover:w-full smooth-transition" />
              </div>
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
                <p className="text-white text-md font-semibold">
                  *Tip:For bulk search use commas
                </p>
                <input
                  className="p-4 outline-none ring-none rounded-lg w-full font-poppins text-lg mx-2"
                  placeholder="Partnumbers"
                  onChange={(e) => handleInput(e.target.value)}
                  required
                  type="text"
                />
              </div>
              <div className="pt-8 ">
                <button className="w-full    text-black smooth-transition   py-3 bg-[#F6E2A1] rounded-md font-poppins">
                  Search
                </button>
              </div>
            </form>
            {download && (
              <div className="pt-8 ">
                <button
                  className="w-full    hover:bg-purple-800 smooth-transition   py-3 bg-purple-700 rounded-md text-white font-poppins"
                  onClick={Export}
                >
                  Download
                </button>
              </div>
            )}
            <div
              className={`flex flex-col flex-1   border border-dashed border-[#3873c7] shadow-xl shadow-black rounded-lg w-full   min-h-[700px] overflow-x-auto`}
            >
              <p>Data Visualizer</p>
              {liveData && (
                <DataTable head={liveData?.head} body={liveData?.body} />
              )}
              {Loading && (
                <div className="flex justify-center items-center h-full flex-1">
                  <Image
                    src="https://cdn.dribbble.com/users/73104/screenshots/2832940/media/82692933cb4ad944b6db91b889d01fe4.gif"
                    width="300"
                    height="300"
                    alt="Loading"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Suppliers;
