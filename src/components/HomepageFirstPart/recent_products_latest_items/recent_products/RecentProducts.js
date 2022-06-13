import React from 'react'
import { RecentProductsCategory, RecentProductsContainer, RecentProductsDetailContainer, RecentProductsImage, RecentProductsItem, RecentProductsItemContainer, RecentProductsName, RecentProductsPriceNew, RecentProductsPriceOld, RecentProductsRating, RecentProductsTitle, SeeMoreButton } from './RecentProducts.style'
import { BiStar } from 'react-icons/bi'

function RecentProducts() {
    return (
        <RecentProductsContainer>
            <RecentProductsTitle>
                Recently Viewed Products
            </RecentProductsTitle>
            <RecentProductsItemContainer>
                <RecentProductsItem>
                    <RecentProductsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Recent Products/bag.png`}
                            alt=""
                        />
                    </RecentProductsImage>
                    <RecentProductsDetailContainer>
                        <RecentProductsCategory>
                            Personal
                        </RecentProductsCategory>
                        <RecentProductsName>
                            Premium School Bag
                        </RecentProductsName>
                        <RecentProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </RecentProductsRating>
                        <RecentProductsPriceNew>
                            $199.99
                            <RecentProductsPriceOld>
                                $299.99
                            </RecentProductsPriceOld>
                        </RecentProductsPriceNew>

                    </RecentProductsDetailContainer>
                </RecentProductsItem>
                <RecentProductsItem>
                    <RecentProductsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Recent Products/denim.png`}
                            alt=""
                        />
                    </RecentProductsImage>
                    <RecentProductsDetailContainer>
                        <RecentProductsCategory>
                            Clothing
                        </RecentProductsCategory>
                        <RecentProductsName>
                            Premium Denim Pant
                        </RecentProductsName>
                        <RecentProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </RecentProductsRating>
                        <RecentProductsPriceNew>
                            $79.99
                            <RecentProductsPriceOld>
                                $89.99
                            </RecentProductsPriceOld>
                        </RecentProductsPriceNew>

                    </RecentProductsDetailContainer>
                </RecentProductsItem>
                <RecentProductsItem>
                    <RecentProductsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Recent Products/macbook.png`}
                            alt=""
                        />
                    </RecentProductsImage>
                    <RecentProductsDetailContainer>
                        <RecentProductsCategory>
                            Tech
                        </RecentProductsCategory>
                        <RecentProductsName>
                            Apple Macbook Pro
                        </RecentProductsName>
                        <RecentProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </RecentProductsRating>
                        <RecentProductsPriceNew>
                            $599.99
                            <RecentProductsPriceOld>
                                $699.99
                            </RecentProductsPriceOld>
                        </RecentProductsPriceNew>

                    </RecentProductsDetailContainer>
                </RecentProductsItem>
                <RecentProductsItem>
                    <RecentProductsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Recent Products/chair.png`}
                            alt=""
                        />
                    </RecentProductsImage>
                    <RecentProductsDetailContainer>
                        <RecentProductsCategory>
                            furniture
                        </RecentProductsCategory>
                        <RecentProductsName>
                            Ergonimic Office Chair
                        </RecentProductsName>
                        <RecentProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </RecentProductsRating>
                        <RecentProductsPriceNew>
                            $599.99
                            <RecentProductsPriceOld>
                                $699.99
                            </RecentProductsPriceOld>
                        </RecentProductsPriceNew>

                    </RecentProductsDetailContainer>
                </RecentProductsItem>
                <RecentProductsItem>
                    <RecentProductsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Recent Products/watch.png`}
                            alt=""
                        />
                    </RecentProductsImage>
                    <RecentProductsDetailContainer>
                        <RecentProductsCategory>
                            Tech
                        </RecentProductsCategory>
                        <RecentProductsName>
                            Timezone Wrist Watch
                        </RecentProductsName>
                        <RecentProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </RecentProductsRating>
                        <RecentProductsPriceNew>
                            $199.99
                            <RecentProductsPriceOld>
                                $219.99
                            </RecentProductsPriceOld>
                        </RecentProductsPriceNew>

                    </RecentProductsDetailContainer>
                </RecentProductsItem>
                <RecentProductsItem>
                    <RecentProductsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Recent Products/ram.png`}
                            alt=""
                        />
                    </RecentProductsImage>
                    <RecentProductsDetailContainer>
                        <RecentProductsCategory>
                            Tech
                        </RecentProductsCategory>
                        <RecentProductsName>
                            Corsair LPX 8GB ram
                        </RecentProductsName>
                        <RecentProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </RecentProductsRating>
                        <RecentProductsPriceNew>
                            $59.99
                            <RecentProductsPriceOld>
                                $69.99
                            </RecentProductsPriceOld>
                        </RecentProductsPriceNew>

                    </RecentProductsDetailContainer>
                </RecentProductsItem>
                <RecentProductsItem>
                    <RecentProductsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Recent Products/jersey.png`}
                            alt=""
                        />
                    </RecentProductsImage>
                    <RecentProductsDetailContainer>
                        <RecentProductsCategory>
                            Clothing
                        </RecentProductsCategory>
                        <RecentProductsName>
                            Brazil Football Jersey
                        </RecentProductsName>
                        <RecentProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </RecentProductsRating>
                        <RecentProductsPriceNew>
                            $29.99
                            <RecentProductsPriceOld>
                                $39.99
                            </RecentProductsPriceOld>
                        </RecentProductsPriceNew>

                    </RecentProductsDetailContainer>
                </RecentProductsItem>
                <RecentProductsItem>
                    <RecentProductsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Recent Products/cheese.png`}
                            alt=""
                        />
                    </RecentProductsImage>
                    <RecentProductsDetailContainer>
                        <RecentProductsCategory>
                            Grocery
                        </RecentProductsCategory>
                        <RecentProductsName>
                            Aarong Mozzarella Cheese
                        </RecentProductsName>
                        <RecentProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </RecentProductsRating>
                        <RecentProductsPriceNew>
                            $9.99
                            <RecentProductsPriceOld>
                                $14.99
                            </RecentProductsPriceOld>
                        </RecentProductsPriceNew>

                    </RecentProductsDetailContainer>
                </RecentProductsItem>
                <RecentProductsItem>
                    <RecentProductsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Recent Products/xbox.png`}
                            alt=""
                        />
                    </RecentProductsImage>
                    <RecentProductsDetailContainer>
                        <RecentProductsCategory>
                            Tech
                        </RecentProductsCategory>
                        <RecentProductsName>
                            Xbox 360 Special Edition
                        </RecentProductsName>
                        <RecentProductsRating>
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </RecentProductsRating>
                        <RecentProductsPriceNew>
                            $399.99
                            <RecentProductsPriceOld>
                                $459.99
                            </RecentProductsPriceOld>
                        </RecentProductsPriceNew>

                    </RecentProductsDetailContainer>
                </RecentProductsItem>

            </RecentProductsItemContainer>
            <SeeMoreButton> See More </SeeMoreButton>
        </RecentProductsContainer>
    )
}

export default RecentProducts