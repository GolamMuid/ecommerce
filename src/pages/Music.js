import React from 'react'
import Footer from '../components/Footer/Footer'
import BlogPosts from '../components/HomepageFirstPart/blog_posts/BlogPosts'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'
import SearchAndCart from '../components/search_cart/SearchAndCart'

function Music() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <PageTitle pageTitle="Camera and Photography" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/music/signature.jpeg"
                    oldPrice="$50" productName="Signature Accousitic Guitar" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                    image="assets/images/music/gibson.jpg"
                    oldPrice="$50" productName="Gibson Electrtic Guitar" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage=""
                    image="assets/images/music/godin.jpg"
                    oldPrice="$50" productName="Godin Bass Guitar" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/music/roland.jpg"
                    oldPrice="$50" productName="Roland Drum Set" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/music/marshall.jpg"
                    oldPrice="$50" productName="Marshall Guitar Amplifier" currentPrice="$40" />
            </AllProductsContainer>
            <BlogPosts />
            <Footer />
        </>
    )
}

export default Music