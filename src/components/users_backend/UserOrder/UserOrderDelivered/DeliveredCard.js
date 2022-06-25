import React from "react";
// import { OrderCardContainer } from "../OrderPart/OrderCard/OrderCard.style";
import DeliverdPart from "../OrderPart/OrderDeliverePart/DeliverdPart";
import PaymentPart from "../OrderPart/OrderDeliverePart/PaymentPart";
import {
  OrderCardContainer,
  OrderContainer,
} from "../OrderPart/OrderPart.style";
import TransactionPart from "../OrderPart/OrderDeliverePart/TransactionComplete";

const DeliveredCard = () => {
  return (
    <OrderCardContainer>
      <OrderContainer>
        <TransactionPart />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>

      <OrderContainer>
        <TransactionPart />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>

      <OrderContainer>
        <TransactionPart />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>

      <OrderContainer>
        <TransactionPart />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>

      <OrderContainer>
        <TransactionPart />
        <DeliverdPart />
        <PaymentPart />
      </OrderContainer>

      <OrderContainer>
        <TransactionPart />
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

export default DeliveredCard;
