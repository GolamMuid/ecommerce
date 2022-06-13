import React from 'react'
import LogoContainer from './Logo.style'

function Logo() {
    return (
        <LogoContainer>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/ATI-logo-small.png`}
                alt=""
            />
        </LogoContainer>
    )
}

export default Logo