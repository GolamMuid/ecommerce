import React from 'react'
import { Link } from 'react-router-dom'
import { CartAdditionalInfoContainer, InfoButton, InfoContainer, InfoDropdown, InfoDropdownContainer, InfoDropdownOptions, InfoInput, InfoLabel, InfoText, InfoTitle, TotalCategory, TotalContainer, TotalPrice } from './CartAdditionalInfo.style'

function CartAdditionalInfo() {
    return (
        <CartAdditionalInfoContainer>
            <InfoContainer>
                <InfoTitle>
                    Estimate Shipping and Tax
                </InfoTitle>
                <InfoText> Enter your destination to get your shipping and tax </InfoText>
                <InfoDropdownContainer>
                    <InfoLabel>
                        COUNTRY:
                    </InfoLabel>
                    <InfoDropdown>
                        <InfoDropdownOptions> Bangladesh </InfoDropdownOptions>
                        <InfoDropdownOptions> USA </InfoDropdownOptions>
                    </InfoDropdown>
                </InfoDropdownContainer>
                <InfoDropdownContainer>
                    <InfoLabel>
                        State/province:
                    </InfoLabel>
                    <InfoDropdown>
                        <InfoDropdownOptions> Dhaka </InfoDropdownOptions>
                        <InfoDropdownOptions> Rajshahi </InfoDropdownOptions>
                    </InfoDropdown>
                </InfoDropdownContainer>
                <InfoDropdownContainer>
                    <InfoLabel>
                        ZIP/Postal code
                    </InfoLabel>
                    <InfoDropdown>
                        <InfoDropdownOptions> Dhaka </InfoDropdownOptions>
                        <InfoDropdownOptions> Rajshahi </InfoDropdownOptions>
                    </InfoDropdown>
                </InfoDropdownContainer>
                <InfoButton> get a quote </InfoButton>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>
                    Discount codes
                </InfoTitle>
                <InfoText> Enter your coupon if you have one </InfoText>
                <InfoInput />
                <br />
                <InfoButton> Apply </InfoButton>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>
                    Cart total
                </InfoTitle>

                <TotalContainer>
                    <TotalCategory> sub total </TotalCategory>
                    <TotalPrice> $ 500</TotalPrice>
                    <TotalCategory> sub total </TotalCategory>
                    <TotalPrice> $ 500</TotalPrice>
                </TotalContainer>

                <Link to='/checkout'>  <InfoButton> Proceed to Checkout </InfoButton>  </Link>

            </InfoContainer>
        </CartAdditionalInfoContainer>
    )
}

export default CartAdditionalInfo