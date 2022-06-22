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

function ProductImageAndDeliveryDetail(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [counter, setCounter] = useState(1);

    const increase = () =>
        setCounter(counter => counter + 1)

    const decrease = () => { counter == 1 ? setCounter(counter) : setCounter(counter => counter - 1) }

    return (
        <ProductImageAndDeliveryDetailContainer>

            <ProductImageView>
                <Swiper
                    spaceBetween={1000}
                    // navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Thumbs]}
                    className="mySwiper2">

                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + "/" + props.image1} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + "/" + props.image2} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + "/" + props.image3} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + "/" + props.image4} alt="" />
                    </SwiperSlide>


                </Swiper>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Thumbs]}
                    className="mySwiper">

                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + "/" + props.image1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + "/" + props.image2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + "/" + props.image3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + "/" + props.image4} alt="" />
                    </SwiperSlide>

                </Swiper>

            </ProductImageView>


            <ProductDetails>
                <ProductInformationContianer>
                    <ProductDetailTitle>
                        {props.name}
                    </ProductDetailTitle>
                    <ProductDetailRating>
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                    </ProductDetailRating>
                    <ProductRatingNumbers>
                        {props.numberOfRatings} ratings
                    </ProductRatingNumbers>
                    <ProductBrand>
                        Brand : {props.brandName}
                    </ProductBrand>
                </ProductInformationContianer>
                <ProductDetailPriceInfo>
                    <ProductDetailPrice>
                        {props.currentPrice}
                    </ProductDetailPrice>
                    <ProductDetailOldPriceContainer>
                        <ProductDetailOldPrice>
                            {props.oldPrice}
                        </ProductDetailOldPrice>
                        <ProductDetailDiscount>
                            {props.discount}
                        </ProductDetailDiscount>
                    </ProductDetailOldPriceContainer>
                    <ProductDetailPromotion>
                        Promotions : {props.promotion}
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
                        <ProductDetailQuantityButton onClick={decrease}> - </ProductDetailQuantityButton>
                        <ProductDetailQuantityNumber> {counter} </ProductDetailQuantityNumber>
                        <ProductDetailQuantityButton onClick={increase}> + </ProductDetailQuantityButton>
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
                            {props.deliveryLocation}
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
                            {props.deliveryType}
                        </DeliveryType>
                        <DeliveryTime>
                            {props.deliveryDuration}
                        </DeliveryTime>
                    </DeliveryTypeTimeContainer>
                    <DeliveryCharge>
                        {props.deliveryCharge}
                    </DeliveryCharge>

                </DeliveryLocationContainer>

                <CodContainer>

                    <CodIcon>
                        < GiPayMoney />
                    </CodIcon>
                    <CodAvailability>
                        {props.codAvailability}
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
                                {props.returnTime}
                            </ReturnPolicy>
                            <ReturnPolicyCondition>
                                {props.returnCondition}
                            </ReturnPolicyCondition>
                        </ReturnPolicyDetails>
                    </ReturnPolicyContainer>

                    <ReturnPolicyContainer>
                        <ReturnIcon>
                            <BsShieldSlash />
                        </ReturnIcon>
                        <ReturnPolicy>
                            {props.warranty}
                        </ReturnPolicy>
                    </ReturnPolicyContainer>

                </ReturnPolicyDetailsContainer>

                <SellerInfoContainer>

                    <SellerTitle>
                        Sold By
                    </SellerTitle>
                    <SellerName>
                        {props.sellerName}
                    </SellerName>
                </SellerInfoContainer>
            </DeliveryDetailContainer>


        </ProductImageAndDeliveryDetailContainer>
    )
}

export default ProductImageAndDeliveryDetail