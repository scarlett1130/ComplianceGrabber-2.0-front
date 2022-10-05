import { useState } from "react";

export default function Example({ head, body, step = 10, Export = null }: any) {
  const [Start, setStart] = useState(0);
  const [End, setEnd] = useState(step);
  const NextPage = () => {
    if (End + step < body?.length) {
      setStart(Start + step);
      setEnd(End + step);
    } else if (body?.length < step) {
    } else {
      console.log(body.length);
      setStart(body?.length - step);
      setEnd(body?.length);
    }
  };

  const PreviousPage = () => {
    console.log(Start, End);
    if (!(Start - step < 0)) {
      setStart(Start - step);
      setEnd(End - step);
    } else {
      setStart(0);
      setEnd(step);
    }
  };
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center"></div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
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
                    {body?.slice(Start, End)?.map((row: any, index: any) => (
                      <tr
                        key={index + "tr"}
                        className={`rounded-xl text-lg ${
                          index % 2 !== 0 ? "bg-[#bce7e7]" : "bg-gray-200"
                        }`}
                      >
                        {row?.map((cell: any, cell_index: any) => (
                          <td
                            key={cell_index + "td" + index}
                            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                          >
                            {cell?.toString()}
                          </td>
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

      {body?.length > 10 && (
        <div className="flex space-x-16 justify-center mt-5">
          <button
            className={`  py-3 px-5 font-semibold rounded-xl cursor-pointer ${
              Start === 0 || body?.length === 1
                ? "bg-gray-200 disabled"
                : "bg-gradient-to-t from-[#0ec4c1] to-[#3f7599]"
            } `}
            onClick={PreviousPage}
          >
            {"<< back"}
          </button>
          <button
            className={`  py-3 px-5 font-semibold rounded-xl cursor-pointer ${
              End === body?.length || body?.length < step
                ? "bg-gray-200 disabled"
                : "bg-gradient-to-t from-[#0ec4c1] to-[#3f7599]"
            }`}
            onClick={NextPage}
          >
            {"next >>"}
          </button>
        </div>
      )}
    </>
  );
}
