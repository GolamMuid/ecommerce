import React, { useState } from "react";
import ProductModal from "../../../ProductModal/ProductModal";
import {
  OrderBigText,
  OrderDeliveredButton,
  OrderOnProcessButton,
  OrderSmallText,
} from "../OrderPart.style";
import {
  TransactionPartContainer,
  TransactionTextContainer,
} from "./TransactionPart.style";

const TransactionOnProcess = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <TransactionPartContainer>
      <OrderOnProcessButton onClick={() => setIsOpen(!isOpen)}>
        On Process
      </OrderOnProcessButton>
      <ProductModal show={isOpen} handleClose={hideModal}>
        <h1>Your On Progress Product is:</h1>
        <br />
        <ol>
          <h3>Nikon z50 DSLR Camera</h3>
          <h3>Denim pant for Men</h3>
          <h3>Nikon z50 DSLR Camera</h3>
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

export default TransactionOnProcess;
