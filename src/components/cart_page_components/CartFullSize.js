import React from 'react'
import { CartContainer, CartLabelContainer, CartLabels } from './CartFullSize.style'

function CartFullSize() {
    return (
        <CartContainer>
            <CartLabelContainer>
                <CartLabels>
                    Image
                </CartLabels>
                <CartLabels>
                    Product Name
                </CartLabels>
                <CartLabels>
                    Price
                </CartLabels>
                <CartLabels>
                    Quantity
                </CartLabels>
                <CartLabels>
                    Total
                </CartLabels>
                <CartLabels>
                    Action
                </CartLabels>
            </CartLabelContainer>
        </CartContainer>
    )
}

export default CartFullSize