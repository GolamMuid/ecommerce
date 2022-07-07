import React, { useState } from 'react'
import { DiscountAmount, DiscountModalBackgroundContainer, DiscountModalContainer, ExitButton, ModalCenter, ModalTop } from './DiscountModal.style'

function DiscountModal({ handleToggle, closed }) {

    return (
        <DiscountModalBackgroundContainer style={closed ? { visibility: 'hidden' } : { visibility: 'visible' }}>
            <DiscountModalContainer>
                <ExitButton onClick={handleToggle}>
                    X
                </ExitButton>
                <ModalTop>
                    Welcome to ATI Ecommerce
                </ModalTop>
                <ModalCenter>
                    As a welcome gift
                    <br />
                    You have recieved
                    <DiscountAmount>
                        $50
                    </DiscountAmount>
                    Discount on your first purchase
                </ModalCenter>
            </DiscountModalContainer>
        </DiscountModalBackgroundContainer>

    )
}

export default DiscountModal