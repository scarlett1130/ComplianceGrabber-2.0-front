import type { NextPage } from "next";
import { useState } from "react";
import DataTable from "../components/DataTable";
import suppliers from "../utils/suppliers";
import fileDownload from "js-file-download";
import Head from "next/head";
import SupplierSearcher from "../components/SupplierSearcher";
import { getLiveDistributersData } from "../utils/GetLiveData";
const Distributers: NextPage = () => {
  const [DownloadableData, setDownloadableData] = useState();
  const Export = () => {
    if (DownloadableData) {
      fileDownload(DownloadableData, "Data.csv");
    }
  };

  return (
    <>
      <Head>
        <title>Distributor</title>
        <meta
          name="description"
          content="Search for part number with distributer apis"
        />
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <SupplierSearcher
        suppliers={suppliers.distributers}
        getLiveSupplierData={getLiveDistributersData}
      />
    </>
  );
};

export default Distributers;
