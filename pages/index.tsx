import type { NextPage } from "next";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import SuppliersSwiper from "../components/SuppliersSwiper";

const Home: NextPage = () => {
  return (
    <>
      <div className="relative min-h-[800px] ">
        <Navbar />
        <Banner />
      </div>
      <SuppliersSwiper />
    </>
  );
};

export default Home;
