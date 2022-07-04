import React from 'react'
import { CheckoutPageProductInfo, CheckoutPageProductTitle, CheckoutProductModelContainer, CheckoutProductModelImage } from './CheckoutProductModelContainer'

function CheckoutProductModel(props) {
    return (
        <CheckoutProductModelContainer>
            <CheckoutProductModelImage>
                <img src={process.env.PUBLIC_URL + "/" + props.image} alt="" />
            </CheckoutProductModelImage>
            <CheckoutPageProductInfo>
                <CheckoutPageProductTitle> {props.name} </CheckoutPageProductTitle>
                Color : {props.color} <br />
                Qty : {props.qty} <br />
                Price : $ {props.price}
            </CheckoutPageProductInfo>

        </CheckoutProductModelContainer>
    )
}

export default CheckoutProductModel