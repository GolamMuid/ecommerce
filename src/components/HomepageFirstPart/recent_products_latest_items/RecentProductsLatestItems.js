import React from 'react'
import LatestItems from './latest_items/LatestItems'
import { RecentProductsLatestItemsContainer } from './RecentProductsLatestItems.style'
import RecentProducts from './recent_products/RecentProducts'


function RecentProductsLatestItems() {
    return (
        <RecentProductsLatestItemsContainer>
            <RecentProducts />
            <LatestItems />
        </RecentProductsLatestItemsContainer>
    )
}

export default RecentProductsLatestItems