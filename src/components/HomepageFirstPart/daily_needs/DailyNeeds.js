import React from 'react'
import { DailyNeedsProductsContainer, DailyNeedsSectionContainer, DailyNeedsSectionTitle, DailyNeedsTitle, SeeMoreButton } from './DailyNeeds.style'
import ProductDefault from '../../product_default/ProductDefault'

function DailyNeeds() {
    return (
        <DailyNeedsSectionContainer>
            <DailyNeedsSectionTitle>
                Daily Needs
            </DailyNeedsSectionTitle>

            <DailyNeedsTitle>
                Fresh Vegetables
            </DailyNeedsTitle>

            <DailyNeedsProductsContainer>

                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Daily Needs/onion.jpg"
                    oldPrice="$30" productName="Onion" currentPrice="$20" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/Daily Needs/garlic.jpg"
                    oldPrice="$30" productName="Garlic" currentPrice="$0" />
                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Daily Needs/lettuce.jpg"
                    oldPrice="$30" productName="Lettuce" currentPrice="$20" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/Daily Needs/spinach.jpg"
                    oldPrice="$30" productName="Spinach" currentPrice="$20" />
                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Daily Needs/onion.jpg"
                    oldPrice="$30" productName="Onion" currentPrice="$20" />

            </DailyNeedsProductsContainer>

            <DailyNeedsTitle>
                Fish and Meat
            </DailyNeedsTitle>

            <DailyNeedsProductsContainer>
                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Daily Needs/beef.jpg"
                    oldPrice="$30" productName="Beef" currentPrice="$20" />
                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Daily Needs/fish.jpg"
                    oldPrice="$30" productName="Fish" currentPrice="$0" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/Daily Needs/chicken.jpg"
                    oldPrice="$30" productName="Chicken" currentPrice="$20" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/Daily Needs/mutton.jpg"
                    oldPrice="$30" productName="Mutton" currentPrice="$20" />
                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Daily Needs/rupchanda.jpg"
                    oldPrice="$30" productName="Rupchanda" currentPrice="$20" />
            </DailyNeedsProductsContainer>


            <DailyNeedsTitle>
                Fruits
            </DailyNeedsTitle>

            <DailyNeedsProductsContainer>
                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Daily Needs/apple.jpg"
                    oldPrice="$30" productName="Apple" currentPrice="$20" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/Daily Needs/banana.jpg"
                    oldPrice="$30" productName="Banana" currentPrice="$0" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/Daily Needs/grape.jpg"
                    oldPrice="$30" productName="Grapes" currentPrice="$20" />
                <ProductDefault salePercentage="20%" isNew="true" isSalePercentage="true"
                    image="assets/images/Daily Needs/mango.jpg"
                    oldPrice="$30" productName="Mango" currentPrice="$20" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/Daily Needs/orange.jpg"
                    oldPrice="$30" productName="Orange" currentPrice="$20" />
            </DailyNeedsProductsContainer>


            <SeeMoreButton> See More </SeeMoreButton>
        </DailyNeedsSectionContainer>
    )
}

export default DailyNeeds