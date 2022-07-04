import React, { useState, useEffect } from 'react'
import { CartPageProductModelContainer, DeleteButton, ImageContainer, ProductName, ProductPrice, ProductPriceTotal, ProductQuantity } from './CartPageProductModel.style'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

function CartPageProductModel(props) {
    const price = props.price;
    const [counter, setCounter] = useState(1);
    const [sum, setSum] = useState(props.price);

    useEffect(() => {
        setSum(sum => price * counter)
    });

    const increase = () => {
        setCounter(counter => counter + 1)
    }

    const decrease = () => {
        counter == 1 ? setCounter(counter) : setCounter(counter => counter - 1)
    }

    return (
        <CartPageProductModelContainer>

            <ImageContainer>
                <img src={process.env.PUBLIC_URL + "/" + props.image} alt="" />
            </ImageContainer>

            <ProductName>
                {props.name}
            </ProductName>

            <ProductPrice>
                ${props.price}
            </ProductPrice>

            <ProductQuantity>
                <FaMinusCircle onClick={decrease} />
                {counter}
                <FaPlusCircle onClick={increase} />
            </ProductQuantity>

            <ProductPriceTotal>
                ${sum}
            </ProductPriceTotal>

            <DeleteButton onClick={() => props.deleteItem(props.index)} >
                <IoMdClose />
            </DeleteButton>

        </CartPageProductModelContainer>
    )
}

export default CartPageProductModel