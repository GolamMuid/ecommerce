import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'

function Accessories() {
    return (
        <>
            <Navbar />
            <BlankSpace />
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
        </>
    )
}

export default Accessories