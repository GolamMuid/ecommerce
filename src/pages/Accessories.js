import React from 'react'
import Footer from '../components/Footer/Footer'
import BlogPosts from '../components/HomepageFirstPart/blog_posts/BlogPosts'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'
import SearchAndCart from '../components/search_cart/SearchAndCart'

function Accessories() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <PageTitle pageTitle="Camera and Photography" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/accessories/cap.jpg"
                    oldPrice="$50" productName="Barcelona Cap" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                    image="assets/images/accessories/fossil.jpg"
                    oldPrice="$50" productName="Fossil Men Bracelet" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage=""
                    image="assets/images/accessories/rayban.jpg"
                    oldPrice="$50" productName="Rayban Sunglasses" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/accessories/rolex.jpg"
                    oldPrice="$50" productName="Rolex Golden Watch" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/accessories/earring.jpg"
                    oldPrice="$50" productName="Long Earrings" currentPrice="$40" />
            </AllProductsContainer>
            <BlogPosts />
            <Footer />
        </>
    )
}

export default Accessories