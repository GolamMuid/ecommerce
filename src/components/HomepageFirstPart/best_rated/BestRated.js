import React from 'react'
import { BestRatedContainer, BestRatedProductsContainer, BestRatedTitle, SeeMoreButton } from './BestRated.Style'
import ProductDefault from '../../product_default/ProductDefault'
// import NewProduct from '../../product_default/NewProduct'

function BestRated() {
    return (
        <BestRatedContainer>
            <BestRatedTitle>
                Best Rated
            </BestRatedTitle>
            <SeeMoreButton> See More </SeeMoreButton>
            <BestRatedProductsContainer>

                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Best Rated/drone.jpg"
                    oldPrice="$200" productName="Xiaomi Drone" currentPrice="$200" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/Best Rated/juice.jpg"
                    oldPrice="$15" productName="Tropicana Juice" currentPrice="$10" />

                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Best Rated/redmi.jpg"
                    oldPrice="$200" productName="Redmi Note 7" currentPrice="$150" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/Best Rated/paste.jpg"
                    oldPrice="$200" productName="Xiaomi Drone" currentPrice="$200" />
                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Best Rated/pendrive.jpeg"
                    oldPrice="$60" productName="Apacer 8GB Pendrive" currentPrice="$50" />

                <ProductDefault salePercentage="20%"
                    image="assets/images/Best Rated/perfume.jpg"
                    oldPrice="$25" productName="Denver hamilton Perfume" currentPrice="$20" />
                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Best Rated/sunglass.webp"
                    oldPrice="$100" productName="Ray-Ban Sunglass" currentPrice="$70" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/Best Rated/Treadmill.png"
                    oldPrice="$200" productName="Treadmil" currentPrice="$150" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/Best Rated/tv.jpg"
                    oldPrice="$300" productName="Sony Bravia 42inch TV" currentPrice="$200" />
                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Best Rated/mac.webp"
                    oldPrice="$700" productName="Macbook Air" currentPrice="$600" />

            </BestRatedProductsContainer>

        </BestRatedContainer>
    )
}

export default BestRated