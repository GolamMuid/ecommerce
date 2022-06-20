import React from "react";
import LoginRegisterContainer from "./LoginRegister.style";
import { Link } from "react-router-dom";

function LoginRegister() {
  return (
    <>
      <LoginRegisterContainer>
        <Link to="/login"> Login </Link>
      </LoginRegisterContainer>
    </>
  );
}

export default LoginRegister;
