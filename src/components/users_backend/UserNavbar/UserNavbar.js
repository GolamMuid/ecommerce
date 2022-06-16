import React from "react";
import Logo from "../../Navbar/BottomNav/Logo/Logo";
import { UserNavContainer } from "./UserNavbar.style";
import UserNavbarItem from "./UserNavbarItem/UserNavbarItem";

function UserNavbar() {
  return (
    <UserNavContainer>
      <Logo />
      <UserNavbarItem />
    </UserNavContainer>
  );
}

export default UserNavbar;
