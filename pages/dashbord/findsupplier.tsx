import Link from "next/link";
import React from "react";
import DashbordSideBar from "../../components/DashbordSideBar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
function Findsupplier() {
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
            className="container   mx-auto mt-14  w-full "
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <input
              className="py-4 px-2  w-full font-poppins text-center outline-none rounded-lg shadow-lg"
              placeholder="ENTER SPN.."
            />
            <div className="grid grid-cols-2 gap-x-24 gap-y-4 mt-16">
              <div>
                <h1 className="font-poppins text-3xl text-center">
                  Manufacturers
                </h1>
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 pt-16">
                  <div>
                    <p className="font-poppins text-xl text-center">RS</p>
                    <img src="/RS.png" className="w-full h-64 rounded-lg" />
                  </div>
                  <div>
                    <p className="font-poppins text-xl text-center">wago</p>
                    <img src="/wago.png" className="w-full h-64 rounded-lg" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-poppins text-3xl w-full text-center">
                  Distributers
                </h1>
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 pt-16">
                  <div>
                    <p className="font-poppins text-xl text-center">mouser</p>
                    <img src="/mouser.png" className="w-full h-64 rounded-lg" />
                  </div>
                  <div>
                    <p className="font-poppins text-xl text-center">digikey</p>
                    <img src="/dk.webp" className="w-full h-64 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Findsupplier;
