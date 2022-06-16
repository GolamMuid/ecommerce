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

    const [slideNumber, setSlideNumber] = useState(2);
    const width = window.innerWidth;

    useEffect(() => {
        { width <= 768 ? setSlideNumber(2) : setSlideNumber(6) }
    }, [])


    return (
        <TopCategoriesContainer>
            <TopCategoriesTitle>
                What are you looking for?
            </TopCategoriesTitle>
            <Swiper
                slidesPerView={slideNumber}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={false}
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
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/computer.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Computer
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/television.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Tv and Smartbox
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/camera.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Camera and Photography
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/headphones.png`}
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
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/smartphone.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Smartphones and Tablets
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/electric-guitar.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Musical Instruments
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/cap.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Accessories
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/cloth.png`}
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
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/perfume.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Personal Care
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <TopCategoriesImage>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/sunglasses.png`}
                                    alt=""
                                />
                            </TopCategoriesImage>
                            <TopCategoriesName>
                                Fashion
                            </TopCategoriesName>
                        </TopCategoriesItem>
                    </SwiperSlide>
                </TopCategoriesItemContainer>
            </Swiper>
        </TopCategoriesContainer>
    )
}

export default TopCategories