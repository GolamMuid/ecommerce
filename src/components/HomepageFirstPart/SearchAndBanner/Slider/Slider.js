import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { SliderImageContainer, SliderItem, SliderTextCategory, SliderTextContainer, SliderTextTitle, SliderTextSubtitle, SliderWrapper, SliderTextPrice, SliderTextOldPrice, SliderTextNewPrice, SliderBuyButton } from './Slider.style'


export default function Slider() {
    return (
        <SliderWrapper>
            <Swiper
                spaceBetween={300}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                // setWrapperSize={true}
                loop>
                <SwiperSlide>
                    <SliderItem>
                        <SliderImageContainer>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/Homepage Slider/Tshirt.jpg`}
                                alt=""
                            />
                        </SliderImageContainer>
                        <SliderTextContainer>
                            <SliderTextCategory>
                                Clothing
                            </SliderTextCategory>
                            <SliderTextTitle>
                                Men Collection
                            </SliderTextTitle>
                            <SliderTextSubtitle>
                                Top 10 Best Man Collection
                            </SliderTextSubtitle>
                            <SliderTextPrice>
                                <SliderTextOldPrice>
                                    $1200.00
                                </SliderTextOldPrice>
                                <SliderTextNewPrice>
                                    $600.00
                                </SliderTextNewPrice>
                            </SliderTextPrice>
                            <SliderBuyButton>
                                Buy Now
                            </SliderBuyButton>
                        </SliderTextContainer>
                    </SliderItem>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem>
                        <SliderImageContainer>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/Homepage Slider/grocery.jpg`}
                                alt=""
                            />
                        </SliderImageContainer>
                        <SliderTextContainer>
                            <SliderTextCategory>
                                Groceries
                            </SliderTextCategory>
                            <SliderTextTitle>
                                Fresh Vegetables
                            </SliderTextTitle>
                            <SliderTextSubtitle>
                                Picked fresh from own farms
                            </SliderTextSubtitle>
                            <SliderTextPrice>
                                <SliderTextOldPrice>
                                    $40.00
                                </SliderTextOldPrice>
                                <SliderTextNewPrice>
                                    $30.00
                                </SliderTextNewPrice>
                            </SliderTextPrice>
                            <SliderBuyButton>
                                Buy Now
                            </SliderBuyButton>
                        </SliderTextContainer>
                    </SliderItem>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem>
                        <SliderImageContainer>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/Homepage Slider/headphones.jpg`}
                                alt=""
                            />
                        </SliderImageContainer>
                        <SliderTextContainer>
                            <SliderTextCategory>
                                Gadgets
                            </SliderTextCategory>
                            <SliderTextTitle>
                                Headphones
                            </SliderTextTitle>
                            <SliderTextSubtitle>
                                Top 10 Best Headphones of the year
                            </SliderTextSubtitle>
                            <SliderTextPrice>
                                <SliderTextOldPrice>
                                    $400.00
                                </SliderTextOldPrice>
                                <SliderTextNewPrice>
                                    $200.00
                                </SliderTextNewPrice>
                            </SliderTextPrice>
                            <SliderBuyButton>
                                Buy Now
                            </SliderBuyButton>
                        </SliderTextContainer>
                    </SliderItem>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem>
                        <SliderImageContainer>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/Homepage Slider/medicine.jpg`}
                                alt=""
                            />
                        </SliderImageContainer>
                        <SliderTextContainer>
                            <SliderTextCategory>
                                Health
                            </SliderTextCategory>
                            <SliderTextTitle>
                                Medicine
                            </SliderTextTitle>
                            <SliderTextSubtitle>
                                100% authenctic medicines from various manufacturers
                            </SliderTextSubtitle>
                            <SliderTextPrice>
                                <SliderTextOldPrice>
                                    20%
                                </SliderTextOldPrice>
                                <SliderTextNewPrice>
                                    30% off
                                </SliderTextNewPrice>
                            </SliderTextPrice>
                            <SliderBuyButton>
                                Buy Now
                            </SliderBuyButton>
                        </SliderTextContainer>
                    </SliderItem>
                </SwiperSlide>
            </Swiper>
        </SliderWrapper>
    );
}
