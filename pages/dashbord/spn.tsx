import Link from "next/link";
import React from "react";
import DashbordSideBar from "../../components/DashbordSideBar";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import suppliersList from "../../utils/suppliers";
function spn() {
  return (
    <>
      <div className="relative flex ">
        <DashbordSideBar />

        <div className="relative p-5 w-full bg-gray-100 ">
          <Link href="/dashbord">
            <a className="absolute cursor-pointer rounded-full top-1 left-1  xl:top-4 xl:left-4 p-4 hover:opacity-50 smooth-transition bg-gray-300">
              <img src="/back.svg" className="w-5 h-5" />
            </a>
          </Link>
          <motion.div
            className="px-4 block lg:flex items-center  w-full mt-16 "
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <span className="mr-6 mb-5 lg:mb-0">
              <p className="font-poppins text-3xl uppercase text-center text-cyan-600">
                suppliers
              </p>
            </span>
            <input
              className="py-4 px-2  w-full font-poppins text-center outline-none rounded-lg shadow-lg border border-cyan-400"
              placeholder="Search SPN.."
            />
          </motion.div>
          <motion.div
            className="px-4 block lg:flex items-center container mx-auto w-full mt-12 "
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <select
              name="Type of supplier"
              className="min-w-[250px] mx-5 my-2 smooth-transition min-h-[50px] rounded-lg font-poppins text-lg cursor-pointer hover:shadow-lg shadow-md border-0"
            >
              <option value="">Type of supplier</option>

              <option value="Manufacturer">Manufacturer</option>
              <option value="Distributer">Distributer</option>
            </select>

            <select
              name="Type of supplier"
              className="min-w-[250px] mx-5 my-2 smooth-transition min-h-[50px] rounded-lg font-poppins text-lg cursor-pointer hover:shadow-lg shadow-md border-0"
            >
              <option value="">Select supplier</option>
              {suppliersList.manufacturers.map((manufacturer, i) => (
                <option key={i} value="Manufacturer">
                  {manufacturer}
                </option>
              ))}
            </select>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default spn;
