import React from "react";
import LeftSideBar from "../../LeftSideBar/LeftSideBar";
import { Text } from "../../UserDashbord/DashbordPart/DashbordPart.style";
import { OrderBodyContainer } from "../../UserDashbord/UserDashbord/UserDashbord.style";
import OrderPart from "../OrderPart/OrderPart";

function UserOrder() {
  return (
    <>
      <OrderBodyContainer>
        <LeftSideBar />
        <OrderPart />
      </OrderBodyContainer>
    </>
  );
}

export default UserOrder;
