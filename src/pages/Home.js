import React from "react";
import Navbar from "../components/Navbar/Navbar";
import BlankSpace from "../components/Other Components/BlankSpace";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/Other Components/ScrollToTop";
import CategoryAndBanners from "../components/HomepageFirstPart/CategoryAndBanners";
import TopCategories from "../components/HomepageFirstPart/top_categories/TopCategories";
import RecentProductsLatestItems from "../components/HomepageFirstPart/recent_products_latest_items/RecentProductsLatestItems";
import BestRated from "../components/HomepageFirstPart/best_rated/BestRated";
import DailyNeeds from "../components/HomepageFirstPart/daily_needs/DailyNeeds";
import BlogPosts from "../components/HomepageFirstPart/blog_posts/BlogPosts";
import ProductDefault from "../components/product_default/ProductDefault";

function Home() {
  return (
    <>
      <Navbar />
      <BlankSpace />
      <CategoryAndBanners />
      <TopCategories />
      <RecentProductsLatestItems />
      {/* <ProductDefault salePercentage="20%" image="assets/images/ps.jpg" oldPrice="$200" productName="Iphone 11" currentPrice="$200" /> */}
      <BestRated />
      <DailyNeeds />
      <BlogPosts />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
