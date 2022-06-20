import React from "react";
import LeftSideBar from "../../LeftSideBar/LeftSideBar";
import { OrderBodyContainer } from "../../UserDashbord/UserDashbord/UserDashbord.style";
import UserOrderDeliveredPart from "./UserOrderDeliveredPart";

const UserOrderDelivered = () => {
  return (
    <>
      <OrderBodyContainer>
        <LeftSideBar />
        <UserOrderDeliveredPart />
      </OrderBodyContainer>
    </>
  );
};

export default UserOrderDelivered;
