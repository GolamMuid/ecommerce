import React from "react";
import { Link } from "react-router-dom";
import { UserLogoContainer, UserLogoPic } from "./UserLogo.style";

function UserLogo() {
  return (
    <UserLogoContainer>
      <Link to="/">
        <UserLogoPic>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ATI-logo-small.png`}
            alt=""
          />
        </UserLogoPic>
      </Link>
    </UserLogoContainer>
  );
}

export default UserLogo;
