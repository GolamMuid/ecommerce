import React from "react";
import { Link } from "react-router-dom";
import { LogoutContainer } from "./Logout.style";

const Logout = () => {
  return (
    <LogoutContainer>Logout</LogoutContainer>
    // <LogoutContainer>
    //   <Link to="/login"> Login </Link>
    // </LogoutContainer>
  );
};

export default Logout;
