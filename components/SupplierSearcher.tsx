import { useState } from "react";
import DataTable from "./DataTable";
import fileDownload from "js-file-download";
import getLiveManufacturerData from "../utils/GetLiveData";
interface LiveDataType {
  head: any[];
  body: any[];
}

interface getDataProps {
  supplier: string;
  partnumbers: string[];
}
interface SupplierSearchProps {
  suppliers: string[];
  getLiveSupplierData: (arg: getDataProps) => Promise<any>;
}
const SupplierSearcher = ({
  suppliers,
  getLiveSupplierData,
}: SupplierSearchProps) => {
  const [Partnumbers, setPartnumbers] = useState("");
  const [Loading, setLoading] = useState(false);
  const [LiveData, setLiveData] = useState<any>(null);
  const [DownloadableData, setDownloadableData] = useState<any>(null);
  const [supplier, setsupplier] = useState("");
  const [IsSearched, setIsSearched] = useState(false);
  const GetLiveData = async () => {
    setIsSearched(false);
    setLiveData(null);
    setLoading(true);
    if (!Partnumbers) return;
    const partnumbers = Partnumbers.split(",");
    try {
      const response = await getLiveSupplierData({
        supplier,
        partnumbers,
      });
      setDownloadableData(response?.csv_data);
      setLiveData(response?.LiveData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
    setIsSearched(true);
  };
  const Export = () => {
    if (DownloadableData) {
      fileDownload(DownloadableData, "Searched_Data.csv");
    }
  };
  return (
    <div className="px-2 md:px-12 space-y-2">
      <div className="space-y-2 lg:flex lg:space-x-4 items-center relative  w-full ">
        <select
          className="w-full border-[3px] lg:max-w-[250px]  border-[#079290] px-2 bg-[#079290] shadow-lg font-mono text-lg  cursor-pointer rounded-lg hover:rounded-md text-white   py-3 outline-none"
          onChange={(e) => {
            setsupplier(e.target.value);
          }}
        >
          <option value="10">Select a Supplier</option>

          {suppliers.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="flex border-[3px] w-full  items-center border-[#079290] shadow-md rounded-lg  overflow-hidden flex-1 px-2">
          <img src="/search.svg" className="w-6 h-6" />
          <input
            className="p-2 outline-none w-full text-lg"
            placeholder="Search by PartNumber"
            onChange={(e) => setPartnumbers(e.target.value)}
          />
        </div>

        <button
          className="px-9 py-3 rounded-xl w-full lg:max-w-[150px] bg-[#079290] hover:rounded-lg shadow-md text-white text-lg  font-semibold"
          onClick={GetLiveData}
        >
          Search
        </button>
      </div>

      <div className="w-full  ">
        {LiveData !== null && (
          <div className="mt-16">
            <DataTable
              head={LiveData?.head}
              body={LiveData?.body}
              Export={Export}
            />
          </div>
        )}
        {Loading && (
          <div className="mt-96 w-full grid grid-cols-1 place-items-center">
            <img src="/ring.gif" />
          </div>
        )}
        {IsSearched && LiveData === null && <div>No Data is Found</div>}
      </div>
    </div>
  );
};

export default SupplierSearcher;
