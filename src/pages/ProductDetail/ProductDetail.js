import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import BlankSpace from '../../components/Other Components/BlankSpace'
import ProductDescriptionAndReview from '../../components/product-detail/ProductDescriptionAndReview'
import ProductImageAndDeliveryDetail from '../../components/product-detail/ProductImageAndDeliveryDetail'
import SameStoreItem from '../../components/product-detail/SameStoreItem'
import SearchAndCart from '../../components/search_cart/SearchAndCart'
import { ProductDescriptionAndSameStoreContainer, SameStoreContainer, SameStoreTitle } from './ProductDetail.style'

function ProductDetail() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <ProductImageAndDeliveryDetail />
            <ProductDescriptionAndSameStoreContainer>
                <ProductDescriptionAndReview />
                <SameStoreContainer>
                    <SameStoreTitle>
                        From The Same Store
                    </SameStoreTitle>
                    <SameStoreItem />
                    <SameStoreItem />
                    <SameStoreItem />
                    <SameStoreItem />
                </SameStoreContainer>
            </ProductDescriptionAndSameStoreContainer>
            <Footer />
        </>
    )
}

export default ProductDetail