import React from "react";
import OrderCard from "./OrderCard/OrderCard";
import { OrderPartContainer } from "./OrderPart.style";

const OrderPart = () => {
  return (
    <OrderPartContainer>
      {/* <OrderPartMenu /> */}
      <OrderCard />
    </OrderPartContainer>
  );
};

export default OrderPart;
