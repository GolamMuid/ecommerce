import React from 'react'
import SearchAndDropDown from '../HomepageFirstPart/SearchAndBanner/SearchAndCart/SearchAndDropDown/SearchAndDropDown'
import WishlistCartCost from '../HomepageFirstPart/SearchAndBanner/SearchAndCart/WishlistCartCost/WishlistCartCost'
import { SearchAndCartContainer } from './SearchAndCart.style'

function SearchAndCart() {
    return (
        <SearchAndCartContainer>
            <SearchAndDropDown />
            <WishlistCartCost />
        </SearchAndCartContainer>
    )
}

export default SearchAndCart