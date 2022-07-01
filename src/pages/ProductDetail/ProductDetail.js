import React from 'react'
import Footer from '../../components/Footer/Footer'
import BlogPosts from '../../components/HomepageFirstPart/blog_posts/BlogPosts'
import Navbar from '../../components/Navbar/Navbar'
import BlankSpace from '../../components/Other Components/BlankSpace'
import ProductDescriptionAndReview from '../../components/product-detail/ProductDescriptionAndReview'
import ProductImageAndDeliveryDetail from '../../components/product-detail/ProductImageAndDeliveryDetail'
import ProductReview from '../../components/product-detail/ProductReview'
import SameStoreItem from '../../components/product-detail/SameStoreItem'
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
                deliveryLocation="10% off on spending $1000 or more"
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
                        productInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis orci odio, bibendum eget tellus vitae, vulputate luctus elit. Suspendisse non urna nibh. Aliquam gravida sollicitudin odio, non semper eros sollicitudin id. Ut purus mi, tincidunt id lacus et, porttitor posuere urna. Maecenas nec purus non leo pharetra interdum. In hac habitasse platea dictumst. Ut id magna at enim iaculis posuere ac nec nisl. Ut tincidunt id urna ac varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend porttitor metus sed ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
                        <SameStoreItem
                            image="assets/images/Same Store/iphone.jpg"
                            productName="iphone 11 Pro"
                            price="$400"
                        />
                        <SameStoreItem
                            image="assets/images/Same Store/ps.jpg"
                            productName="Playstation 5"
                            price="$600"
                        />
                        <SameStoreItem
                            image="assets/images/Same Store/sc.png"
                            productName="Skullcandy Hesh"
                            price="$200"
                        />
                    </SameStoreItemContainer>
                </SameStoreContainer>
            </ProductDescriptionAndSameStoreContainer>
            <BlogPosts />
            <Footer />
        </>
    )
}

export default ProductDetail