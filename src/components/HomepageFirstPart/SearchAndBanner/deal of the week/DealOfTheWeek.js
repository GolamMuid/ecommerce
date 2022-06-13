import React from 'react'
import { DealOfTheWeekContainer, DotdCategory, DotdProductContainer, DotdProductImage, DotdProductName, DotdProductPrice, DotdProductRating, DotdProductSellProgress, DotdSellStats, DotdTitle } from './DealOfTheWeek.style'
import { BiStar } from 'react-icons/bi'
import ProgressBar from "@ramonak/react-progress-bar";


function DealOfTheWeek() {
    return (
        <DealOfTheWeekContainer>
            <DotdTitle>
                Deal of the week
            </DotdTitle>
            <DotdProductContainer>
                <DotdCategory>
                    Camera
                </DotdCategory>
                <DotdProductName>
                    GoPro Hero 8 Black Waterproof Case with Lens Filter
                </DotdProductName>
                <DotdProductImage>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/Deal of the week/camera.jpg`}
                        alt=""
                    />
                </DotdProductImage>
                <DotdProductPrice>
                    $399.00
                </DotdProductPrice>
                <DotdProductRating>
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                </DotdProductRating>
                <DotdProductSellProgress>
                    <ProgressBar completed={45} customLabel="  " height="10px" bgColor="black" animateOnRender={true} />
                </DotdProductSellProgress>
                <DotdSellStats> Already sold: 20 </DotdSellStats>
                <DotdSellStats> Available: 35 </DotdSellStats>
            </DotdProductContainer>
        </DealOfTheWeekContainer>
    )
}

export default DealOfTheWeek