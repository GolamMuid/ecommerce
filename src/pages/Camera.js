import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'


function Camera() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <PageTitle pageTitle="Camera and Photography" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/camera/z50.jpg"
                    oldPrice="$50" productName="Nikon z50 DSLR Camera" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage=""
                    image="assets/images/camera/90d.jpg"
                    oldPrice="$50" productName="Canon 90d DSLR Camera" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/camera/z9.jpg"
                    oldPrice="$50" productName="Nikon Z9 Mirorless Camera" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                    image="assets/images/camera/700d.jpg"
                    oldPrice="$50" productName="Canon 700d DSLR Camera" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/camera/gopro.jpg"
                    oldPrice="$50" productName="Go Pro action Camera" currentPrice="$40" />

            </AllProductsContainer>

        </>
    )
}

export default Camera