import type { NextPage } from "next";
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
import Faq from "../components/Faq";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
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
      <Faq />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
