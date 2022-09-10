import React from "react";

interface CardProps {
  title: string;
  quantity: number;
}

function StatCard({ title, quantity }: CardProps) {
  return (
    <div className="rounded-md  bg-white border border-gray-400 text-center p-4 cursor-pointer">
      <h1 className="font-poppins text-lg">{title}</h1>
      <p className="text-4xl font-bold mt-5">{quantity}</p>
    </div>
  );
}

export default StatCard;
