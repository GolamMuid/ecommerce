import {
    ProductInfoTitle, ProductInfo, ProductInfoContainer, ProductReviewSectionContainer,
    ProductReviewContainer, ProductRating, ProductInfoAndReviewContainer,
    ProductRatingStars, ProductReviewNumbers, ProductReviewTitle, ReviewUsername, ReviewUserRating, ReviewuserReview, ReviewUserReview
} from './ProductDescriptionAndReview.style'

import { BsStar, BsFillStarFill, BsShieldSlash } from 'react-icons/bs'

function ProductDescriptionAndReview(props) {
    return (
        <ProductInfoAndReviewContainer>
            <ProductInfoContainer>
                <ProductInfoTitle>
                    {props.infoTitle}
                </ProductInfoTitle>

                <ProductInfo>
                    {props.productInfo}
                </ProductInfo>

            </ProductInfoContainer>

            <ProductReviewSectionContainer>
                <ProductInfoTitle>
                    {props.ratingTitle}
                </ProductInfoTitle>


                <ProductRating>
                    {props.productRating}
                </ProductRating>
                <ProductRatingStars>
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsStar />
                </ProductRatingStars>
                <ProductReviewNumbers>
                    {props.numberOfRatings}
                </ProductReviewNumbers>
                <ProductReviewTitle>
                    Product Review
                </ProductReviewTitle>

            </ProductReviewSectionContainer>

        </ProductInfoAndReviewContainer>

    )
}


export default ProductDescriptionAndReview