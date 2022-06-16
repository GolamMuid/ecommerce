import React from 'react'
import { LatestItemsContainer, LatestItemsProduct, LatestItemsProductDetailContainer, LatestItemsProductImage, LatestItemsProductsContainer, LatestItemsProductName, LatestItemsProductsRating, LatestItemsTitle, LatestItemsProductPriceNew, LatestItemsProductPriceOld, SeeMoreButton } from './LatestItems.style'
import { BiStar } from 'react-icons/bi'

function LatestItems() {
    return (
        <LatestItemsContainer>
            <LatestItemsTitle>
                Latest Items
            </LatestItemsTitle>
            <SeeMoreButton> See More </SeeMoreButton>
            <LatestItemsProductsContainer>
                <LatestItemsProduct>
                    <LatestItemsProductImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Latest Items/ps.png`}
                            alt=""
                        />
                    </LatestItemsProductImage>
                    <LatestItemsProductDetailContainer>
                        <LatestItemsProductName>
                            Playstation 4
                        </LatestItemsProductName>
                        <LatestItemsProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </LatestItemsProductsRating>
                        <LatestItemsProductPriceNew>
                            $199
                            <LatestItemsProductPriceOld>
                                $249
                            </LatestItemsProductPriceOld>
                        </LatestItemsProductPriceNew>
                    </LatestItemsProductDetailContainer>

                </LatestItemsProduct>
                <LatestItemsProduct>
                    <LatestItemsProductImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Latest Items/Jacket.png`}
                            alt=""
                        />
                    </LatestItemsProductImage>
                    <LatestItemsProductDetailContainer>
                        <LatestItemsProductName>
                            Winter Jacket
                        </LatestItemsProductName>
                        <LatestItemsProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </LatestItemsProductsRating>
                        <LatestItemsProductPriceNew>
                            $199
                            <LatestItemsProductPriceOld>
                                $299
                            </LatestItemsProductPriceOld>
                        </LatestItemsProductPriceNew>
                    </LatestItemsProductDetailContainer>

                </LatestItemsProduct>
                <LatestItemsProduct>
                    <LatestItemsProductImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Latest Items/bat.png`}
                            alt=""
                        />
                    </LatestItemsProductImage>
                    <LatestItemsProductDetailContainer>
                        <LatestItemsProductName>
                            Kookaburra Bat
                        </LatestItemsProductName>
                        <LatestItemsProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </LatestItemsProductsRating>
                        <LatestItemsProductPriceNew>
                            $199
                            <LatestItemsProductPriceOld>
                                $299
                            </LatestItemsProductPriceOld>
                        </LatestItemsProductPriceNew>
                    </LatestItemsProductDetailContainer>

                </LatestItemsProduct>
                <LatestItemsProduct>
                    <LatestItemsProductImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Latest Items/badminton.png`}
                            alt=""
                        />
                    </LatestItemsProductImage>
                    <LatestItemsProductDetailContainer>
                        <LatestItemsProductName>
                            Yonex Racket
                        </LatestItemsProductName>
                        <LatestItemsProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </LatestItemsProductsRating>
                        <LatestItemsProductPriceNew>
                            $199
                            <LatestItemsProductPriceOld>
                                $299
                            </LatestItemsProductPriceOld>
                        </LatestItemsProductPriceNew>
                    </LatestItemsProductDetailContainer>

                </LatestItemsProduct>
            </LatestItemsProductsContainer>

        </LatestItemsContainer>
    )
}

export default LatestItems