import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import UserRegister from "../UserRegister/UserRegister";
import LoginModal from "./LoginModal/LoginModal";

import {
  CancelButton,
  DirectLoginPart,
  ForgotPassword,
  HorizontalRule,
  Input,
  InputContainer,
  LoginButton,
  LoginWrapper,
  MainContainer,
  RegistrationText,
  WelcomeText,
} from "./UserLogin.style";

const UserLogin = () => {
  // const { user, isLoading } = useAuth();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { user, loginUser } = useAuth();
  // console.log(loginData);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (event) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    event.preventDefault();
  };

  // const [isOpen, setIsOpen] = useState(false);

  // const hideModal = () => {
  //   setIsOpen(false);
  // };

  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();

  //   const { email, password } = loginData;
  //   fetch("http://localhost:4002/api/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   })
  //     .then((res) => {
  //       if (res.status === 400 || res.status === 401) {
  //         alert("Invalid login");
  //       }
  //       return res.json();
  //     })

  //     .then((Data) => {
  //       if (Data.success) {
  //         console.log(Data.email);
  //         localStorage.setItem("accessToken", Data.accessToken);
  //         localStorage.setItem("user-email", Data.email);
  //         console.log(Data.email);
  //         navigate("/dashbord");
  //         // window.location.reload();
  //       }
  //       console.log(Data);
  //       // window.location.reload();
  //     });
  // };

  return (
    <>
      {/* <LoginWrapper> */}
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>

        <InputContainer onSubmit={handleLoginSubmit}>
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

          <LoginButton type="submit">Login</LoginButton>
          {/* {isLoading && <Spinner />} */}
          {/* {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>} */}
        </InputContainer>
        <HorizontalRule />
        <DirectLoginPart>
          <ForgotPassword>Forgot Password ?</ForgotPassword>

          {/* <RegistrationText onClick={() => setIsOpen(!isOpen)}>
            Already Registered? Please Login
          </RegistrationText>
          <LoginModal show={isOpen} handleClose={hideModal}>
            <UserRegister />
          </LoginModal> */}
          <RegistrationText>
            <Link style={{ color: "blue" }} to="/registration">
              NEW USER? PLEASE REGISTER
            </Link>
            {/* <Link onClick={() => setIsOpen(!isOpen)}>
              NEW USER? PLEASE REGISTER
            </Link> */}
            {/* <LoginModal show={isOpen} handleClose={hideModal}>
              <UserRegister />
            </LoginModal> */}
          </RegistrationText>
          <CancelButton>
            <Link style={{ color: "white" }} to="/">
              Cancel
            </Link>
          </CancelButton>
          {/* {isLoading && <Spinner />} */}
        </DirectLoginPart>
      </MainContainer>
      {/* </LoginWrapper> */}
    </>
  );
};

export default UserLogin;
