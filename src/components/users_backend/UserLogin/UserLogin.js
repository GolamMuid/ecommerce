import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CancelButton,
  ForgotPassword,
  HorizontalRule,
  Input,
  InputContainer,
  LoginWrapper,
  MainContainer,
  RegistrationText,
  Sub,
  WelcomeText,
} from "./UserLogin.style";

const UserLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  return (
    <>
      <LoginWrapper>
        <MainContainer>
          <WelcomeText>Welcome</WelcomeText>

          <InputContainer onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />

            <Link to="/order">
              <Sub type="submit" />
              {/* <LoginButton type="submit" /> */}
              {/* <LoginButton type="submit">Login</LoginButton> */}
            </Link>
          </InputContainer>
          <HorizontalRule />
          <ForgotPassword>Forgot Password ?</ForgotPassword>
          <br />
          <RegistrationText>
            If you are a new User please Registration here
          </RegistrationText>
          <br></br>
          <br></br>
          <CancelButton>
            <Link style={{ color: "white" }} to="/">
              Cancel
            </Link>
          </CancelButton>
          {/* <CancelButton>Cancel</CancelButton> */}
        </MainContainer>
      </LoginWrapper>
    </>
  );
};

export default UserLogin;
