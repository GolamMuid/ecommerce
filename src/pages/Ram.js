import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'

function Ram() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <PageTitle pageTitle="Processors" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%"
                    image="assets/images/ram/transcend.jpg"
                    oldPrice="$50" productName="Transcend 8GB DDR4 RAM" currentPrice="$40" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/ram/antec-katana.jpg"
                    oldPrice="$50" productName="Antec Katana 8GB DDR4 RAM" currentPrice="$45" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/ram/antec-rgb.jpg"
                    oldPrice="$60" productName="Antec RGB 8GB DDR4 Gaming RAM" currentPrice="$50" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/ram/corsair-lpx.jpg"
                    oldPrice="$50" productName="Corsair LPX 8GB DDR4 RAM" currentPrice="$40" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/ram/corsair-rgb.jpg"
                    oldPrice="$50" productName="Corsair RGB 8GB DDR4 RAM" currentPrice="$40" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/ram/ktc-fury.jpg"
                    oldPrice="$50" productName="Kigston Fury 8GB DDR4 RAM" currentPrice="$40" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/ram/ktc-fury-beast.jpg"
                    oldPrice="$50" productName="Kingston Fury Beast 8GB DDR4 RAM" currentPrice="$40" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/ram/team-delta.jpg"
                    oldPrice="$50" productName="Team Delta 8GB DDR4 RAM" currentPrice="$40" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/ram/team-elite.jpeg"
                    oldPrice="$50" productName="Team Elite 8GB DDR4 RAM" currentPrice="$40" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/ram/corsair-white.jpg"
                    oldPrice="$50" productName="Transcend 8GB DDR4 RAM" currentPrice="$40" />


            </AllProductsContainer>
        </>
    )
}

export default Ram