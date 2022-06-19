import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'

function Headphones() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <PageTitle pageTitle="Headphones" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/headphones/audio.jpg"
                    oldPrice="$50" productName="Audio Technica ATH M30X" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                    image="assets/images/headphones/sc.png"
                    oldPrice="$50" productName="SkullCandy Hesh" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage=""
                    image="assets/images/headphones/final.jpg"
                    oldPrice="$50" productName="Final Audio 8000" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/headphones/shure.jpg"
                    oldPrice="$50" productName="Shure Aonic 50" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/headphones/beats.jpg"
                    oldPrice="$50" productName="Beats by Dr. Dre" currentPrice="$40" />
            </AllProductsContainer>
        </>
    )
}

export default Headphones