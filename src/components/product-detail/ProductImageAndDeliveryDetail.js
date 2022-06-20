import React from 'react'
import {
    ProductImageAndDeliveryDetailContainer,
    ProductDetailRating, ProductDetails, ProductDetailTitle,
    ProductImageView, ProductRatingNumbers, ProductBrand, ProductDetailPrice, ProductDetailOldPriceContainer,
    ProductDetailOldPrice, ProductDetailDiscount, ProductDetailPromotion, ProductInformationContianer,
    ProductDetailPriceInfo, ProductVariantAndPurchaseContainer, ProductVariantContainer,
    ProductVariantSelect, ProductVariantOptions, ProductDetailQuantityContianer,
    ProductDetailQuantityButton, ProductDetailQuantityNumber, ProductPurchaseContainer,
    ProductDetailAddToCartButton, ProductDetailBuyNowButton, DeliveryDetailContainer,
    DeliveryLocationDetails, DeliveryTitle, DeliveryLocationContainer, DeliveryLocation,
    DeliveryLocationChange, DeliveryLocationIcon, DeliveryTypeIcon, DeliveryTypeTimeContainer,
    DeliveryType, DeliveryTime, DeliveryCharge, CodContainer, CodIcon, CodAvailability,
    ReturnPolicy, ReturnPolicyDetailsContainer, ServiceTitle, ReturnPolicyContainer,
    ReturnIcon, ReturnPolicyDetails, ReturnPolicyCondition, SellerInfoContainer, SellerTitle,
    SellerName
} from './ProductImageAndDeliveryDetail.style'

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";

import { BsStar, BsFillStarFill, BsShieldSlash } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiPayMoney, GiReturnArrow } from 'react-icons/gi'

import "swiper/css";
import "swiper/css/thumbs";

function ProductImageAndDeliveryDetail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <ProductImageAndDeliveryDetailContainer>

            <ProductImageView>
                <Swiper

                    spaceBetween={1000}
                    // navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Product Detail/beats1.jpg`}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Product Detail/beats2.jpg`}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Product Detail/beats3.jpg`}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Product Detail/beats4.jpg`}
                            alt=""
                        />
                    </SwiperSlide>

                </Swiper>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Product Detail/beats1.jpg`}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Product Detail/beats2.jpg`}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Product Detail/beats3.jpg`}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Product Detail/beats4.jpg`}
                            alt=""
                        />
                    </SwiperSlide>

                </Swiper>

            </ProductImageView>


            <ProductDetails>
                <ProductInformationContianer>
                    <ProductDetailTitle>
                        Beats Pro By Dr. Dre
                    </ProductDetailTitle>
                    <ProductDetailRating>
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                    </ProductDetailRating>
                    <ProductRatingNumbers>
                        12 ratings
                    </ProductRatingNumbers>
                    <ProductBrand>
                        Brand : Beats
                    </ProductBrand>
                </ProductInformationContianer>
                <ProductDetailPriceInfo>
                    <ProductDetailPrice>
                        $200
                    </ProductDetailPrice>
                    <ProductDetailOldPriceContainer>
                        <ProductDetailOldPrice>
                            $250
                        </ProductDetailOldPrice>
                        <ProductDetailDiscount>
                            -20%
                        </ProductDetailDiscount>
                    </ProductDetailOldPriceContainer>
                    <ProductDetailPromotion>
                        Promotions : 10% off on spending $1000 or more
                    </ProductDetailPromotion>
                </ProductDetailPriceInfo>
                <ProductVariantAndPurchaseContainer>
                    <ProductVariantContainer>
                        Color Family :
                        <ProductVariantSelect>
                            <ProductVariantOptions> Black </ProductVariantOptions>
                            <ProductVariantOptions> White  </ProductVariantOptions>
                            <ProductVariantOptions> Red </ProductVariantOptions>
                        </ProductVariantSelect>
                    </ProductVariantContainer>
                    <ProductDetailQuantityContianer>
                        <ProductDetailQuantityButton> - </ProductDetailQuantityButton>
                        <ProductDetailQuantityNumber> 1 </ProductDetailQuantityNumber>
                        <ProductDetailQuantityButton> + </ProductDetailQuantityButton>
                    </ProductDetailQuantityContianer>
                    <ProductPurchaseContainer>
                        <ProductDetailBuyNowButton> Buy Now </ProductDetailBuyNowButton>
                        <ProductDetailAddToCartButton> Add to Cart </ProductDetailAddToCartButton>
                    </ProductPurchaseContainer>
                </ProductVariantAndPurchaseContainer>
            </ProductDetails>

            <DeliveryDetailContainer>

                <DeliveryLocationDetails>
                    <DeliveryTitle>
                        Delivery
                    </DeliveryTitle>
                    <DeliveryLocationContainer>
                        <DeliveryLocationIcon>
                            < GrLocation />
                        </DeliveryLocationIcon>
                        <DeliveryLocation>
                            Dhaka, Dhaka North, Banani, Road No. 12-19
                        </DeliveryLocation>
                        <DeliveryLocationChange>
                            Change
                        </DeliveryLocationChange>
                    </DeliveryLocationContainer>
                </DeliveryLocationDetails>

                <DeliveryLocationContainer>

                    <DeliveryTypeIcon>
                        <TbTruckDelivery />
                    </DeliveryTypeIcon>
                    <DeliveryTypeTimeContainer>
                        <DeliveryType>
                            Home Delivery
                        </DeliveryType>
                        <DeliveryTime>
                            2-4 days
                        </DeliveryTime>
                    </DeliveryTypeTimeContainer>
                    <DeliveryCharge>
                        $50
                    </DeliveryCharge>

                </DeliveryLocationContainer>

                <CodContainer>

                    <CodIcon>
                        < GiPayMoney />
                    </CodIcon>
                    <CodAvailability>
                        Cash on Delivery Available
                    </CodAvailability>


                </CodContainer>

                <ReturnPolicyDetailsContainer>

                    <ServiceTitle>
                        Service
                    </ServiceTitle>
                    <ReturnPolicyContainer>
                        <ReturnIcon>
                            < GiReturnArrow />
                        </ReturnIcon>
                        <ReturnPolicyDetails>
                            <ReturnPolicy>
                                7 Days Return
                            </ReturnPolicy>
                            <ReturnPolicyCondition>
                                Change of mind is not applicable
                            </ReturnPolicyCondition>
                        </ReturnPolicyDetails>
                    </ReturnPolicyContainer>

                    <ReturnPolicyContainer>
                        <ReturnIcon>
                            <BsShieldSlash />
                        </ReturnIcon>
                        <ReturnPolicy>
                            Warranty not Available
                        </ReturnPolicy>
                    </ReturnPolicyContainer>

                </ReturnPolicyDetailsContainer>

                <SellerInfoContainer>

                    <SellerTitle>
                        Sold By
                    </SellerTitle>
                    <SellerName>
                        Gadgetmart BD
                    </SellerName>
                </SellerInfoContainer>
            </DeliveryDetailContainer>


        </ProductImageAndDeliveryDetailContainer>
    )
}

export default ProductImageAndDeliveryDetail