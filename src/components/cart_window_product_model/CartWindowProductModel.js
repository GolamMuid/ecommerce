import React from 'react'
import { CartWindowProductModelContainer, DeleteButton, ImageContainer, ProductName, ProductNameAndPriceContainer, ProductPrice } from './CartWindowProductModel.style'
import { IoMdClose } from 'react-icons/io'

function CartWindowProductModel(props) {
    return (
        <CartWindowProductModelContainer>
            <ImageContainer>
                <img src={process.env.PUBLIC_URL + "/" + props.image} alt="" />
            </ImageContainer>
            <ProductNameAndPriceContainer>
                <ProductName>
                    {props.name}
                </ProductName>
                <ProductPrice>
                    ${props.price}
                </ProductPrice>
            </ProductNameAndPriceContainer>
            <DeleteButton>
                <IoMdClose onClick={() => props.deleteItem(props.index)} />
            </DeleteButton>
        </CartWindowProductModelContainer>
    )
}

export default CartWindowProductModel