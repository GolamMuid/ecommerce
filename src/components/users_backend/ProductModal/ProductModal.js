import React from "react";
import {
  CloseButton,
  ContentConainer,
  ModalContainer,
} from "./ProductModal.Style";
import { AiOutlineClose } from "react-icons/ai";

const ProductModal = ({ handleClose, show, children }) => {
  return (
    <ModalContainer block={show ? "block" : "none"}>
      <ContentConainer>
        <CloseButton onClick={handleClose}>
          <AiOutlineClose />
        </CloseButton>
        {children}
        {/* <CloseButton onClick={handleClose}>close</CloseButton> */}
      </ContentConainer>
    </ModalContainer>
  );
};

export default ProductModal;
