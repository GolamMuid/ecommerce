import React from 'react'
import ProductDescriptionAndReview from '../components/product-detail/ProductDescriptionAndReview'
import ProductImageAndDeliveryDetail from '../components/product-detail/ProductImageAndDeliveryDetail'

function ProductDetailPage() {
    return (
        <>
            <ProductImageAndDeliveryDetail />
            <ProductDescriptionAndReview />
        </>
    )
}

export default ProductDetailPage