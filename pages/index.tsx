import type { NextPage } from "next";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen">
      <Banner />
    </div>
  );
};

export default Home;
