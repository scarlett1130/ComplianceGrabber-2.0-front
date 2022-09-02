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
      <div className="relative min-h-[700px] ">
        <Navbar />
        <SecondaryBanner message="Search our suppliers with partnumbers" />
      </div>
      <div
        className={`flex flex-col  ${
          liveData && liveData?.head?.length > 5 ? "flex-col" : "xl:flex-row"
        } smooth-transition max-w-[1700px] container xl:mx-auto mt-5 space-y-9   px-4 pb-16`}
      >
        <form className="space-y-4 mr-4 " onSubmit={handleSubmit}>
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
              className="p-4 outline-none ring-none rounded-lg w-full font-poppins text-lg mx-2"
              placeholder="Partnumbers"
              onChange={(e) => handleInput(e.target.value)}
              required
              type="text"
            />
          </div>
          <div className="pt-8 ">
            <button className="w-full    hover:bg-[#3873c7] smooth-transition   py-3 bg-[#3865A6] rounded-md text-white font-poppins">
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
          className={`flex flex-col flex-1 ${
            liveData && liveData?.head?.length > 5 ? "" : "xl:ml-9"
          }  border border-dashed border-[#3873c7] shadow-xl rounded-lg w-full   min-h-[700px] overflow-x-auto`}
        >
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
      <Footer />
    </>
  );
};

export default Suppliers;
