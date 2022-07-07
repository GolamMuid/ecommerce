import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { RecentProductsCategory, RecentProductsContainer, RecentProductsDetailContainer, RecentProductsImage, RecentProductsItem, RecentProductsItemContainer, RecentProductsName, RecentProductsPriceNew, RecentProductsPriceOld, RecentProductsRating, RecentProductsTitle, SeeMoreButton } from './RecentProducts.style'
import { BiStar } from 'react-icons/bi'
import RecentProductModel from '../../../recent_product_model/RecentProductModel'
import LoadMore from '../../../Other Components/LoadMore'
import CartContext from '../../../../contexts/CartContext/CartContext'


function RecentProducts() {

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch("./assets/dummy_data/product.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((inventory) => setInventory(inventory));

    }, []);


    return (
        <RecentProductsContainer>
            <RecentProductsTitle>
                Recently Viewed Products
            </RecentProductsTitle>
            {/* <SeeMoreButton> See More </SeeMoreButton> */}
            <RecentProductsItemContainer>

                {inventory.map((inventory, index) => {
                    return (<RecentProductModel
                        key={index}
                        index={index}
                        image={inventory.image}
                        category={inventory.category}
                        name={inventory.name}
                        oldPrice={inventory.oldPrice}
                        currentPrice={inventory.currentPrice}
                    // addToCart={addToCart}
                    />)
                })
                }

            </RecentProductsItemContainer>

            <LoadMore />

        </RecentProductsContainer>
    )
}

export default RecentProducts