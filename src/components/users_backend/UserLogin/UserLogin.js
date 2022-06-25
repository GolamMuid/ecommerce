import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CancelButton,
  DirectLoginPart,
  ForgotPassword,
  HorizontalRule,
  Input,
  InputContainer,
  LoginWrapper,
  MainContainer,
  RegistrationText,
  SubmitButton,
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
              style={{ marginBottom: "0.3rem" }}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />

            <Link to="/order">
              <SubmitButton type="submit" />
              {/* <LoginButton type="submit" /> */}
              {/* <LoginButton type="submit">Login</LoginButton> */}
            </Link>
          </InputContainer>
          <HorizontalRule />
          <DirectLoginPart>
            <ForgotPassword>Forgot Password ?</ForgotPassword>
            <RegistrationText>
              <Link style={{ color: "blue" }} to="/registration">
                NEW USER? PLEASE REGISTER
              </Link>
            </RegistrationText>
            {/* <RegistrationText>NEW USER? PLEASE REGISTER</RegistrationText> */}
            <CancelButton>
              <Link style={{ color: "white" }} to="/">
                Cancel
              </Link>
            </CancelButton>
            {/* <CancelButton>Cancel</CancelButton> */}
          </DirectLoginPart>
        </MainContainer>
      </LoginWrapper>
    </>
  );
};

export default UserLogin;
