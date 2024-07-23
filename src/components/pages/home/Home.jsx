import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { Navbar } from "./navbar/Navbar";
import Intro from "./sections/Intro";
import FlashSales from "./sections/FlashSales";
import Category from "./sections/Category";
import BestSellingProduct from "./sections/BestSellingProduct";
import MusicAds from "./sections/MusicAds";
import ExploreOurProduct from "./sections/ExploreOurProduct";
import NewArrival from "./sections/NewArrival";
import Tips from "./sections/Tips";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="w-full p-4 m-auto  md:w-[100%] lg:w-[80%]">
        <Navbar />
      </div>
      <Intro />
      <div className="w-full p-4 m-auto  md:w-[100%] lg:w-[80%] ">
        <FlashSales />
        <Category />
        <BestSellingProduct />
        <MusicAds />
        <ExploreOurProduct />
        <NewArrival />
        <Tips />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
