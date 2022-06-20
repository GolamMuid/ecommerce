import {
    ProductInfoTitle, ProductInfo, ProductInfoContainer, ProductReviewSectionContainer,
    ProductReviewContainer, ProductRating, ProductInfoAndReviewContainer,
    ProductRatingStars, ProductReviewNumbers, ProductReviewTitle, ReviewUsername, ReviewUserRating, ReviewuserReview, ReviewUserReview
} from './ProductDescriptionAndReview.style'

import { BsStar, BsFillStarFill, BsShieldSlash } from 'react-icons/bs'

function ProductDescriptionAndReview() {
    return (
        <ProductInfoAndReviewContainer>
            <ProductInfoContainer>
                <ProductInfoTitle>
                    Product Details of Beats Pro by Dr. Dre
                </ProductInfoTitle>

                <ProductInfo>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur tincidunt est. Donec hendrerit mauris quis gravida euismod. Suspendisse at orci finibus, accumsan est vel, ullamcorper turpis. Proin ac risus eros. Morbi malesuada nulla sed neque sollicitudin rhoncus. Nunc nec mauris nulla. Nullam consequat enim eget quam tristique convallis in bibendum urna. Vivamus eu aliquam diam. Morbi gravida urna nec sapien ullamcorper posuere. Sed convallis auctor massa, eu ultrices arcu varius non. Nullam sed ante orci.
                    <br />
                    Curabitur lobortis lacinia enim, sed vehicula urna. Nunc auctor hendrerit orci, et vestibulum nulla fringilla at. Nunc convallis tortor dui, a ultrices mi auctor vitae. Vivamus vehicula tincidunt ipsum, ut cursus urna. Cras consequat, lectus at dignissim hendrerit, lacus diam mollis orci, ut tempus arcu augue tristique nunc. Nam tincidunt placerat sem sed aliquam. Quisque pellentesque ut dui at malesuada. Donec nibh lectus, sagittis ut molestie in, congue ac lacus. Mauris suscipit vestibulum augue et rhoncus. Morbi ut finibus nisi.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur tincidunt est. Donec hendrerit mauris quis gravida euismod. Suspendisse at orci finibus, accumsan est vel, ullamcorper turpis. Proin ac risus eros. Morbi malesuada nulla sed neque sollicitudin rhoncus. Nunc nec mauris nulla. Nullam consequat enim eget quam tristique convallis in bibendum urna. Vivamus eu aliquam diam. Morbi gravida urna nec sapien ullamcorper posuere. Sed convallis auctor massa, eu ultrices arcu varius non. Nullam sed ante orci.
                    <br />
                    Curabitur lobortis lacinia enim, sed vehicula urna. Nunc auctor hendrerit orci, et vestibulum nulla fringilla at. Nunc convallis tortor dui, a ultrices mi auctor vitae. Vivamus vehicula tincidunt ipsum, ut cursus urna. Cras consequat, lectus at dignissim hendrerit, lacus diam mollis orci, ut tempus arcu augue tristique nunc. Nam tincidunt placerat sem sed aliquam. Quisque pellentesque ut dui at malesuada. Donec nibh lectus, sagittis ut molestie in, congue ac lacus. Mauris suscipit vestibulum augue et rhoncus. Morbi ut finibus nisi.
                </ProductInfo>

            </ProductInfoContainer>

            <ProductReviewSectionContainer>
                <ProductInfoTitle>
                    Product Details of Beats Pro by Dr. Dre
                </ProductInfoTitle>


                <ProductRating>
                    4/5
                </ProductRating>
                <ProductRatingStars>
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsStar />
                </ProductRatingStars>
                <ProductReviewNumbers>
                    54 Ratings
                </ProductReviewNumbers>
                <ProductReviewTitle>
                    Product Review
                </ProductReviewTitle>

                <ProductReviewContainer>
                    <ReviewUsername>
                        John Doe
                    </ReviewUsername>
                    <ReviewUserRating>

                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />

                    </ReviewUserRating>
                    <ReviewUserReview>
                        Nice Pair of headphones
                    </ReviewUserReview>
                </ProductReviewContainer>
                <ProductReviewContainer>
                    <ReviewUsername>
                        John Doe
                    </ReviewUsername>
                    <ReviewUserRating>

                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />

                    </ReviewUserRating>
                    <ReviewUserReview>
                        Nice Pair of headphones
                    </ReviewUserReview>
                </ProductReviewContainer>
                <ProductReviewContainer>
                    <ReviewUsername>
                        John Doe
                    </ReviewUsername>
                    <ReviewUserRating>

                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />

                    </ReviewUserRating>
                    <ReviewUserReview>
                        Nice Pair of headphones
                    </ReviewUserReview>
                </ProductReviewContainer>
            </ProductReviewSectionContainer>

        </ProductInfoAndReviewContainer>

    )
}


export default ProductDescriptionAndReview