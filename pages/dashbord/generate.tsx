import React, { useState } from "react";
import Generate from "../../components/DashbordElements/Generate";
import Step1 from "../../components/DashbordElements/Step1";
import Stepper from "../../components/DashbordElements/Stepper";
import DashbordSideBar from "../../components/DashbordSideBar";
import Footer from "../../components/Footer";

function generate() {
  return (
    <>
      <div className="relative flex overflow-hidden">
        <DashbordSideBar />

        <div className="p-5 w-full bg-gray-100 ">
          <Generate />
         
        </div>
      </div>
      <Footer />
    </>
  );
}

export default generate;
