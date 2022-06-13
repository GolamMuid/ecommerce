import React from 'react'
import { FooterLocationContainer, Location, LocationTitle, PaymentMethodContainer } from './FooterLocation.style'

function FooterLocation() {
    return (
        <FooterLocationContainer>
            <LocationTitle>
                ATI
            </LocationTitle>

            <Location>
                101 E 129th <br />
                IN 46312, US <br />
                Phone : 0123456789  <br />
                email : ati@atilimited.net
            </Location>

            <PaymentMethodContainer>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Payment/skrill.jpg`}
                    alt=""
                />
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Payment/bitcoin.jpg`}
                    alt=""
                />
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Payment/american.png`}
                    alt=""
                />
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Payment/paypal.jpg`}
                    alt=""
                />
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Payment/mastercard.jpg`}
                    alt=""
                />
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Payment/visa.png`}
                    alt=""
                />
            </PaymentMethodContainer>

        </FooterLocationContainer>
    )
}

export default FooterLocation