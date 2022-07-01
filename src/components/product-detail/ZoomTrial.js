import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";

import { BsStar, BsFillStarFill, BsShieldSlash } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiPayMoney, GiReturnArrow } from 'react-icons/gi'

import "swiper/css";
import "swiper/css/thumbs";

import ReactImageMagnify from 'react-image-magnify';

function ZoomTrial(props) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>


            <Swiper
                spaceBetween={1000}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs]}
                className="mySwiper2">

                <SwiperSlide>

                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: false,
                            src: `${process.env.PUBLIC_URL}assets/images/ATI.png`,
                            height: 300,
                            width: 600
                        },
                        largeImage: {
                            src: `${process.env.PUBLIC_URL}assets/images/ATI.png`,
                            width: 1200,
                            height: 1800
                        }
                    }} />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/ATI.png`} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/ATI.png`} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/ATI.png`} alt="" />
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
                    <img src={`${process.env.PUBLIC_URL}/assets/images/ATI.png`} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/ATI.png`} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/ATI.png`} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/ATI.png`} alt="" />
                </SwiperSlide>

            </Swiper>


        </div>
    )
}

export default ZoomTrial