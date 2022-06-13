import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Text from "../components/Other Components/Text";
import BlankSpace from "../components/Other Components/BlankSpace";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/Other Components/ScrollToTop";
import CategoryAndBanners from "../components/HomepageFirstPart/CategoryAndBanners";
import Slider from "../components/HomepageFirstPart/SearchAndBanner/Slider/Slider";
import TopCategories from "../components/top categories/TopCategories";
import RecentProductsLatestItems from "../components/HomepageFirstPart/recent_products_latest_items/RecentProductsLatestItems";

function Home() {
  return (
    <>
      <Navbar />
      <BlankSpace />
      <CategoryAndBanners />
      <TopCategories />
      <RecentProductsLatestItems />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
