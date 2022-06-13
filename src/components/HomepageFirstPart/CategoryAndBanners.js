import React from 'react'
import Category from './Category/Category'
import CategoryMobile from './Category/CategoryMobile'
import CategoryAndBannersContainer from './CategoryAndBanners.style'
import SearchAndBanner from './SearchAndBanner/SearchAndBanner'


function CategoryAndBanners() {

    const width = window.innerWidth;

    return (
        <CategoryAndBannersContainer>
            {width >= 768 && <Category />}
            {width < 768 && <CategoryMobile />}

            <SearchAndBanner />

        </CategoryAndBannersContainer>
    )
}

export default CategoryAndBanners