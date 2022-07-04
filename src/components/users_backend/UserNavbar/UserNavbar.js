import React from "react";
import MobileMenu from "../../Navbar/BottomNav/Menu/MobileMenu";
import { UserNavContainer } from "./UserNavbar.style";
import UserLogo from "./UserNavbarItem/UserLogo";
import UserNavbarItem from "./UserNavbarItem/UserNavbarItem";
import UserNavbarMenu from "./UserNavbarItem/UserNavbarMenu";

function UserNavbar() {
  return (
    <UserNavContainer>
      <UserLogo />
      <UserNavbarMenu />
      <UserNavbarItem />
      <MobileMenu />
    </UserNavContainer>
  );
}

export default UserNavbar;
