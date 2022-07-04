import React from 'react'
import { CartViewWishlist, CartViewWishlistContainer, Category, CurrentPrice, ImageAndNameContainer, ImageContainer, NameAndPriceContainer, OldPrice, ProductName, ProductPriceContainer, ProductRating, RecentProductModelContainer } from './RecentProductModel.style'
import { BsEye, BsHeart, BsStar, BsCartPlus } from 'react-icons/bs'
import { FiRefreshCw } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function RecentProductModel(props) {
    return (
        <RecentProductModelContainer>
            <ImageAndNameContainer>
                <ImageContainer>
                    <img src={process.env.PUBLIC_URL + "/" + props.image} alt="" />
                </ImageContainer>
                <NameAndPriceContainer>
                    <Category>
                        {props.category}
                    </Category>
                    <ProductName>
                        {props.name}
                    </ProductName>
                    <ProductRating>
                        < BsStar />
                        < BsStar />
                        < BsStar />
                        < BsStar />
                        < BsStar />
                    </ProductRating>
                    <ProductPriceContainer>
                        <CurrentPrice>
                            {props.currentPrice}
                        </CurrentPrice>
                        <OldPrice>
                            {props.oldPrice}
                        </OldPrice>

                    </ProductPriceContainer>
                    <CartViewWishlistContainer>
                        <CartViewWishlist>
                            <BsHeart />
                        </CartViewWishlist>

                        <CartViewWishlist>
                            <Link to='/detail'>  <BsEye />  </Link>
                        </CartViewWishlist>

                        <CartViewWishlist>
                            <FiRefreshCw />
                        </CartViewWishlist>

                        <CartViewWishlist>
                            <BsCartPlus />
                        </CartViewWishlist>

                    </CartViewWishlistContainer>
                </NameAndPriceContainer>
            </ImageAndNameContainer>

        </RecentProductModelContainer>
    )
}

export default RecentProductModel