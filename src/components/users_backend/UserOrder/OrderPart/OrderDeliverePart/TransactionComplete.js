import React from "react";
import { useState } from "react";
import {
  OrderBigText,
  OrderButtonContainer,
  OrderDeliveredButton,
  OrderSmallText,
} from "../OrderPart.style";
import {
  TransactionPartContainer,
  TransactionTextContainer,
} from "./TransactionPart.style";
import ProductModal from "../../../ProductModal/ProductModal";
import ModalDtails from "../../../ProductModal/ModalDtails";

const TransactionComplete = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <TransactionPartContainer>
      <OrderButtonContainer>
        <OrderDeliveredButton onClick={() => setIsOpen(!isOpen)}>
          Delivered
        </OrderDeliveredButton>
        <ProductModal show={isOpen} handleClose={hideModal}>
          <ModalDtails />
        </ProductModal>
      </OrderButtonContainer>
      <TransactionTextContainer>
        <OrderSmallText>Transaction. ID</OrderSmallText>
        <OrderBigText>#321DERs</OrderBigText>
      </TransactionTextContainer>
    </TransactionPartContainer>
  );
};

export default TransactionComplete;
