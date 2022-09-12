import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  quantity: number;
  src: string;
}

function StatCard({ title, quantity, src }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-md  bg-white border shadow-lg text-center p-4 cursor-pointer"
    >
      <img src={`/${src}`} className="w-16 h-16" />
      <h1 className="font-poppins text-lg">{title}</h1>
      <p className="text-4xl font-bold mt-5">{quantity}</p>
    </motion.div>
  );
}

export default StatCard;
