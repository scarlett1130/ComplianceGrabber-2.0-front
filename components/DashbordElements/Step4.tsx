/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import {
  setSupplier,
  setSupplierType,
  SelectPartnumbers,
  SelectSupplier,
  selectSupplierType,
} from "../../Redux/Slices/StepperSlice";
import GetLiveData from "../../utils/GetLiveData";
import Loader from "./Loader";

function step4() {
  const dispatch = useAppDispatch();
  const partnumbers: string[] = useAppSelector(SelectPartnumbers);
  const supplierType: string = useAppSelector(selectSupplierType);
  const supplier: string = useAppSelector(SelectSupplier);
  const [Loading, setLoading] = useState(false);
  async function Generate() {
    setLoading(true);
    const response = await GetLiveData({
      type: supplierType,
      supplier,
      partnumbers,
    });
    console.log("was it", response.LiveData);
    setLoading(false);
  }

  return (
    <div className="bg-gray-200 rounded-lg  flex flex-col justify-center items-center space-y-3 px-5 py-24 mt-9 ">
      {!Loading && (
        <>
          <p className="font-semibold text-sm text-black">
            Click to start generating a filled template
          </p>
          <button
            className="bg-gray-400 flex items-center space-x-7 text-white rounded-md font-poppins text-2xl px-16 py-2"
            onClick={Generate}
          >
            <p> Start Generating</p>
          </button>{" "}
        </>
      )}
      {Loading && <Loader />}

      {/* <p className="font medium text-lg text-blue-900">
        Download the template{" "}
      </p>
      <button className="sidebar-color flex items-center space-x-7 text-white rounded-md font-poppins text-2xl px-16 py-2">
        <svg
          width="30"
          height="35"
          viewBox="0 0 96 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M77.4 24.16C74.68 10.36 62.56 0 48 0C36.44 0 26.4 6.56 21.4 16.16C9.36 17.44 0 27.64 0 40C0 53.24 10.76 64 24 64H76C87.04 64 96 55.04 96 44C96 33.44 87.8 24.88 77.4 24.16ZM68 36L48 56L28 36H40V20H56V36H68Z"
            fill="white"
          />
        </svg>
        <p> Export Completed template</p>
      </button> */}
    </div>
  );
}

export default step4;
