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
                    <ul>
                        <li> - Fine-tuned acoustics for clarity and depth with noise isolation </li>
                        <li> - Spatial audio immerses you in music, movies, and games* </li>
                        <li> - On-ear headphones </li>
                        <li> - Adjustable fit with comfort-cushioned ear cups made for everyday use </li>
                        <li> - Sleek, streamlined design that’s durable and foldable to go everywhere you do</li>
                        <li> - Height: 7.8 in / 19.8 cm </li>
                        <li> - Class 1 Bluetooth® via the Apple W1 chip, providing seamless setup and switching for your Apple devices, with extended range and fewer dropouts </li>
                        <li> - Wirelessly share audio such as songs, podcasts, or movies with Beats Solo3 Wireless and another set of Beats headphones or AirPods with Audio Sharing† </li>
                        <li> - Micro USB port </li>
                        <li> - Fast Fuel: A 5-minute charge provides 3 hours of playback </li>
                        <li> - LED fuel gauge shows full or depleted charge level when plugged in, and full, low, or depleted charge level when not plugged in </li>
                    </ul>
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