import React from "react";
import DeliverdPart from "../OrderPart/OrderDeliverePart/DeliverdPart";
import PaymentPart from "../OrderPart/OrderDeliverePart/PaymentPart";
import TransactionCancel from "../OrderPart/OrderDeliverePart/TransactionCancel";
import { OrderContainer } from "../OrderPart/OrderPart.style";

const CanceleCard = () => {
  return (
    <>
      <OrderContainer>
        <TransactionCancel />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionCancel />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionCancel />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionCancel />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionCancel />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionCancel />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionCancel />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
      <OrderContainer>
        <TransactionCancel />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>
    </>
  );
};

export default CanceleCard;
