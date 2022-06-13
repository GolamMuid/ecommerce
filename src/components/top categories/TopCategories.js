import React from 'react'
import { TopCategoriesContainer, TopCategoriesImage, TopCategoriesItem, TopCategoriesItemContainer, TopCategoriesName, TopCategoriesTitle } from './TopCategories.style'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useState } from 'react';
import { useEffect } from 'react';


function TopCategories() {

    const [slideNumber, setSlideNumber] = useState(4);
    const width = window.innerWidth;

    useEffect(() => {
        { width <= 768 ? setSlideNumber(2) : setSlideNumber(4) }
    }, [])


    return (
        <TopCategoriesContainer>
            <TopCategoriesTitle>
                Top Categories
            </TopCategoriesTitle>
            <Swiper
                slidesPerView={slideNumber}
                spaceBetween={60}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <TopCategoriesItemContainer>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/ball.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Sports
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/headphone.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Headphones
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/mobile.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Mobile Phones
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/ps.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                PlayStation
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/shirt.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Clothing
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/shoe.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Shoes
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/toy.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Toys
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/coke.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Beverages
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                </TopCategoriesItemContainer>
            </Swiper>
        </TopCategoriesContainer>
    )
}

export default TopCategories