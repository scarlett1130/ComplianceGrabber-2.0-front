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
import Dashbord from "../components/Dashbord";

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
      <Dashbord />
    </>
  );
};

export default Suppliers;
