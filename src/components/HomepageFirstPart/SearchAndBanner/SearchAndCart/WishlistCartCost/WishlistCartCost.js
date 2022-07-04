import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartButton, CartButtonContainer, CartProductContainer, CartViewContainer, TotalAmount, TotalContainer, TotalText, WishlistCartCostContainer, WishlistCartCostItmeCount, WishlistCartCostItmes } from './WishlistCartCost.style'
import { BsTruck, BsHeart, BsBag } from 'react-icons/bs'
import CartWindowProductModel from '../../../../cart_window_product_model/CartWindowProductModel'
import cartItems from '../../../../../dummy_data/CartData'

function WishlistCartCost() {

    const [clicked, setClicked] = useState(false)

    const handleClicked = () => {
        clicked ? setClicked(false) : setClicked(true)
    }

    const [items, setItems] = useState(cartItems);

    const deleteItem = (index) =>
        setItems((items) => items.filter((_, i) => i !== index));

    return (
        <WishlistCartCostContainer>
            <WishlistCartCostItmes>
                <BsTruck />
            </WishlistCartCostItmes>
            <WishlistCartCostItmes>
                <BsHeart />
                <WishlistCartCostItmeCount> 5 </WishlistCartCostItmeCount>
            </WishlistCartCostItmes>
            <WishlistCartCostItmes onClick={handleClicked}>
                <BsBag />
                <WishlistCartCostItmeCount> 2 </WishlistCartCostItmeCount>
            </WishlistCartCostItmes>
            <WishlistCartCostItmes>
                $180.00
            </WishlistCartCostItmes>
            <CartViewContainer style={{ display: clicked ? 'block' : 'none' }} >
                <CartProductContainer>
                    {items.map((item, index) => {
                        return (<CartWindowProductModel
                            key={index}
                            index={index}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            deleteItem={deleteItem} />)
                    })
                    }
                    {/* <CartWindowProductModel
                        image="assets/images/iphone.jpg"
                        name="iphone 11 pro"
                        price="$599" />
                    <CartWindowProductModel
                        image="assets/images/Cart/macair.jpg"
                        name="Macbook Air"
                        price="$799" /> */}
                </CartProductContainer>
                <TotalContainer>
                    <TotalText>
                        Total:
                    </TotalText>
                    <TotalAmount>
                        $1199
                    </TotalAmount>
                </TotalContainer>
                <CartButtonContainer>
                    <Link to="/cart"> <CartButton> View Cart </CartButton> </Link>
                    <CartButton> Checkout </CartButton>
                </CartButtonContainer>
            </CartViewContainer>
        </WishlistCartCostContainer >
    )
}

export default WishlistCartCost