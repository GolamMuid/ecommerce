import React from 'react'
import { DropDownContainer, DropDownMenu, DropDownMenuContainer, DropDownOption, SocialContainer, SocialIcon } from './DropDownsAndSocials.style'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

function DropDownsAndSocials() {
    return (
        <DropDownContainer>
            <DropDownMenuContainer>
                <DropDownMenu>
                    <DropDownOption> USD </DropDownOption>
                    <DropDownOption> TK </DropDownOption>
                </DropDownMenu>
            </DropDownMenuContainer>
            <DropDownMenuContainer>
                <DropDownMenu>
                    <DropDownOption> English </DropDownOption>
                    <DropDownOption> Bangla </DropDownOption>
                </DropDownMenu>
            </DropDownMenuContainer>
            <SocialContainer>
                <SocialIcon> <FaFacebookF /> </SocialIcon>
                <SocialIcon> <FaTwitter /> </SocialIcon>
                <SocialIcon> <FaInstagram /> </SocialIcon>
                <SocialIcon> <FaYoutube /> </SocialIcon>
            </SocialContainer>
        </DropDownContainer>
    )
}
export default DropDownsAndSocials