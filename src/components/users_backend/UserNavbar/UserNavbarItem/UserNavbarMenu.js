import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  MegaMenuSub,
  MegaMenuSubItem,
  MegaMenuSubItemContainer,
} from "../../../Navbar/BottomNav/Menu/MegaMenu.style";

import {
  LinkButton,
  UserMegaMenuContainer,
  UserMegaMenuSubTitle,
  UserMegaMenuTitle,
  UserMegaNavItem,
  UserMenuContainer,
  UserMenuItem,
  UserNavItem,
  UserSubMenuContainer,
  UserSubMenuItem,
} from "./UserNavberMenu.style";

const UserNavbarMenu = () => {
  return (
    <>
      <UserMenuContainer>
        {/* <Link to="/"> <MenuItem> Home
                <SubMenuContainer>
                    <Link to="/home2"> <SubMenuItem>Home 2nd Design</SubMenuItem> </Link>
                    <Link to="/home3"> <SubMenuItem>Home 3rd Design</SubMenuItem> </Link>
                </SubMenuContainer>
            </MenuItem> </Link> */}

        <UserMenuItem>
          <Link to="/">
            <LinkButton> Home </LinkButton>
            <UserSubMenuContainer>
              tttttttttt
              <Link to="/allproducts">
                <UserSubMenuItem>All Products</UserSubMenuItem>
              </Link>
              <Link to="/allproducts">
                <UserSubMenuItem>All Products</UserSubMenuItem>
              </Link>
            </UserSubMenuContainer>
            {/* <SubMenuContainer>
              <Link to="/home2">
                
                <SubMenuItem>Home 2nd Design</SubMenuItem>
              </Link>
              <Link to="/home3">
                
                <SubMenuItem>Home 3rd Design</SubMenuItem>
              </Link>
            </SubMenuContainer> */}
          </Link>
        </UserMenuItem>

        <UserNavItem>
          <UserMenuItem>
            Products <IoIosArrowDown />
          </UserMenuItem>
          <UserSubMenuContainer>
            <Link to="/allproducts">
              <UserSubMenuItem>All Products</UserSubMenuItem>
            </Link>
            <UserSubMenuItem>Web Application</UserSubMenuItem>
            <UserSubMenuItem>Website</UserSubMenuItem>
            <UserSubMenuItem>Software Soultion</UserSubMenuItem>
            <UserSubMenuItem>Harware Solution</UserSubMenuItem>
          </UserSubMenuContainer>
        </UserNavItem>

        <UserNavItem>
          <UserMenuItem>
            Gallery <IoIosArrowDown />
          </UserMenuItem>
          <UserSubMenuContainer>
            <UserSubMenuItem>Portfolio</UserSubMenuItem>
            <UserSubMenuItem>Clients</UserSubMenuItem>
            <UserSubMenuItem>Office</UserSubMenuItem>
          </UserSubMenuContainer>
        </UserNavItem>

        <UserNavItem>
          <UserMenuItem>
            Projects <IoIosArrowDown />
          </UserMenuItem>
          <UserSubMenuContainer>
            <UserSubMenuItem>Comepleted Projects</UserSubMenuItem>
            <UserSubMenuItem>Running Projects</UserSubMenuItem>
            <UserSubMenuItem>International Projects</UserSubMenuItem>
            <UserSubMenuItem>Local Projects</UserSubMenuItem>
          </UserSubMenuContainer>
        </UserNavItem>

        <UserMegaNavItem>
          <UserMegaMenuTitle>
            Services <IoIosArrowDown />
          </UserMegaMenuTitle>
          <UserMegaMenuContainer>
            <MegaMenuSub>
              <UserMegaMenuSubTitle> Web Application </UserMegaMenuSubTitle>
              <MegaMenuSubItemContainer>
                <MegaMenuSubItem> MERN Stack </MegaMenuSubItem>
                <MegaMenuSubItem> MEAN Stack </MegaMenuSubItem>
                <MegaMenuSubItem> Laravel Vue </MegaMenuSubItem>
              </MegaMenuSubItemContainer>
            </MegaMenuSub>
            <MegaMenuSub>
              <UserMegaMenuSubTitle> Software Solution </UserMegaMenuSubTitle>
              <MegaMenuSubItemContainer>
                <MegaMenuSubItem> Remote Servicing </MegaMenuSubItem>
                <MegaMenuSubItem> In House Servicing </MegaMenuSubItem>
                <MegaMenuSubItem> Outdoor Servicing </MegaMenuSubItem>
              </MegaMenuSubItemContainer>
            </MegaMenuSub>
            <MegaMenuSub>
              <UserMegaMenuSubTitle> Online Pruchase </UserMegaMenuSubTitle>
              <MegaMenuSubItemContainer>
                <MegaMenuSubItem> Social Network Boosting </MegaMenuSubItem>
                <MegaMenuSubItem> Domain Purchase </MegaMenuSubItem>
                <MegaMenuSubItem> Hosting Purchase </MegaMenuSubItem>
                <MegaMenuSubItem> NFT Purchase </MegaMenuSubItem>
              </MegaMenuSubItemContainer>
            </MegaMenuSub>
            <MegaMenuSub>
              <UserMegaMenuSubTitle> Online Pruchase </UserMegaMenuSubTitle>
              <MegaMenuSubItemContainer>
                <MegaMenuSubItem> Social Network Boosting </MegaMenuSubItem>
                <MegaMenuSubItem> Domain Purchase </MegaMenuSubItem>
                <MegaMenuSubItem> Hosting Purchase </MegaMenuSubItem>
                <MegaMenuSubItem> NFT Purchase </MegaMenuSubItem>
              </MegaMenuSubItemContainer>
            </MegaMenuSub>
          </UserMegaMenuContainer>
        </UserMegaNavItem>

        <UserNavItem>
          <UserMenuItem> About </UserMenuItem>
        </UserNavItem>
      </UserMenuContainer>
    </>
  );
};

export default UserNavbarMenu;
