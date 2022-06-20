import React from "react";
import { Link } from "react-router-dom";
import { LogoutContainer } from "../../Logout/Logout.style";
import { UserNavbarItemContainer } from "./UserNavbarItem.style";

const UserNavbarItem = () => {
  return (
    <UserNavbarItemContainer>
      <LogoutContainer>
        <Link to="/"> Logout </Link>
      </LogoutContainer>
      {/* <LogoutContainer>Logout</LogoutContainer> */}
    </UserNavbarItemContainer>
  );
};

export default UserNavbarItem;
