import React from "react";
import { OrderBigText, OrderSmallText } from "../OrderPart.style";
import {
  DateContainer,
  PaymentPartContainer,
  PaymentTextContainer,
} from "./PaymentPart.style";
import { FiClock } from "react-icons/fi";

const PaymentPart = () => {
  return (
    <PaymentPartContainer>
      <DateContainer>
        <FiClock />
        06/04/2022
      </DateContainer>
      <PaymentTextContainer>
        <OrderSmallText>Total Payment</OrderSmallText>
        <OrderBigText>$12.74</OrderBigText>
      </PaymentTextContainer>
    </PaymentPartContainer>
  );
};

export default PaymentPart;
