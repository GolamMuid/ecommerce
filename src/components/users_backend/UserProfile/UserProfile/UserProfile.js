import React from "react";
import LeftSideBar from "../../LeftSideBar/LeftSideBar";
import { OrderBodyContainer } from "../../UserDashbord/UserDashbord/UserDashbord.style";
import ProfilePart from "../ProfilePart/ProfilePart";

function UserProfile() {
  return (
    <>
      <OrderBodyContainer>
        <LeftSideBar />
        <ProfilePart />
      </OrderBodyContainer>
    </>
  );
}

export default UserProfile;
