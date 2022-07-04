import React from 'react'
import Footer from '../../components/Footer/Footer'
import BlogPosts from '../../components/HomepageFirstPart/blog_posts/BlogPosts'
import Navbar from '../../components/Navbar/Navbar'
import BlankSpace from '../../components/Other Components/BlankSpace'
import ProductDescriptionAndReview from '../../components/product-detail/ProductDescriptionAndReview'
import ProductImageAndDeliveryDetail from '../../components/product-detail/ProductImageAndDeliveryDetail'
import ProductReview from '../../components/product-detail/ProductReview'
import SameStoreItem from '../../components/product-detail/SameStoreItem'
import RecentProductModel from '../../components/recent_product_model/RecentProductModel'
import SearchAndCart from '../../components/search_cart/SearchAndCart'
import { ProductDescriptionAndReviewContainer, ProductDescriptionAndSameStoreContainer, SameStoreContainer, SameStoreItemContainer, SameStoreTitle } from './ProductDetail.style'

function ProductDetail() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <ProductImageAndDeliveryDetail
                image1="assets/images/Product Detail/beats1.jpg"
                image2="assets/images/Product Detail/beats2.jpg"
                image3="assets/images/Product Detail/beats3.jpg"
                image4="assets/images/Product Detail/beats4.jpg"
                name="Beats Pro by Dr Dre"
                numberOfRatings="12"
                brandName="Beats"
                currentPrice="$200"
                oldPrice="$250"
                discount="20%"
                promotion="10% off on spending $1000 or more"
                deliveryLocation="House 9, Sector 11, Uttara, Dhaka"
                deliveryType="Home Delivery"
                deliveryDuration="2-4 days"
                deliveryCharge="$50"
                codAvailability="Cash on Delivery Available"
                returnTime="7 Days"
                returnCondition="Change of mind is not applicable"
                warranty="1 year warranty"
                sellerName="Gadget BD"
            />
            <ProductDescriptionAndSameStoreContainer>
                <ProductDescriptionAndReviewContainer>
                    <ProductDescriptionAndReview
                        infoTitle="Product Details of Beats Pro by Dr. Dre"
                        productInfo= "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Suspendisse consectetur tincidunt est. Donec hendrerit mauris quis gravida
                          euismod. Suspendisse at orci finibus, accumsan est vel, ullamcorper turpis. Proin ac risus eros. Morbi malesuada nulla sed neque sollicitudin rhoncus. Nunc nec mauris nulla. Nullam consequat enim eget quam tristique convallis in bibendum urna. Vivamus eu aliquam diam. Morbi gravida urna nec sapien ullamcorper posuere. Sed convallis auctor massa, eu ultrices arcu varius non. Nullam sed ante orci.
                Curabitur lobortis lacinia enim, <br /> sed vehicula urna. Nunc auctor hendrerit orci,
                 et vestibulum nulla fringilla at. Nunc convallis tortor dui, a ultrices mi auctor vitae. 
                 Vivamus vehicula tincidunt ipsum, ut cursus urna. Cras consequat, lectus at dignissim hendrerit, lacus diam mollis orci, ut tempus arcu augue tristique nunc. Nam tincidunt placerat sem sed aliquam. Quisque pellentesque ut dui at malesuada. Donec nibh lectus, sagittis ut molestie in, congue ac lacus. Mauris suscipit vestibulum augue et rhoncus. Morbi ut finibus nisi.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur
                 tincidunt est. Donec hendrerit mauris quis gravida euismod. Suspendisse at orci finibus,
                  accumsan est vel, ullamcorper turpis. Proin ac risus eros. Morbi malesuada nulla sed neque sollicitudin rhoncus. Nunc nec mauris nulla. Nullam consequat enim eget quam tristique convallis in bibendum urna. Vivamus eu aliquam diam. Morbi gravida urna nec sapien ullamcorper posuere. Sed convallis auctor massa, eu ultrices arcu varius non. Nullam sed ante orci.
                Curabitur lobortis lacinia enim, sed vehicula urna. Nunc auctor hendrerit orci,
                 et vestibulum nulla fringilla at. Nunc convallis tortor dui, a ultrices mi auctor vitae.
                  Vivamus vehicula tincidunt ipsum, ut cursus urna. Cras consequat, lectus at dignissim hendrerit, lacus diam mollis orci, ut tempus arcu augue tristique nunc. Nam tincidunt placerat sem sed aliquam. Quisque pellentesque ut dui at malesuada. Donec nibh lectus, sagittis ut molestie in, congue ac lacus. Mauris suscipit v
                estibulum augue et rhoncus. Morbi ut finibus nisi"
                        ratingTitle="Ratings & Reviews of Beats Pro by Dr. Dre"
                        productRating="4/5"
                        numberOfRatings="54 ratings"
                    />

                    <ProductReview
                        userName="john Doe"
                        review="Nice pair of headphones"
                    />
                    <ProductReview
                        userName="john Doe"
                        review="Nice pair of headphones"
                    />
                    <ProductReview
                        userName="john Doe"
                        review="Nice pair of headphones"
                    />
                </ProductDescriptionAndReviewContainer>

                <SameStoreContainer>
                    <SameStoreTitle>
                        From The Same Store
                    </SameStoreTitle>
                    <SameStoreItemContainer>
                    <RecentProductModel
                    image="assets/images/Recent Products/denim.png"
                    category="clothing"
                    name="Denim Pant"
                    oldPrice="$99"
                    currentPrice="$79" />

                <RecentProductModel
                    image="assets/images/Recent Products/jersey.png"
                    category="sports"
                    name="Brazil Football Jersey"
                    oldPrice="$99"
                    currentPrice="$79" />

                <RecentProductModel
                    image="assets/images/Recent Products/macbook.png"
                    category="gadgets"
                    name="Apple Macbook Pro"
                    oldPrice="$599"
                    currentPrice="$499" />

                <RecentProductModel
                    image="assets/images/Recent Products/ram.png"
                    category="gadgets"
                    name="Corsiar Vengence LPX 8gb ram"
                    oldPrice="$99"
                    currentPrice="$79" />
                    </SameStoreItemContainer>
                </SameStoreContainer>
            </ProductDescriptionAndSameStoreContainer>
            <BlogPosts />
            <Footer />
        </>
    )
}

export default ProductDetail