import React from 'react'
import { LatestItemsContainer, LatestItemsProduct, LatestItemsProductDetailContainer, LatestItemsProductImage, LatestItemsProductsContainer, LatestItemsProductName, LatestItemsProductsRating, LatestItemsTitle, LatestItemsProductPriceNew, LatestItemsProductPriceOld, SeeMoreButton } from './LatestItems.style'
import { BiStar } from 'react-icons/bi'
import LatestItemModel from '../../latest_item_model/LatestItemModel'

function LatestItems() {
    return (
        <LatestItemsContainer>
            <LatestItemsTitle>
                Latest Items
            </LatestItemsTitle>
            {/* <SeeMoreButton> See More </SeeMoreButton> */}
            <LatestItemsProductsContainer>
                <LatestItemModel
                    image="assets/images/Latest Items/Jacket.png"
                    name="Winter Jacket"
                    currentPrice="$199"
                    oldPrice="$299" />
                <LatestItemModel
                    image="assets/images/Latest Items/bat.png"
                    name="Kookaburra Bat"
                    currentPrice="$199"
                    oldPrice="$299" />
                <LatestItemModel
                    image="assets/images/Latest Items/badminton.png"
                    name="Yonex Racket"
                    currentPrice="$199"
                    oldPrice="$299" />
                {/* <LatestItemModel
                    image="assets/images/Latest Items/Jacket.png"
                    name="Winter Jacket"
                    currentPrice="$199"
                    oldPrice="$299" />
                <LatestItemModel
                    image="assets/images/Latest Items/badminton.png"
                    name="Yonex Racket"
                    currentPrice="$199"
                    oldPrice="$299" /> */}
            </LatestItemsProductsContainer>

        </LatestItemsContainer>
    )
}

export default LatestItems