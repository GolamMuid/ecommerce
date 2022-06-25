import React from "react";
import { OrderBigText, OrderSmallText } from "../OrderPart.style";
import { BlankContainer, DeliverdPartContainer } from "./DeliverdPart.styled";
import { TransactionPartContainer } from "./TransactionPart.style";

const DeliverdPart = () => {
  return (
    <TransactionPartContainer>
      <BlankContainer></BlankContainer>
      <DeliverdPartContainer>
        <OrderSmallText>Delivered to</OrderSmallText>
        <OrderBigText>Home</OrderBigText>
      </DeliverdPartContainer>
    </TransactionPartContainer>
  );
};

export default DeliverdPart;
