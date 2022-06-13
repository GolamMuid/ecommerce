import React from 'react'
import FooterContainer from './Footer.style'
import FooterLinks from './FooterLinks/FooterLinks'
import FooterLocation from './FooterLocation/FooterLocation'
import FooterNewsLetter from './FooterNewsLetter/FooterNewsLetter'

function Footer() {
    return (
        <FooterContainer>
            <FooterLocation />
            <FooterLinks />
            <FooterNewsLetter />
        </FooterContainer>
    )
}

export default Footer