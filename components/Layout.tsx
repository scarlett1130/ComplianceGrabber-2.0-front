import React from "react";
import type { NextPage } from "next";
import Sidebar from "./Sidebar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="lg:flex  relative ">
      <Sidebar />

      <div className="overflow-y-auto pt-5  flex-1">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
