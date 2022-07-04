import React from 'react'
import { DealOfTheWeekContainer, DotdCategory, DotdProductContainer, DotdProductImage, DotdProductName, DotdProductPrice, DotdProductRating, DotdProductSellProgress, DotdSellStats, DotdTitle, SwiperContainer } from './DealOfTheWeek.style'
import { BiStar } from 'react-icons/bi'
import ProgressBar from "@ramonak/react-progress-bar";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFlip } from "swiper";
import DealOfTheWeekProduct from './DealOfTheWeekProduct';


function DealOfTheWeek() {
    return (
        <DealOfTheWeekContainer>
            <DotdTitle>
                Deal of the week
            </DotdTitle>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                slidesPerView={1}
                autoHeight={true}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}

                direction={"vertical"}
                loop
                className="mySwiper">

                <SwiperSlide>
                    <DealOfTheWeekProduct
                        category="camera"
                        name="GoPro Hero 8"
                        price="$399.99"
                        image="assets/images/Deal of the week/camera.jpg"
                        percentage="20"
                        sold="80"
                        available="20" />
                </SwiperSlide>

                <SwiperSlide>
                    <DealOfTheWeekProduct
                        category="mobile"
                        name="Realme Narzo 50"
                        price="$99.99"
                        image="assets/images/Deal of the week/Realme-Narzo-50.jpg"
                        percentage="50"
                        sold="40"
                        available="40" />
                </SwiperSlide>

                <SwiperSlide>
                    <DealOfTheWeekProduct
                        category="gadgets"
                        name="iPad Pro 2021"
                        price="$499.99"
                        image="assets/images/Deal of the week/ipad.jpg"
                        percentage="80"
                        sold="20"
                        available="80" />
                </SwiperSlide>
            </Swiper>
        </DealOfTheWeekContainer>
    )
}

export default DealOfTheWeek