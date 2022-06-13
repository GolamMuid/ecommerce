import React from 'react'
import CallUs from './CallUs/CallUs'
import DropDownsAndSocials from './DropDownsAndSocials/DropDownsAndSocials'
import OfferAnnouncement from './OfferAnnouncement/OfferAnnouncement'
import TopNavContainer from './TopNav.style'

function TopNav() {
    return (

        <TopNavContainer>
            <OfferAnnouncement />
            <CallUs />
            <DropDownsAndSocials />
        </TopNavContainer>
    )
}
export default TopNav