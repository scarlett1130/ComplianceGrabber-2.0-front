import type { NextPage } from "next";
import Banner from "../components/Banner";
import FeatureSection from "../components/FeatureSection";
import Navbar from "../components/Navbar";
import SuppliersSwiper from "../components/SuppliersSwiper";
import TutorialSection from "../components/TutorialSection";

const Home: NextPage = () => {
  return (
    <>
      <div className="relative min-h-[800px] ">
        <Navbar />
        <Banner />
      </div>
      <SuppliersSwiper />
      <FeatureSection />
      <TutorialSection />
    </>
  );
};

export default Home;
