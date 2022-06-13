import React from 'react'
import { BannerCategory, BannerContainer, BannerItem, BannerText, BannerTextBold, BannerTextContainer } from './Banners.style'

function Banners() {
    return (
        <BannerContainer>
            <BannerItem>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Homepage Banner/furniture.jpg`}
                    alt=""
                />
                <BannerTextContainer>
                    <BannerCategory>
                        furniture
                    </BannerCategory>
                    <BannerText> Extra <BannerTextBold> 30% off </BannerTextBold> on furnitures </BannerText>
                </BannerTextContainer>
            </BannerItem>
            <BannerItem>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Homepage Banner/makeup2.jpg`}
                    alt=""
                />
                <BannerTextContainer>
                    <BannerCategory>
                        cosmetics
                    </BannerCategory>
                    <BannerText> Flat <BannerTextBold> 20% discount </BannerTextBold> on beauty products </BannerText>
                </BannerTextContainer>
            </BannerItem>
            <BannerItem>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Homepage Banner/woman.jpg`}
                    alt=""
                />
                <BannerTextContainer>
                    <BannerCategory>
                        clothing
                    </BannerCategory>
                    <BannerText> Extra <BannerTextBold> 20% off </BannerTextBold> all sell styles </BannerText>
                </BannerTextContainer>
            </BannerItem>
            <BannerItem>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Homepage Banner/oven.jpg`}
                    alt=""
                />
                <BannerTextContainer>
                    <BannerCategory>
                        Electronics
                    </BannerCategory>
                    <BannerText> Home Appliances from <BannerTextBold> foreign countries </BannerTextBold>  </BannerText>
                </BannerTextContainer>
            </BannerItem>

        </BannerContainer>
    )
}

export default Banners