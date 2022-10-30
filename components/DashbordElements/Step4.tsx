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
import fileDownload from "js-file-download";

function step4() {
  const dispatch = useAppDispatch();
  const partnumbers: string[] = useAppSelector(SelectPartnumbers);
  const supplierType: string = useAppSelector(selectSupplierType);
  const supplier: string = useAppSelector(SelectSupplier);
  const [DownloadableData, setDownloadableData] = useState("");
  const [Loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(0);
  const [failedData, setFailedData] = useState() as any;
  async function Generate() {
    setLoading(true);
    try {
      const response = await GetLiveData({
        type: supplierType,
        supplier,
        partnumbers,
      });
      setDownloadableData(response.csv_data);
      // console.log(response.failedData);
      setSuccessData(response.LiveData.body.length);
      setFailedData(response.failedData);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }
  const Download = () => {
    if (DownloadableData) {
      fileDownload(DownloadableData, "Filled_Template.csv");
    }
  };

  return (
    <div className="bg-gray-200 rounded-lg relative  flex flex-col justify-center items-center space-y-3 px-5 py-24 mt-9 ">
      {Loading && <Loader />}
      {DownloadableData ? (
        <div className="flex self-center">
          <div className="px-10">
            <button
              className="sidebar-color flex items-center space-x-7 text-white rounded-md font-poppins text-2xl px-16 py-2"
              onClick={Download}
            >
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
            </button>
          </div>


          <div className="">
            <p className="text-lg font-bold">
              SPNs uploaded: {partnumbers.length}
            </p>
            <p className="text-lg font-bold">
              Found: {successData}
            </p>
            <p className="text-lg font-bold">
              Not Found: {failedData.length}
            </p>
            {
              failedData?.length > 0 && <p className="py-4 text-red-600">
                Not Found List:
              </p>
            }

            <div>
              {failedData.map((data: any, i: any) =>
                <p className="ml-4" key={i}>{data}</p>
              )}
            </div>

          </div>


        </div>
      ) : (
        !Loading && (
          <>
            <p className="font-semibold text-sm text-black">
              Click to start generating a filled template
            </p>
            <button
              className="bg-green-500  flex items-center space-x-7 text-white rounded-md font-poppins text-2xl px-16 py-2"
              onClick={() => Generate()}
            >
              <p> Fill document out </p>
            </button>
          </>
        )
      )}
    </div>
  );
}

export default step4;
