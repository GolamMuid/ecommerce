import React from "react";
import { OrderPartContainer } from "../OrderPart/OrderPart.style";
import CanceleCard from "./CanceleCard";

const UserCanceledPart = () => {
  return (
    <OrderPartContainer>
      <CanceleCard />
    </OrderPartContainer>
  );
};

export default UserCanceledPart;
