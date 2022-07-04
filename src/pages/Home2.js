import React from 'react'
import Footer from '../components/Footer/Footer'
import BestRated from '../components/HomepageFirstPart/best_rated/BestRated'
import BlogPosts from '../components/HomepageFirstPart/blog_posts/BlogPosts'
import DailyNeeds from '../components/HomepageFirstPart/daily_needs/DailyNeeds'
import MultiCategory from '../components/HomepageFirstPart/multi_category/MultiCategory'
import RecentProducts from '../components/HomepageFirstPart/recent_products_latest_items/recent_products/RecentProducts'
import TopCategories from '../components/HomepageFirstPart/top_categories/TopCategories'
import SliderAndProducts from '../components/homepage_2nd_design/SliderAndProducts'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import SearchAndCart from '../components/search_cart/SearchAndCart'

function Home2() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <SliderAndProducts />
            <TopCategories />
            <RecentProducts />
            <BestRated />
            <DailyNeeds />
            <MultiCategory />
            <BlogPosts />
            <Footer />
        </>
    )
}

export default Home2