import React from "react";

interface SupplierFoundCardProps {
  supplierName: string;
  LogoPath: string;
}

function SupplierFoundCard({ supplierName, LogoPath }: SupplierFoundCardProps) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg overflow-hidden">
      <p className=" text-2xl font-semibold">{supplierName}</p>
      <img src={LogoPath} className="w-full h-[350px]" />
    </div>
  );
}

export default SupplierFoundCard;
