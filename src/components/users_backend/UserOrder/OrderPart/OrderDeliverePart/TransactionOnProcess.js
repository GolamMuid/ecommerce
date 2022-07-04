import React, { useState } from "react";
import ProductModal from "../../../ProductModal/ProductModal";
import ModalDtails from "../../../ProductModal/ModalDtails";
import {
  OrderBigText,
  OrderButtonContainer,
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
      <OrderButtonContainer>
        <OrderOnProcessButton onClick={() => setIsOpen(!isOpen)}>
          On Process
        </OrderOnProcessButton>
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

export default TransactionOnProcess;
