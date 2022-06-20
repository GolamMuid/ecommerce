import React from "react";
import { OrderCardContainer } from "../OrderPart/OrderCard/OrderCard.style";
import DeliverdPart from "../OrderPart/OrderDeliverePart/DeliverdPart";
import PaymentPart from "../OrderPart/OrderDeliverePart/PaymentPart";
import { OrderContainer } from "../OrderPart/OrderPart.style";
import TransactionPart from "../OrderPart/OrderDeliverePart/TransactionComplete";
import TransactionOnProcess from "../OrderPart/OrderDeliverePart/TransactionOnProcess";

const ProcessCard = () => {
  return (
    <>
      <OrderContainer>
        <TransactionOnProcess />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionOnProcess />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionOnProcess />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionOnProcess />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionOnProcess />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionOnProcess />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
    </>
  );
};

export default ProcessCard;
