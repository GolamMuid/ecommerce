import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import UserNavbarItem from "../../users_backend/UserNavbar/UserNavbarItem/UserNavbarItem";
import BottomNavContainer from "./BottomNav.style";
import LoginRegister from "./LoginRegister/LoginRegister";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import MobileMenu from "./Menu/MobileMenu";

function BottomNav() {
  const { user, email } = useAuth();

  return (
    <BottomNavContainer>
      <Logo />
      <Menu />
      {user.email || email ? <UserNavbarItem /> : <LoginRegister />}
      {/* {user.email ? <UserNavbarItem /> : <LoginRegister />} */}
      {/* <LoginRegister /> */}
      <MobileMenu />
    </BottomNavContainer>
  );
}

export default BottomNav;
