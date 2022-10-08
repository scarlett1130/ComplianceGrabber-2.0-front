

export default function DataTable({ head, body }: any) {
  return (
    <>
      <div className="px-4 min-w-full sm:px-6 lg:px-8 relative ">
        <div className="sm:flex sm:items-center"></div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 sm:-mx-6  lg:-mx-8">
            <div className="inline-block  py-2 align-middle md:px-6 lg:px-8">
              <div className=" shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                {body.length >= 1 ? (
                  <table className=" inset-y-0 sm:min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        {head?.map((column: any, i: number) => (
                         
                           
                              <th
                               key={i}
                                scope="col"
                                className="py-3.5 pl-4 pr-3 sidebar-color text-left text-sm font-semibold text-white sm:pl-6"
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
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {cell}
                                </td>
                              )}
                            </>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-center text-xl py-4">
                    Data not found or temporarily unavailable :(
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
