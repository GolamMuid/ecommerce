import React from 'react'
import Footer from '../components/Footer/Footer'
import BlogPosts from '../components/HomepageFirstPart/blog_posts/BlogPosts'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'
import SearchAndCart from '../components/search_cart/SearchAndCart'

function Smartphones() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <PageTitle pageTitle="Smartphones and Tablets" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/smartphone/iphone.jpg"
                    oldPrice="$50" productName="iPhone 11 Pro" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                    image="assets/images/smartphone/note22.jpg"
                    oldPrice="$50" productName="Samsung Galazy Note 22" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage=""
                    image="assets/images/smartphone/op8.jpg"
                    oldPrice="$50" productName="One Plus Pro" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/smartphone/xiaomi11.jpg"
                    oldPrice="$50" productName="Xiaomi 11 Pro" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/smartphone/Realme8.jpg"
                    oldPrice="$50" productName="Realme 8 Pro" currentPrice="$40" />
            </AllProductsContainer>
            <BlogPosts />
            <Footer />
        </>

    )
}

export default Smartphones