import React from 'react'
import { AddToCartButton, NewContainer, NewText, ProductDefaultContainer, ProductImage, SalePercentageContainer, WishlistViewCompare, WishlistViewCompareContainer, ProductNameRatingPriceContainer, ProductRating, ProductOldPrice, ProductName, ProductCurrentPrice } from './ProductDefault.style'
import { BsEye, BsHeart, BsStar } from 'react-icons/bs'
import { FiRefreshCw } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ProductDefault(props) {
    return (
        <ProductDefaultContainer>
            {props.isNew &&
                <NewContainer>
                    <NewText>
                        New
                    </NewText>
                </NewContainer>
            }
            {
                props.isSalePercentage &&
                <SalePercentageContainer>
                    {props.salePercentage}
                </SalePercentageContainer>
            }
            <WishlistViewCompareContainer>
                <WishlistViewCompare title='Add to Wishlist'>
                    <BsHeart />
                </WishlistViewCompare>
                <WishlistViewCompare title='View Product'>
                    <Link to="/detail">  <BsEye /> </Link>
                </WishlistViewCompare>
                <WishlistViewCompare title='Compare'>
                    <FiRefreshCw />
                </WishlistViewCompare>
            </WishlistViewCompareContainer>
            <ProductImage>
                {/* <img
                    src={`${process.env.PUBLIC_URL}/assets/images/ps.jpg`}
                    alt=""
                /> */}
                <img src={process.env.PUBLIC_URL + "/" + props.image} alt="" />
            </ProductImage>
            <AddToCartButton> Add To Cart </AddToCartButton>
            <ProductNameRatingPriceContainer>
                <ProductRating>
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </ProductRating>
                <ProductOldPrice>
                    {props.oldPrice}
                </ProductOldPrice>
                <ProductName>
                    {props.productName}
                </ProductName>
                <ProductCurrentPrice>
                    {props.currentPrice}
                </ProductCurrentPrice>
            </ProductNameRatingPriceContainer>
        </ProductDefaultContainer>
    )
}

export default ProductDefault