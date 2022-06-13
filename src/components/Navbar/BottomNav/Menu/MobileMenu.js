import React, { useState } from 'react'
import { MobileMenuContainer, MenuItem, SubMenuContainer, SubMenuItem, HamburgerContainer } from './Menu.style'
import { IoIosArrowDown } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'

function MobileMenu() {

    const [clicked, setClicked] = useState(false);
    const handleClicked = () => {
        clicked ? setClicked(false) : setClicked(true);
        // console.log(clicked)
    }

    const [expansion1, setExpansion1] = useState(true)
    const [expansion2, setExpansion2] = useState(true)
    const [expansion3, setExpansion3] = useState(true)

    const handleExpansion1 = () => {
        if (expansion1) {
            setExpansion1(false)
            setExpansion2(true)
            setExpansion3(true)
        } else {
            setExpansion1(true)
        }
    }

    const handleExpansion2 = () => {
        if (expansion2) {
            setExpansion1(true)
            setExpansion2(false)
            setExpansion3(true)
        } else {
            setExpansion2(true)
        }
    }

    const handleExpansion3 = () => {
        if (expansion3) {
            setExpansion1(true)
            setExpansion2(true)
            setExpansion3(false)
        } else {
            setExpansion3(true)
        }
    }

    // Previous method of toggling
    // const handleExpansion3 = () => {
    //     expansion3 ? setExpansion3(false) : setExpansion3(true);
    // }

    return (
        <>
            <HamburgerContainer onClick={handleClicked}>
                {clicked ? <MdClose /> : <GiHamburgerMenu />}
            </HamburgerContainer>
            <MobileMenuContainer style={clicked ? { left: '0%' } : { left: '100%' }} >
                <MenuItem> Home  </MenuItem>
                <MenuItem onClick={handleExpansion1}> Products <IoIosArrowDown />
                    <SubMenuContainer style={expansion1 ? { diplay: 'none' } : { display: 'block' }} >
                        <SubMenuItem>Web Application</SubMenuItem>
                        <SubMenuItem>Website</SubMenuItem>
                        <SubMenuItem>Software Soultion</SubMenuItem>
                        <SubMenuItem>Harware Solution</SubMenuItem>
                    </SubMenuContainer>
                </MenuItem>
                <MenuItem onClick={handleExpansion2}> Gallery <IoIosArrowDown />
                    <SubMenuContainer style={expansion2 ? { diplay: 'none' } : { display: 'block' }}>
                        <SubMenuItem>Portfolio</SubMenuItem>
                        <SubMenuItem>Clients</SubMenuItem>
                        <SubMenuItem>Office</SubMenuItem>
                    </SubMenuContainer>
                </MenuItem>
                <MenuItem onClick={handleExpansion3}> Projects <IoIosArrowDown />
                    <SubMenuContainer style={expansion3 ? { diplay: 'none' } : { display: 'block' }}>
                        <SubMenuItem>Comepleted Projects</SubMenuItem>
                        <SubMenuItem>Running Projects</SubMenuItem>
                        <SubMenuItem>International Projects</SubMenuItem>
                        <SubMenuItem>Local Projects</SubMenuItem>
                        <SubMenuItem>Local Projects</SubMenuItem>
                        <SubMenuItem>Local Projects</SubMenuItem>
                    </SubMenuContainer>
                </MenuItem>
                <MenuItem> Services </MenuItem>
                <MenuItem> About Us </MenuItem>
            </MobileMenuContainer>
        </>
    )
}

export default MobileMenu