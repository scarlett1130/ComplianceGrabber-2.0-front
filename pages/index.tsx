import type { NextPage } from "next";
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
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
      <ContactSection />
    </>
  );
};

export default Home;
