import React from 'react'
import { MenuContainer, MenuItem, SubMenuContainer, SubMenuItem } from './Menu.style'
import { IoIosArrowDown } from 'react-icons/io'
import { MegaMenuTitle, MegaMenucontainer, MegaMenuSub, MegaMenuSubItem, MegaMenuSubItemContainer, MegaMenuSubTitle } from './MegaMenu.style'

function Menu() {
    return (

        <MenuContainer>
            <MenuItem> Home  </MenuItem>
            <MenuItem> Products <IoIosArrowDown />
                <SubMenuContainer >
                    <SubMenuItem>Web Application</SubMenuItem>
                    <SubMenuItem>Website</SubMenuItem>
                    <SubMenuItem>Software Soultion</SubMenuItem>
                    <SubMenuItem>Harware Solution</SubMenuItem>
                </SubMenuContainer>
            </MenuItem>
            <MenuItem> Gallery <IoIosArrowDown />
                <SubMenuContainer>
                    <SubMenuItem>Portfolio</SubMenuItem>
                    <SubMenuItem>Clients</SubMenuItem>
                    <SubMenuItem>Office</SubMenuItem>
                </SubMenuContainer>
            </MenuItem>
            <MenuItem> Projects <IoIosArrowDown />
                <SubMenuContainer>
                    <SubMenuItem>Comepleted Projects</SubMenuItem>
                    <SubMenuItem>Running Projects</SubMenuItem>
                    <SubMenuItem>International Projects</SubMenuItem>
                    <SubMenuItem>Local Projects</SubMenuItem>
                </SubMenuContainer>
            </MenuItem>
            <MegaMenuTitle> Services <IoIosArrowDown />

                <MegaMenucontainer>
                    <MegaMenuSub>
                        <MegaMenuSubTitle> Web Application </MegaMenuSubTitle>
                        <MegaMenuSubItemContainer>
                            <MegaMenuSubItem> MERN Stack </MegaMenuSubItem>
                            <MegaMenuSubItem> MEAN Stack </MegaMenuSubItem>
                            <MegaMenuSubItem> Laravel Vue </MegaMenuSubItem>
                        </MegaMenuSubItemContainer>
                        <MegaMenuSubTitle> Software Solution </MegaMenuSubTitle>
                        <MegaMenuSubItemContainer>
                            <MegaMenuSubItem> Remote Servicing </MegaMenuSubItem>
                            <MegaMenuSubItem> In House Servicing </MegaMenuSubItem>
                            <MegaMenuSubItem> Outdoor Servicing </MegaMenuSubItem>
                        </MegaMenuSubItemContainer>
                    </MegaMenuSub>
                    <MegaMenuSub>
                        <MegaMenuSubTitle> Online Pruchase </MegaMenuSubTitle>
                        <MegaMenuSubItemContainer>
                            <MegaMenuSubItem> Social Network Boosting </MegaMenuSubItem>
                            <MegaMenuSubItem> Domain Purchase </MegaMenuSubItem>
                            <MegaMenuSubItem> Hosting Purchase </MegaMenuSubItem>
                            <MegaMenuSubItem> NFT Purchase </MegaMenuSubItem>
                        </MegaMenuSubItemContainer>
                    </MegaMenuSub>
                    <MegaMenuSub>
                        <MegaMenuSubTitle> Online Pruchase </MegaMenuSubTitle>
                        <MegaMenuSubItemContainer>
                            <MegaMenuSubItem> Social Network Boosting </MegaMenuSubItem>
                            <MegaMenuSubItem> Domain Purchase </MegaMenuSubItem>
                            <MegaMenuSubItem> Hosting Purchase </MegaMenuSubItem>
                            <MegaMenuSubItem> NFT Purchase </MegaMenuSubItem>
                        </MegaMenuSubItemContainer>
                    </MegaMenuSub>
                </MegaMenucontainer>
            </MegaMenuTitle>
            <MenuItem> About Us </MenuItem>
        </MenuContainer>

    )
}
export default Menu

