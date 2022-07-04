import React from 'react'
import { Link } from 'react-router-dom'
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
                            <Link to="/motherboard">
                                <TopCategoriesImage>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/computer.png`}
                                        alt=""
                                    />
                                </TopCategoriesImage>
                                <TopCategoriesName>
                                    Computer
                                </TopCategoriesName>
                            </Link>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <Link to="/tv">
                                <TopCategoriesImage>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/television.png`}
                                        alt=""
                                    />
                                </TopCategoriesImage>
                                <TopCategoriesName>
                                    Tv and Smartbox
                                </TopCategoriesName>
                            </Link>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <Link to="/camera">
                                <TopCategoriesImage>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/camera.png`}
                                        alt=""
                                    />
                                </TopCategoriesImage>
                                <TopCategoriesName>
                                    Camera and Photography
                                </TopCategoriesName>
                            </Link>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <Link to="/headphones">
                                <TopCategoriesImage>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/headphones.png`}
                                        alt=""
                                    />
                                </TopCategoriesImage>
                                <TopCategoriesName>
                                    Headphones
                                </TopCategoriesName>
                            </Link>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <Link to="/smartphones">
                                <TopCategoriesImage>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/smartphone.png`}
                                        alt=""
                                    />
                                </TopCategoriesImage>
                                <TopCategoriesName>
                                    Smartphones and Tablets
                                </TopCategoriesName>
                            </Link>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <Link to="/music">
                                <TopCategoriesImage>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/electric-guitar.png`}
                                        alt=""
                                    />
                                </TopCategoriesImage>
                                <TopCategoriesName>
                                    Musical Instruments
                                </TopCategoriesName>
                            </Link>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <Link to="/accessories">
                                <TopCategoriesImage>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/cap.png`}
                                        alt=""
                                    />
                                </TopCategoriesImage>
                                <TopCategoriesName>
                                    Accessories
                                </TopCategoriesName>
                            </Link>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <Link to="/clothing">
                                <TopCategoriesImage>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/cloth.png`}
                                        alt=""
                                    />
                                </TopCategoriesImage>
                                <TopCategoriesName>
                                    Clothing
                                </TopCategoriesName>
                            </Link>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <Link to="/personal">
                                <TopCategoriesImage>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/perfume.png`}
                                        alt=""
                                    />
                                </TopCategoriesImage>
                                <TopCategoriesName>
                                    Personal Care
                                </TopCategoriesName>
                            </Link>
                        </TopCategoriesItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopCategoriesItem>
                            <Link to="/clothing">
                                <TopCategoriesImage>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/Top Categories/sunglasses.png`}
                                        alt=""
                                    />
                                </TopCategoriesImage>
                                <TopCategoriesName>
                                    Fashion
                                </TopCategoriesName>
                            </Link>
                        </TopCategoriesItem>
                    </SwiperSlide>
                </TopCategoriesItemContainer>
            </Swiper>
        </TopCategoriesContainer>
    )
}

export default TopCategories