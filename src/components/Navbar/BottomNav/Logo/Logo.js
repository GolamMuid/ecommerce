import React from 'react'
import LogoContainer from './Logo.style'
import { Link } from "react-router-dom"

function Logo() {
    return (
        <Link to="/">
            <LogoContainer>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/ATI-logo-small.png`}
                    alt=""
                />
            </LogoContainer>
        </Link>
    )
}

export default Logo