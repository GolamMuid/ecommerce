import React from 'react'
import Footer from '../components/Footer/Footer'
import BlogPosts from '../components/HomepageFirstPart/blog_posts/BlogPosts'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'
import SearchAndCart from '../components/search_cart/SearchAndCart'

function Tv() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <PageTitle pageTitle="Tv and SmartBox" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/tv/op.jpg"
                    oldPrice="$50" productName="OnePlus TV 42 inch" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                    image="assets/images/tv/sony.jpg"
                    oldPrice="$50" productName="Sony Smart TV 32 inch " currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage=""
                    image="assets/images/tv/mi.jpg"
                    oldPrice="$50" productName="Xiaomi MI TV 56inch 4K" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/tv/mi-box.jpeg"
                    oldPrice="$50" productName="Xiaomi TV Box" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/tv/apple.jpg"
                    oldPrice="$50" productName="Apple Smart TV box " currentPrice="$40" />
            </AllProductsContainer>
            <BlogPosts />
            <Footer />
        </>
    )
}

export default Tv