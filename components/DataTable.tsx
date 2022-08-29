import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
interface TeableProps {
  head: any[];
  body: any[];
}
export default function DataTable({ head, body }: TeableProps) {
  const [Start, setStart] = useState(0);
  const [End, setEnd] = useState(10);
  const NextPage = () => {
    if (End + 10 < body?.length) {
      setStart(Start + 10);
      setEnd(End + 10);
    } else if (body?.length < 10) {
    } else {
      console.log(body.length);
      setStart(body?.length - 10);
      setEnd(body?.length);
    }
  };

  const PreviousPage = () => {
    console.log(Start, End);
    if (!(Start - 10 < 0)) {
      setStart(Start - 10);
      setEnd(End - 10);
    } else {
      setStart(0);
      setEnd(10);
    }
  };

  return (
    <div className="table-shadow bdr-8 ">
      <div
        className="btl-8 btr-8"
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          fontSize: "small",
        }}
      >
        <table
          style={{ width: "100%" }}
          className="relative rounded-lg overflow-hidden"
        >
          <thead className="">
            <tr className="text-[16px] font-bold bg-[#3665A7]  text-gray-100 ">
              <th className="p-5">Index</th>
              {head?.map((column) => (
                <th key={"tbh_vw" + column} className="p-5 ">
                  {" "}
                  {column?.toString()}{" "}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body?.slice(Start, End)?.map((row, index) => (
              <tr
                key={index + "tr"}
                className={`rounded-xl text-lg ${
                  index % 2 !== 0 ? "bg-[#92b7eb]" : "bg-gray-100"
                }`}
              >
                <td style={{ textAlign: "center" }} className="py-3">
                  {index + Start + 1}
                </td>
                {row?.map((cell: number, cell_index: number) => (
                  <td
                    key={cell_index + "td" + index}
                    className="text-center py-4"
                  >
                    {cell?.toString()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex space-x-16 justify-center mt-5">
        <button
          className={`  py-3 px-5 rounded-xl cursor-pointer ${
            Start === 0 || body?.length === 1
              ? "bg-blue-300 disabled"
              : "bg-blue-700"
          } `}
          onClick={PreviousPage}
        >
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <button
          className={`  py-3 px-5 rounded-xl cursor-pointer ${
            End === body?.length || body?.length < 10
              ? "bg-gray-100 disabled"
              : "bg-blue-700"
          }`}
          onClick={NextPage}
        >
          <ArrowRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
