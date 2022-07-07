import React, { useState, useEffect } from "react";
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
import MultiCategory from "../components/HomepageFirstPart/multi_category/MultiCategory";
import DiscountModal from "../components/discount_modal/DiscountModal";
import CartWindow from "../components/cart_window_product_model/CartWindow";

function Home() {

  const [closed, setClosed] = useState(false) //State for making the modal visible and invisible

  const [visited, setVisited] = useState(
    JSON.parse(localStorage.getItem('has-visited')) || false //state for setting the visit
  )

  const handleToggle = () => {
    localStorage.setItem('has-visited', JSON.stringify(!visited));
    setVisited(!visited);     // Toggling visit state
    setClosed(true);          //closing the modal
  }

  useEffect(() => {
    localStorage.setItem('has-visited', JSON.stringify(visited));
  }, [visited]);


  return (
    <>
      {!visited && <DiscountModal handleToggle={handleToggle} closed={closed} />}
      <CartWindow />
      <Navbar />
      <BlankSpace />
      <CategoryAndBanners />
      <TopCategories />
      <RecentProductsLatestItems />
      <BestRated />
      <DailyNeeds />
      <MultiCategory />
      <BlogPosts />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
