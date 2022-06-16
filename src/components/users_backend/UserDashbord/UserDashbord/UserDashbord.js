import React from "react";
import LeftSideBar from "../../LeftSideBar/LeftSideBar";

import DashbordPart from "../DashbordPart/DashbordPart";
import { OrderBodyContainer } from "./UserDashbord.style";

const UserDashbord = () => {
  return (
    <>
      <OrderBodyContainer>
        <LeftSideBar />
        <DashbordPart />
      </OrderBodyContainer>
    </>
  );
};

export default UserDashbord;
