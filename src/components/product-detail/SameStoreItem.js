import React from 'react'
import { SameStoreItemContainer, SameStoreItemImage, SameStoreItemName, SameStoreItemPrice, SameStoreItemRating } from './SameStoreItem.style'
import { BsStar } from 'react-icons/bs'


function SameStoreItem(props) {
    return (
        <SameStoreItemContainer>
            <SameStoreItemImage>
                <img src={process.env.PUBLIC_URL + "/" + props.image} alt="" />
            </SameStoreItemImage>
            <SameStoreItemName>
                {props.productName}
            </SameStoreItemName>
            <SameStoreItemPrice>
                {props.price}
            </SameStoreItemPrice>
            <SameStoreItemRating>
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
            </SameStoreItemRating>
        </SameStoreItemContainer>
    )
}

export default SameStoreItem