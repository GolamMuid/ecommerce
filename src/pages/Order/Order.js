import React from "react";
import LeftSideBar from "../../components/users_backend/LeftSideBar/LeftSideBar";
import { Name } from "../../components/users_backend/LeftSideBar/LeftSideBar.style";
import { PartCotainer } from "../profile/Profile.style";

function Order() {
  return (
    <PartCotainer>
      <LeftSideBar></LeftSideBar>
      <Name>this is your order</Name>
    </PartCotainer>
  );
}

export default Order;
