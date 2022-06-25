import React from "react";
import DeliverdPart from "../OrderPart/OrderDeliverePart/DeliverdPart";
import PaymentPart from "../OrderPart/OrderDeliverePart/PaymentPart";
import TransactionCancel from "../OrderPart/OrderDeliverePart/TransactionCancel";
import {
  OrderCardContainer,
  OrderContainer,
  OrderPartContainer,
} from "../OrderPart/OrderPart.style";

const UserCanceledPart = () => {
  return (
    <OrderPartContainer>
      <OrderCardContainer>
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
      </OrderCardContainer>
    </OrderPartContainer>
  );
};

export default UserCanceledPart;
