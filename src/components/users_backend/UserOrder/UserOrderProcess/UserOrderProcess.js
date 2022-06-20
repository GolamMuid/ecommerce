import React from "react";
import LeftSideBar from "../../LeftSideBar/LeftSideBar";
import { OrderBodyContainer } from "../../UserDashbord/UserDashbord/UserDashbord.style";
import UserOrderProcessPart from "./UserOrderProcessPart";

const UserOrderProcess = () => {
  return (
    <OrderBodyContainer>
      <LeftSideBar />
      <UserOrderProcessPart />
    </OrderBodyContainer>
  );
};

export default UserOrderProcess;
