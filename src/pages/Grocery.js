import React from 'react'
import Footer from '../components/Footer/Footer'
import BlogPosts from '../components/HomepageFirstPart/blog_posts/BlogPosts'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'
import SearchAndCart from '../components/search_cart/SearchAndCart'


function Grocery() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <PageTitle pageTitle="Groceries" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/grocery/oil.jpg"
                    oldPrice="$50" productName="Soyabean oil 5 litre" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/grocery/sugar.jpg"
                    oldPrice="$50" productName="Teer Sugar 1kg" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/grocery/sauce.jpg"
                    oldPrice="$50" productName="Pran Sauce 400gm" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/grocery/chili.jpg"
                    oldPrice="$50" productName="BD Chili Powder" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/grocery/salt.jpg"
                    oldPrice="$50" productName="Molla Super Salt" currentPrice="$40" />
            </AllProductsContainer>
            <BlogPosts />
            <Footer />
        </>
    )
}

export default Grocery