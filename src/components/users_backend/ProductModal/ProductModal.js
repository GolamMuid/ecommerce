import React from "react";
import {
  CloseButton,
  ContentConainer,
  ModalContainer,
} from "./ProductModal.Style";

const ProductModal = ({ handleClose, show, children }) => {
  return (
    <ModalContainer block={show ? "block" : "none"}>
      <ContentConainer>
        {children}
        <CloseButton onClick={handleClose}>close</CloseButton>
      </ContentConainer>
    </ModalContainer>
  );
};

export default ProductModal;
