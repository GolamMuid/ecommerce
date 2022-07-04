import React, { useState } from "react";
import ModalDtails from "../../../ProductModal/ModalDtails";
import ProductModal from "../../../ProductModal/ProductModal";
import {
  OrderBigText,
  OrderButtonContainer,
  OrderCanceledButton,
  OrderSmallText,
} from "../OrderPart.style";
import {
  TransactionPartContainer,
  TransactionTextContainer,
} from "./TransactionPart.style";

const TransactionCancel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <TransactionPartContainer>
      <OrderButtonContainer>
        <OrderCanceledButton onClick={() => setIsOpen(!isOpen)}>
          Canceled
        </OrderCanceledButton>
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

export default TransactionCancel;
