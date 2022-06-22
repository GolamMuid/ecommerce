import React from 'react'
import { ProductReviewContainer, ReviewUsername, ReviewUserRating, ReviewUserReview } from './ProductReview.Style'
import { BsFillStarFill } from 'react-icons/bs'


function ProductReview(props) {
    return (
        <ProductReviewContainer>
            <ReviewUsername>
                {props.userName}
            </ReviewUsername>
            <ReviewUserRating>

                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />

            </ReviewUserRating>
            <ReviewUserReview>
                {props.review}
            </ReviewUserReview>
        </ProductReviewContainer>
    )
}

export default ProductReview