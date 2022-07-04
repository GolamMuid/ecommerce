import React from 'react'
import LatestItems from '../HomepageFirstPart/recent_products_latest_items/latest_items/LatestItems'
import DealOfTheWeek from '../HomepageFirstPart/SearchAndBanner/deal of the week/DealOfTheWeek'
import Slider from '../HomepageFirstPart/SearchAndBanner/Slider/Slider'
import { SliderAndProductContainer } from './SliderAndProducts.style'

function SliderAndProducts() {
    return (
        <SliderAndProductContainer>            
            <DealOfTheWeek />
            <Slider />            
            <LatestItems />
        </SliderAndProductContainer>
    )
}

export default SliderAndProducts