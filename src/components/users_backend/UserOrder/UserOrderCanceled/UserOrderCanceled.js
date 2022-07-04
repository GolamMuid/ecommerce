import React from "react";
import LeftSideBar from "../../LeftSideBar/LeftSideBar";
import { OrderBodyContainer } from "../../UserDashbord/UserDashbord/UserDashbord.style";
import UserCanceledPart from "./UserCanceledPart";

const UserOrderCanceled = () => {
  return (
    <>
      <OrderBodyContainer>
        <LeftSideBar />
        <UserCanceledPart />
      </OrderBodyContainer>
    </>
  );
};

export default UserOrderCanceled;
