import React from 'react'
import Footer from '../components/Footer/Footer'
import BlogPosts from '../components/HomepageFirstPart/blog_posts/BlogPosts'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'
import SearchAndCart from '../components/search_cart/SearchAndCart'


function Clothing() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <PageTitle pageTitle="Clothing" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/clothing/formal.jpg"
                    oldPrice="$50" productName="Formal Shirt for Men" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                    image="assets/images/clothing/denim.png"
                    oldPrice="$50" productName="Denim pant for Men" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/clothing/jacket.jpg"
                    oldPrice="$50" productName="Winter Jacket for Men" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/clothing/woman-dress.jpg"
                    oldPrice="$50" productName="White and Pink Woman Dress" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="rue"
                    image="assets/images/clothing/denim-shirt.jpg"
                    oldPrice="$50" productName="Denim Shirt for Men" currentPrice="$40" />
            </AllProductsContainer>
            <BlogPosts />
            <Footer />

        </>
    )
}

export default Clothing