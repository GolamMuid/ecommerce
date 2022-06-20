import React from 'react'
import Footer from '../components/Footer/Footer'
import BlogPosts from '../components/HomepageFirstPart/blog_posts/BlogPosts'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'
import SearchAndCart from '../components/search_cart/SearchAndCart'

function Personal() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <PageTitle pageTitle="Personal Care" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/Personal/perfume.jpg"
                    oldPrice="$50" productName="Denver Hamilton Perfume" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/Personal/bleu.jpg"
                    oldPrice="$50" productName="Bleu De Channel" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/Personal/color.jpg"
                    oldPrice="$50" productName="Color Me Body Spray" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/Personal/imperial.jpg"
                    oldPrice="$50" productName="Imperial Leather Soap" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/Personal/rexona.jpg"
                    oldPrice="$50" productName="Rexona Deo" currentPrice="$40" />

            </AllProductsContainer>
            <BlogPosts />
            <Footer />
        </>
    )
}

export default Personal