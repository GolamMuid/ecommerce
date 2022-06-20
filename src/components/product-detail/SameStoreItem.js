import React from 'react'
import { SameStoreItemContainer, SameStoreItemImage, SameStoreItemName, SameStoreItemPrice, SameStoreItemRating } from './SameStoreItem.style'
import { BsStar } from 'react-icons/bs'


function SameStoreItem() {
    return (
        <SameStoreItemContainer>
            <SameStoreItemImage>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/a1.jpg`}
                    alt=""
                />
            </SameStoreItemImage>
            <SameStoreItemName>
                iphone 11 Pro
            </SameStoreItemName>
            <SameStoreItemPrice>
                $200
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