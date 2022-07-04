import React from 'react'
import { RecentProductsCategory, RecentProductsContainer, RecentProductsDetailContainer, RecentProductsImage, RecentProductsItem, RecentProductsItemContainer, RecentProductsName, RecentProductsPriceNew, RecentProductsPriceOld, RecentProductsRating, RecentProductsTitle, SeeMoreButton } from './RecentProducts.style'
import { BiStar } from 'react-icons/bi'
import RecentProductModel from '../../../recent_product_model/RecentProductModel'
import LoadMore from '../../../Other Components/LoadMore'

function RecentProducts() {
    return (
        <RecentProductsContainer>
            <RecentProductsTitle>
                Recently Viewed Products
            </RecentProductsTitle>
            {/* <SeeMoreButton> See More </SeeMoreButton> */}
            <RecentProductsItemContainer>
                <RecentProductModel
                    image="assets/images/Recent Products/denim.png"
                    category="clothing"
                    name="Denim Pant"
                    oldPrice="$99"
                    currentPrice="$79" />

                <RecentProductModel
                    image="assets/images/Recent Products/bag.png"
                    category="sport"
                    name="Casual Red Bag"
                    oldPrice="$199"
                    currentPrice="1$79" />

                <RecentProductModel
                    image="assets/images/Recent Products/beats.png"
                    category="gadgets"
                    name="Beats Headphones"
                    oldPrice="$499"
                    currentPrice="$459" />

                <RecentProductModel
                    image="assets/images/Recent Products/chair.png"
                    category="fruniture"
                    name="Ergonomic Chair"
                    oldPrice="$199"
                    currentPrice="$179" />

                <RecentProductModel
                    image="assets/images/Recent Products/cheese.png"
                    category="Grocery"
                    name="Aarong Mozzarella Cheese"
                    oldPrice="$49"
                    currentPrice="$39" />

                <RecentProductModel
                    image="assets/images/Recent Products/denim.png"
                    category="clothing"
                    name="Denim Pant"
                    oldPrice="$99"
                    currentPrice="$79" />

                {/* <RecentProductModel
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
                    currentPrice="$79" /> */}

            </RecentProductsItemContainer>

            <LoadMore />

        </RecentProductsContainer>
    )
}

export default RecentProducts