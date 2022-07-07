import React from "react";
import {
  LoginCloseButton,
  LoginContentConainer,
  LoginModalContainer,
} from "./LoginModal.Style";
import { AiOutlineClose } from "react-icons/ai";

const LoginModal = ({ handleClose, show, children }) => {
  return (
    <LoginModalContainer block={show ? "block" : "none"}>
      <LoginContentConainer>
        <LoginCloseButton onClick={handleClose}>
          <AiOutlineClose />
        </LoginCloseButton>
        {children}
        {/* <CloseButton onClick={handleClose}>close</CloseButton> */}
      </LoginContentConainer>
    </LoginModalContainer>
  );
};

export default LoginModal;
