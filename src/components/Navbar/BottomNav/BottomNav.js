import React from 'react'
import BottomNavContainer from './BottomNav.style'
import LoginRegister from './LoginRegister/LoginRegister'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import MobileMenu from './Menu/MobileMenu'

function BottomNav() {
    return (
        <BottomNavContainer>
            <Logo />
            <Menu />
            <LoginRegister />
            <MobileMenu />
        </BottomNavContainer>
    )
}

export default BottomNav