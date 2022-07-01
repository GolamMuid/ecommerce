import React, { useState } from "react";
import ProductModal from "../../../ProductModal/ProductModal";
import {
  OrderBigText,
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
      <OrderCanceledButton onClick={() => setIsOpen(!isOpen)}>
        Canceled
      </OrderCanceledButton>
      <ProductModal show={isOpen} handleClose={hideModal}>
        <h1>Your Canceled Product is:</h1>
        <br />
        <ol>
          <h3>Premium School Bag</h3>

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

export default TransactionCancel;
