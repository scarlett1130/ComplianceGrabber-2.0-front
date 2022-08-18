import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import suppliers from "../utils/suppliers";
import { useState } from "react";
import Papa from "papaparse";
import fileDownload from "js-file-download";
import axios from "axios";
import { generateTableFastData } from "../utils/TableGenerator";
import DataTable from "../components/DataTable";
const Manufacturers: NextPage = () => {
  const [manufacturer, setmanufacturer] = useState("");
  const [partnumbers, setpartnumbers] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Datas, setDatas] = useState<any>(null);
  const [DownloadableData, setDownloadableData] = useState<any>(null);
  const GetLiveData = async () => {
    setDatas(null);
    if (!partnumbers) return;
    const keywords = partnumbers.split(",");
    const arr = [];
    if (manufacturer == "Molex") {
      setLoading(true);
      try {
        let rawData: any = [];
        await Promise.all(
          keywords.map(async (keyword) => {
            const response = await axios.get(
              `https://fastapi0013.herokuapp.com/molex/${keyword}`
            );
            if (response) {
              rawData = [...rawData, ...[response.data]];
            }
          })
        );
        const csv_data = Papa.unparse(rawData);
        setDownloadableData(csv_data);
        const data = generateTableFastData(rawData);
        setDatas(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else if (manufacturer == "Wago") {
      setLoading(true);
      try {
        let rawData: any = [];
        Promise.all(
          keywords.map(async (keyword) => {
            const response = await axios.get(
              `https://fastapi0013.herokuapp.com/wago/${keyword}`
            );
            if (response) {
              rawData = [...rawData, ...[response.data]];
            }
          })
        );
        const csv_data = Papa.unparse(rawData);
        setDownloadableData(csv_data);
        const data = generateTableFastData(rawData);
        setDatas(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else if (manufacturer == "Te") {
      setLoading(true);
      try {
        let rawData: any = [];
        await Promise.all(
          keywords.map(async (keyword) => {
            const response = await axios.get(
              `https://fastapi0013.herokuapp.com/te/${keyword}`
            );
            if (response) {
              rawData = [...rawData, ...[response.data]];
            }
          })
        );
        const csv_data = Papa.unparse(rawData);
        setDownloadableData(csv_data);
        const data = generateTableFastData(rawData);
        setDatas(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const Export = () => {
    if (DownloadableData) {
      fileDownload(DownloadableData, "Searched_Data.csv");
    }
  };
  return (
    <div>
      <Head>
        <title>Manufacturers </title>
        <meta
          name="description"
          content="Search for part number with manufacturer apis"
        />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <div className="px-2 space-y-2">
        <div className="space-y-2 lg:flex lg:space-x-4 items-center relative  w-full ">
          <select
            className="w-full border-[3px] lg:max-w-[250px]  border-[#079290] px-2 bg-[#079290] shadow-lg font-mono text-lg  cursor-pointer rounded-lg hover:rounded-md text-white   py-3 outline-none"
            onChange={(e) => {
              setmanufacturer(e.target.value);
            }}
          >
            <option value="10">Select a Manufacturer</option>

            {suppliers.manufacturers.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="flex border-[3px] w-full  items-center border-[#079290] shadow-md rounded-lg  overflow-hidden flex-1 ">
            <img src="/search.svg" className="w-6 h-6" />
            <input
              className="p-2 outline-none w-full text-lg"
              placeholder="Search by PartNumber"
              onChange={(e) => setpartnumbers(e.target.value)}
            />
          </div>

          <button
            className="px-9 py-3 rounded-xl w-full lg:max-w-[150px] bg-[#079290] hover:rounded-lg shadow-md text-white text-lg  font-semibold"
            // onClick={GetLiveData}
          >
            Search
          </button>
        </div>

        <div className="w-full  ">
          {Datas !== null && (
            <div className="mt-16">
              <DataTable
                head={Datas?.head}
                body={Datas?.body}
                Export={Export}
              />
            </div>
          )}

          {Loading && (
            <div className="mt-64 w-full grid grid-cols-1 place-items-center">
              <img src="/ring.gif" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manufacturers;
