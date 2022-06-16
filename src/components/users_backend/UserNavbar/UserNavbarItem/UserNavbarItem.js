import React from "react";
import { LogoutContainer } from "../../Logout/Logout.style";
import { UserNavbarItemContainer } from "./UserNavbarItem.style";

const UserNavbarItem = () => {
  return (
    <UserNavbarItemContainer>
      <LogoutContainer>Logout</LogoutContainer>
    </UserNavbarItemContainer>
  );
};

export default UserNavbarItem;
