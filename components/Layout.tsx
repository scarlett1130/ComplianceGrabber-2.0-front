import React from "react";
import type { NextPage } from "next";
import Sidebar from "./Sidebar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-9">
      <Sidebar />
      <div className="col-span-8 overflow-y-auto pt-5 ">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
