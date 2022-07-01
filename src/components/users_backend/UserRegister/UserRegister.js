import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  InputContainer,
  LoginWrapper,
  MainContainer,
  RegistrationText,
  Sub,
  WelcomeText,
} from "../UserLogin/UserLogin.style";
import { RegisterText } from "./UserRegister.style";

const UserRegister = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...user };
    newUserData[field] = value;
    setUser(newUserData);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <LoginWrapper>
      <MainContainer>
        <WelcomeText>Register Here</WelcomeText>
        <InputContainer>
          <Input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleOnBlur}
          />
          <Input
            type="number"
            placeholder="Phone number"
            name="phone"
            onChange={handleOnBlur}
          />
          <Input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleOnBlur}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleOnBlur}
          />
          <Link to="/login">
            <Sub type="submit" />
            {/* <LoginButton type="submit" /> */}
            {/* <LoginButton type="submit">Login</LoginButton> */}
          </Link>
        </InputContainer>
        <RegisterText>
          <Link style={{ color: "blue" }} to="/login">
            Already Registered? Please Login
          </Link>
        </RegisterText>
      </MainContainer>
    </LoginWrapper>
  );
};

export default UserRegister;
