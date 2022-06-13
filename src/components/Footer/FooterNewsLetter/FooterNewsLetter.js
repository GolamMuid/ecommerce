import React from 'react'
import { FooterNewsLetterContainer, FooterSocialContainer, FooterSocialItems, NewsLetterButton, NewsLetterInput, NewsLetterText, NewsLetterTitle1, NewsLetterTitle2 } from './FooterNewsLetter.style'
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs'

function FooterNewsLetter() {
    return (
        <FooterNewsLetterContainer>
            <NewsLetterTitle1>
                Sign Up to
            </NewsLetterTitle1>
            <NewsLetterTitle2>
                Newsletter
            </NewsLetterTitle2>
            <NewsLetterText>
                Subscribe our newsletter to get notification about information discount
            </NewsLetterText>
            <NewsLetterInput type="text" placeholder='email address' />
            <NewsLetterButton> Subscribe </NewsLetterButton>
            <FooterSocialContainer>
                <FooterSocialItems>
                    get in touch
                </FooterSocialItems>
                <FooterSocialItems>
                    <BsFacebook />
                </FooterSocialItems>
                <FooterSocialItems>
                    <BsTwitter />
                </FooterSocialItems>
                <FooterSocialItems>
                    <BsInstagram />
                </FooterSocialItems>
                <FooterSocialItems>
                    <BsYoutube />
                </FooterSocialItems>
            </FooterSocialContainer>

        </FooterNewsLetterContainer>
    )
}

export default FooterNewsLetter