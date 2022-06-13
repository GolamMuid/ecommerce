import React from 'react'
import BottomNav from './BottomNav/BottomNav'
import NavbarContanier from './Navbar.style'
import TopNav from './TopNav/TopNav'

function Navbar() {
    return (
        <NavbarContanier>
            <TopNav />
            <BottomNav />
        </NavbarContanier>
    )
}
export default Navbar