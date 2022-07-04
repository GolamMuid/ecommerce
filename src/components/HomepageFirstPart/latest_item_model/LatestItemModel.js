import React from 'react'
import {
    LatestItemsProduct, LatestItemsProductImage, LatestItemsProductDetailContainer,
    LatestItemsProductName, LatestItemsProductsRating, LatestItemsProductPriceNew, LatestItemsProductPriceOld, ViewButton
} from './LatestItemModel.style'
import { Link } from 'react-router-dom'
import { BiStar } from 'react-icons/bi'
import { BsEye } from 'react-icons/bs'

function LatestItemModel(props) {
    return (

        <LatestItemsProduct>
            <LatestItemsProductImage>
                <img src={process.env.PUBLIC_URL + "/" + props.image} alt="" />
            </LatestItemsProductImage>
            <LatestItemsProductDetailContainer>
                <LatestItemsProductName>
                    {props.name}
                </LatestItemsProductName>
                <LatestItemsProductsRating>
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                </LatestItemsProductsRating>
                <LatestItemsProductPriceNew>
                    {props.currentPrice}
                    <LatestItemsProductPriceOld>
                        {props.oldPrice}
                    </LatestItemsProductPriceOld>
                </LatestItemsProductPriceNew>
            </LatestItemsProductDetailContainer>
            <ViewButton>
                <Link to='/detail'>
                    <BsEye />
                </Link>
            </ViewButton>
        </LatestItemsProduct>

    )
}

export default LatestItemModel