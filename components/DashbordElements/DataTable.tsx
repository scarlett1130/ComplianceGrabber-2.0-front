import { ST } from "next/dist/shared/lib/utils";
import { useState } from "react";

export default function DataTable({ head, body }: any) {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center"></div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className=" shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      {head?.map((column: any) => (
                        <th
                          key={"tbh_vw" + column}
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          {column?.toString()}{" "}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {body?.map((row: any, index: any) => (
                      <tr
                        key={index + "tr"}
                        className={`rounded-xl text-lg ${
                          index % 2 !== 0 ? "bg-[#bce7e7]" : "bg-gray-200"
                        }`}
                      >
                        {row?.map((cell: any, cell_index: any) => (
                          <>
                            {cell && (
                              <td
                                key={cell_index + "td" + index}
                                className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                              >
                                {cell?.toString()}
                              </td>
                            )}
                          </>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
