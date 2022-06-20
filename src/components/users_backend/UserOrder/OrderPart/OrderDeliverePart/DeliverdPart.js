import React from "react";
import { OrderBigText, OrderSmallText } from "../OrderPart.style";
import { DeliverdPartContainer } from "./DeliverdPart.styled";
import { TransactionPartContainer } from "./TransactionPart.style";

const DeliverdPart = () => {
  return (
    <TransactionPartContainer>
      <div></div>
      <DeliverdPartContainer>
        <OrderSmallText>Delivered to</OrderSmallText>
        <OrderBigText>Home</OrderBigText>
      </DeliverdPartContainer>
    </TransactionPartContainer>
  );
};

export default DeliverdPart;
