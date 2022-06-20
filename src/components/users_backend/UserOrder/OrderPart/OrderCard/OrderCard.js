import React from "react";
import DeliverdPart from "../OrderDeliverePart/DeliverdPart";
import PaymentPart from "../OrderDeliverePart/PaymentPart";
import TransactionOnProcess from "../OrderDeliverePart/TransactionOnProcess";
import TransactionPart from "../OrderDeliverePart/TransactionComplete";
import { OrderContainer } from "../OrderPart.style";
import { OrderCardContainer } from "./OrderCard.style";
import TransactionCancel from "../OrderDeliverePart/TransactionCancel";

const OrderCard = () => {
  return (
    <OrderCardContainer>
      <OrderContainer>
        <TransactionPart />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionOnProcess />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionCancel />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionPart />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionOnProcess />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionPart />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
    </OrderCardContainer>
  );
};

export default OrderCard;
