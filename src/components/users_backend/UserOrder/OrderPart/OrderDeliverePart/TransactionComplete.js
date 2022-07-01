import React from "react";
import { useState } from "react";
import {
  OrderBigText,
  OrderDeliveredButton,
  OrderSmallText,
} from "../OrderPart.style";
import {
  TransactionPartContainer,
  TransactionTextContainer,
} from "./TransactionPart.style";
import ProductModal from "../../../ProductModal/ProductModal";

const TransactionComplete = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <TransactionPartContainer>
      <OrderDeliveredButton onClick={() => setIsOpen(!isOpen)}>
        Delivered
      </OrderDeliveredButton>
      <ProductModal show={isOpen} handleClose={hideModal}>
        <h1>Your Delivered Product is:</h1>
        <br />
        <ol>
          <h3>Premium School Bag</h3>
          <h3>Timezone Wrist Watch</h3>
          <h3>Xbox 360 Special Edition</h3>
          <h3>Timezone Wrist Watch</h3>
        </ol>
        <br />
      </ProductModal>
      <TransactionTextContainer>
        <OrderSmallText>Transaction. ID</OrderSmallText>
        <OrderBigText>#321DERs</OrderBigText>
      </TransactionTextContainer>
    </TransactionPartContainer>
  );
};

export default TransactionComplete;
