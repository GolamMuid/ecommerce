import React from 'react'
import { WishlistCartCostContainer, WishlistCartCostItmeCount, WishlistCartCostItmes } from './WishlistCartCost.style'
import { BsTruck, BsHeart, BsBag } from 'react-icons/bs'

function WishlistCartCost() {
    return (
        <WishlistCartCostContainer>
            <WishlistCartCostItmes>
                <BsTruck />
            </WishlistCartCostItmes>
            <WishlistCartCostItmes>
                <BsHeart />
                <WishlistCartCostItmeCount> 5 </WishlistCartCostItmeCount>
            </WishlistCartCostItmes>
            <WishlistCartCostItmes>
                <BsBag />
                <WishlistCartCostItmeCount> 4 </WishlistCartCostItmeCount>
            </WishlistCartCostItmes>
            <WishlistCartCostItmes>
                $180.00
            </WishlistCartCostItmes>
        </WishlistCartCostContainer>
    )
}

export default WishlistCartCost