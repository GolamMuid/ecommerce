import React from "react";
import DeliverdPart from "../OrderPart/OrderDeliverePart/DeliverdPart";
import PaymentPart from "../OrderPart/OrderDeliverePart/PaymentPart";
import TransactionOnProcess from "../OrderPart/OrderDeliverePart/TransactionOnProcess";
import {
  OrderCardContainer,
  OrderContainer,
  OrderPartContainer,
} from "../OrderPart/OrderPart.style";

const UserOrderProcessPart = () => {
  return (
    <OrderPartContainer>
      <OrderCardContainer>
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
      </OrderCardContainer>
    </OrderPartContainer>
  );
};

export default UserOrderProcessPart;
