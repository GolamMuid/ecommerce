import React, { useState } from "react";
import LoginRegisterContainer from "./LoginRegister.style";

import UserLogin from "../../../users_backend/UserLogin/UserLogin";
import LoginModal from "../../../users_backend/UserLogin/LoginModal/LoginModal";

function LoginRegister() {
  const [isOpen, setIsOpen] = useState(false);

  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <LoginRegisterContainer onClick={() => setIsOpen(!isOpen)}>
        {/* <Link to="/login"> Login </Link> */}
        Login
      </LoginRegisterContainer>
      <LoginModal show={isOpen} handleClose={hideModal}>
        <UserLogin />
      </LoginModal>
    </>
  );
}

export default LoginRegister;
