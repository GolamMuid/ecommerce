import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../UserLogin/LoginModal/LoginModal";
import UserLogin from "../UserLogin/UserLogin";
// import useAuth from "../../../hooks/useAuth";
import {
  Input,
  InputContainer,
  LoginButton,
  LoginWrapper,
  MainContainer,
  WelcomeText,
} from "../UserLogin/UserLogin.style";
import { RegisterText } from "./UserRegister.style";

const UserRegister = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  // const { isLoading } = useAuth();

  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, password } = registerData;
    console.log(name, email);
    const res = await fetch("http://localhost:4002/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password,
      }),
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      alert("Invalid registration");
      console.log("Invalid registration");
    } else if (res.status === 409) {
      alert("this email is allredy register please login !!");
    } else {
      alert("Successfully registration");
      console.log("Successfully registration");

      navigate("/login");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <LoginWrapper>
      <MainContainer>
        <WelcomeText>Register Here</WelcomeText>
        <InputContainer onSubmit={handleSubmit}>
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
          <LoginButton type="submit">Register</LoginButton>
        </InputContainer>

        <RegisterText onClick={() => setIsOpen(!isOpen)}>
          Already Registered? Please Login
        </RegisterText>
        <LoginModal show={isOpen} handleClose={hideModal}>
          <UserLogin />
        </LoginModal>

        {/* <RegisterText>
          <Link style={{ color: "blue" }} to="/login">
            Already Registered? Please Login
          </Link>
        </RegisterText> */}
      </MainContainer>
    </LoginWrapper>
  );
};

export default UserRegister;
