import React from "react";
import { OrderBigText, OrderSmallText } from "../OrderPart.style";
import { DateContainer, PaymentTextContainer } from "./PaymentPart.style";
import { FiClock } from "react-icons/fi";
import { TransactionPartContainer } from "./TransactionPart.style";

const PaymentPart = () => {
  return (
    <TransactionPartContainer>
      <DateContainer>
        <FiClock />
        06/04/2022
      </DateContainer>
      <PaymentTextContainer>
        <OrderSmallText>Total Payment</OrderSmallText>
        <OrderBigText>$12.74</OrderBigText>
      </PaymentTextContainer>
    </TransactionPartContainer>
  );
};

export default PaymentPart;
