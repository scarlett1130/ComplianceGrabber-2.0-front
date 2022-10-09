export default function DataTable({ head, body }: any) {
  return (
    <div className="px-4 min-w-full sm:px-6 lg:px-8 relative  ">
      {body.length >= 1 ? (
        <div className="">
          {body.map((col: any, i: number) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center border font-poppins tracking-wider border-gray-300 py-2 space-y-2 rounded-md my-4"
            >
              {col.map((item: any, i: number) => (
                <div
                  key={i}
                  className="container mx-auto   flex w-full space-x-3"
                >
                  <div className="flex items-end justify-end  w-full">
                    {head[i]}:
                  </div>
                  <div className="flex justify-start  w-full overflow-hidden">
                    {item}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl py-4">
          Data not found or temporarily unavailable :(
        </p>
      )}
    </div>
  );
}
