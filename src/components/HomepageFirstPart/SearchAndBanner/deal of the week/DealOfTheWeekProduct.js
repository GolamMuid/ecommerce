import React from 'react'
import { DealOfTheWeekContainer, DotdCategory, DotdProductContainer, DotdProductImage, DotdProductName, DotdProductPrice, DotdProductRating, DotdProductSellProgress, DotdSellStats, DotdTitle } from './DealOfTheWeek.style'
import { BiStar } from 'react-icons/bi'
import ProgressBar from "@ramonak/react-progress-bar";

function DealOfTheWeekProduct(props) {
    return (
        <DotdProductContainer>
            <DotdCategory>
                {props.category}
            </DotdCategory>
            <DotdProductName>
                {props.name}
            </DotdProductName>
            <DotdProductImage>
                <img src={process.env.PUBLIC_URL + "/" + props.image} alt="" />
            </DotdProductImage>
            <DotdProductPrice>
                {props.price}
            </DotdProductPrice>
            <DotdProductRating>
                <BiStar />
                <BiStar />
                <BiStar />
                <BiStar />
                <BiStar />
            </DotdProductRating>
            <DotdProductSellProgress>
                <ProgressBar completed={props.percentage} customLabel="  " height="10px" bgColor="black" animateOnRender={true} />
            </DotdProductSellProgress>
            <DotdSellStats> Already sold: {props.sold} </DotdSellStats>
            <DotdSellStats> Available: {props.available} </DotdSellStats>
        </DotdProductContainer>

    )
}

export default DealOfTheWeekProduct