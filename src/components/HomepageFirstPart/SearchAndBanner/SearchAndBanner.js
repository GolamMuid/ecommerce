import React from 'react'
import Banners from './Banners/Banners'
import DealOfTheWeek from './deal of the week/DealOfTheWeek'
import { SearchAndBannerContainer } from './SearchAndBanner.style'
import SearchAndDropDown from './SearchAndCart/SearchAndDropDown/SearchAndDropDown'
import WishlistCartCost from './SearchAndCart/WishlistCartCost/WishlistCartCost'
import Slider from './Slider/Slider'

function SearchAndBanner() {
    return (
        <SearchAndBannerContainer>
            <SearchAndDropDown />
            <WishlistCartCost />
            <Slider />
            {/* <Banners /> */}
            <DealOfTheWeek />
        </SearchAndBannerContainer>
    )
}

export default SearchAndBanner