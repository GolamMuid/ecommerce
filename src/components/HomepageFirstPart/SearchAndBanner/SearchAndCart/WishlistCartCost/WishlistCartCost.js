import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartButton, CartButtonContainer, CartContents, CartEmpty, CartProductContainer, CartViewContainer, TotalAmount, TotalContainer, TotalText, WishlistCartCostContainer, WishlistCartCostItmeCount, WishlistCartCostItmes } from './WishlistCartCost.style'
import { BsTruck, BsHeart, BsBag } from 'react-icons/bs'
import CartWindowProductModel from '../../../../cart_window_product_model/CartWindowProductModel'
import cartItems from '../../../../../data/CartData'
import { useContext } from 'react'
import CartContext from '../../../../../contexts/CartContext/CartContext'


function WishlistCartCost() {




    // Static Cart Data 

    // const [items, setItems] = useState(cartItems);

    // const deleteItem = (index) =>
    //     setItems((items) => items.filter((_, i) => i !== index));

    // Static Cart Data 

    return (
        <WishlistCartCostContainer>
            <WishlistCartCostItmes>
                <BsTruck />
            </WishlistCartCostItmes>
            <WishlistCartCostItmes>
                <BsHeart />
                <WishlistCartCostItmeCount> 0 </WishlistCartCostItmeCount>
            </WishlistCartCostItmes>

        </WishlistCartCostContainer >
    )
}

export default WishlistCartCost