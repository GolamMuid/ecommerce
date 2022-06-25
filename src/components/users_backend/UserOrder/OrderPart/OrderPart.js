import React from "react";
import DeliverdPart from "./OrderDeliverePart/DeliverdPart";
import PaymentPart from "./OrderDeliverePart/PaymentPart";
import TransactionCancel from "./OrderDeliverePart/TransactionCancel";
import TransactionComplete from "./OrderDeliverePart/TransactionComplete";
import TransactionOnProcess from "./OrderDeliverePart/TransactionOnProcess";
import {
  OrderCardContainer,
  OrderContainer,
  OrderPartContainer,
} from "./OrderPart.style";

const OrderPart = () => {
  return (
    <OrderPartContainer>
      <OrderCardContainer>
        <OrderContainer>
          <TransactionComplete />
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
          <TransactionComplete />
          <DeliverdPart />
          <PaymentPart />
        </OrderContainer>
        <OrderContainer>
          <TransactionOnProcess />
          <DeliverdPart />
          <PaymentPart />
        </OrderContainer>
        <OrderContainer>
          <TransactionComplete />
          <DeliverdPart />
          <PaymentPart />
        </OrderContainer>
      </OrderCardContainer>
    </OrderPartContainer>
  );
};

export default OrderPart;
