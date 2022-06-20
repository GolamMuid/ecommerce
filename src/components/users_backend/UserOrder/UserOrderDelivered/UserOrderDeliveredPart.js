import React from "react";
import { OrderPartContainer } from "../OrderPart/OrderPart.style";
import DeliveredCard from "./DeliveredCard";

const UserOrderDeliveredPart = () => {
  return (
    <OrderPartContainer>
      <DeliveredCard />
    </OrderPartContainer>
  );
};

export default UserOrderDeliveredPart;
