import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsBag } from 'react-icons/bs'
import CartContext from '../../contexts/CartContext/CartContext'
import { CartViewContainer, CartWindowContainer, CartEmpty, CartContents, CartProductContainer, TotalContainer, TotalText, TotalAmount, CartButtonContainer, CartButton, CartIcon, CartItemQty, CartTotal, CartTotalAndButtonContainer } from './CartWindow.style'
import CartWindowProductModel from './CartWindowProductModel'

function CartWindow() {

    // Toggle Cart Diplay 

    const [clicked, setClicked] = useState(false)

    const handleClicked = () => {
        clicked ? setClicked(false) : setClicked(true)
    }

    // Toggle Cart Display 


    // Fetching Cart Data from Context 

    const { cartItems } = useContext(CartContext)

    // Fetching Cart Data from Context 

    return (
        <CartWindowContainer onClick={handleClicked}>

            <CartIcon>
                < BsBag />
                <CartItemQty>
                    {cartItems.length} ITEMS
                </CartItemQty>
            </CartIcon>

            <CartTotal>
                $100
            </CartTotal>

            <CartViewContainer style={{ right: clicked ? '70px' : '120%' }} >
                {cartItems.length === 0 ? <CartEmpty> Cart is empty </CartEmpty> :
                    <CartContents>
                        <CartProductContainer>
                            {cartItems.map((item, index) => {
                                return (<CartWindowProductModel
                                    key={index}
                                    index={index}
                                    image={item.image}
                                    name={item.name}
                                    price={item.currentPrice}
                                />)
                            })
                            }

                        </CartProductContainer>
                        <CartTotalAndButtonContainer>
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
                                <Link to="/checkout"> <CartButton> Checkout </CartButton> </Link>
                            </CartButtonContainer>
                        </CartTotalAndButtonContainer>

                    </CartContents>
                }
            </CartViewContainer>
        </CartWindowContainer>
    )
}

export default CartWindow