import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import suppliers from "../utils/suppliers";
import SupplierSearcher from "../components/SupplierSearcher";
import getLiveManufacturerData from "../utils/GetLiveData";

const Manufacturers: NextPage = () => {
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
      <SupplierSearcher
        suppliers={suppliers.manufacturers}
        getLiveSupplierData={getLiveManufacturerData}
      />
    </div>
  );
};
export default Manufacturers;
