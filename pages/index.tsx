import type { NextPage } from "next";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
