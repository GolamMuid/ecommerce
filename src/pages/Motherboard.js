import React from 'react'
import Footer from '../components/Footer/Footer'
import BlogPosts from '../components/HomepageFirstPart/blog_posts/BlogPosts'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'
import SearchAndCart from '../components/search_cart/SearchAndCart'

function Motherboard() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <PageTitle pageTitle="Motherboard" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/h510m.jpg"
                    oldPrice="$130" productName="Asus Prime H510E Motherboard" currentPrice="$120" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/rog-strix-b560.jpg"
                    oldPrice="$230" productName="Asus ROG Strix B560 Motherboard" currentPrice="$220" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/b560m.jpg"
                    oldPrice="$330" productName="Asus B560 Gaming Motherboard" currentPrice="$320" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/610m.jpg"
                    oldPrice="$150" productName="Asus 610m Motherboard" currentPrice="$140" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/b460m.jpg"
                    oldPrice="$330" productName="Asus B460m Gaming Motherboard" currentPrice="$300" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/b450-gaming.jpg"
                    oldPrice="$110" productName="MSI B450 Gaming Motherboard" currentPrice="$100" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/550m-mortar.jpg"
                    oldPrice="$120" productName="MSI 550m Mortar Motherboard" currentPrice="$110" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/x570.jpg"
                    oldPrice="$130" productName="MSI X570 Gaming Motherboard" currentPrice="$120" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/x470.jpg"
                    oldPrice="$220" productName="MSI X470 Motherboard" currentPrice="$210" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/z690.jpg"
                    oldPrice="$250" productName="MSI Force Z690 Wifi Motherboard" currentPrice="$240" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/h510m.jpg"
                    oldPrice="$200" productName="Asus Prime H510E Motherboard" currentPrice="$190" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/rog-strix-b560.jpg"
                    oldPrice="$180" productName="Asus ROG Strix B560 Motherboard" currentPrice="$150" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/b560m.jpg"
                    oldPrice="$140" productName="Asus B560 Gaming Motherboard" currentPrice="$130" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/610m.jpg"
                    oldPrice="$120" productName="Asus 610m Motherboard" currentPrice="$110" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/b460m.jpg"
                    oldPrice="$120" productName="Asus B460m Gaming Motherboard" currentPrice="$110" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/b450-gaming.jpg"
                    oldPrice="$130" productName="MSI B450 Gaming Motherboard" currentPrice="$120" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/550m-mortar.jpg"
                    oldPrice="$110" productName="MSI 550m Mortar Motherboard" currentPrice="$100" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/x570.jpg"
                    oldPrice="$220" productName="MSI X570 Gaming Motherboard" currentPrice="$210" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/x470.jpg"
                    oldPrice="$140" productName="MSI X470 Motherboard" currentPrice="$120" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/mobo/z690.jpg"
                    oldPrice="$150" productName="MSI Force Z690 Wifi Motherboard" currentPrice="$140" />

            </AllProductsContainer>
            <BlogPosts />
            <Footer />
        </>
    )
}

export default Motherboard