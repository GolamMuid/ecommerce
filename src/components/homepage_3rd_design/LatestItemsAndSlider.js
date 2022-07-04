import React from 'react'
import LatestItems from '../HomepageFirstPart/recent_products_latest_items/latest_items/LatestItems'
import Slider from '../HomepageFirstPart/SearchAndBanner/Slider/Slider'
import Slider3 from '../HomepageFirstPart/SearchAndBanner/Slider/Slider3'
import { LatestItemsAndSliderContainer } from './LatestItemAndSlider.style'

function LatestItemsAndSlider() {
    return (
        <LatestItemsAndSliderContainer>
            <LatestItems />
            <Slider3 />

        </LatestItemsAndSliderContainer>
    )
}

export default LatestItemsAndSlider