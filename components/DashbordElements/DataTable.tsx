import { HeartIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { ceil } from "lodash";
import { count } from "console";

export default function DataTable({ head, body }: any) {
  // const [current, setCurrent] = useState(0);
  // const displayCount = 2;
  // const [totalCount, setTotalCount] = useState(body.length);
  // const [totalPage, setTotalPage] = useState(ceil(body.length / displayCount))

  // async function back() {
  //   if (current > 0) {
  //     setCurrent(current - 1);
  //   }
  // }

  // async function next() {
  //   if (current < totalPage - 1) {
  //     setCurrent(current + 1);
  //   }
  // }

  return (
    <div className="px-4 min-w-full sm:px-6 lg:px-8 relative">
      <div className="text-center py-2 font-medium">{body.length && `Total Rows : ${body.length}`}</div>
      {body.length >= 1 ? (
        <div className="">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg" style={{ margin: "auto", maxWidth: `${window.innerWidth / 5 * 4}px` }}>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="tablebar-color text-white text-base h-20 bg-gray-50 ">
                <tr>
                  <th scope="col" className="py-3 px-6 text-center">
                    Index
                  </th>
                  {
                    head.map((data: string, i: number) =>
                      <th key={i} scope="col" className=" text-center py-3 px-6">
                        {data}
                      </th>
                    )
                  }


                </tr>
              </thead>
              <tbody>
                {
                  body.map((col: any, i: number) => /*i >= displayCount * current && i < displayCount * (current + 1) &&*/
                    <tr key={i} className="border-b hover:bg-odd-color bg-gray-50">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 text-center">
                        {i + 1}
                      </th>
                      {

                        col.map((item: any, j: number) =>
                          <td key={j} className="py-4 px-6 font-medium text-gray-900 text-center">
                            {item}
                          </td>
                        )
                      }
                    </tr>
                  )
                }

              </tbody>
            </table>
          </div>
          {/* <div className="flex justify-center gap-16 py-10">
            <div className="cursor-pointer" onClick={back}>back</div>
            <div className="cursor-pointer" onClick={next}>next</div>
          </div> */}
        </div>
      ) : (
        <p className="text-center text-xl py-4">
          Data not found or temporarily unavailable :(
        </p>
      )}
    </div>
  );
}
