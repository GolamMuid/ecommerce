import React from "react";
import { Link } from "react-router-dom";
import {
  ErrorButton,
  ErrorImage,
  ErrorImgContainer,
  ErrorPageContainer,
} from "./ErrorPart.style";
import image1 from "./img/245134.jpg";

const ErrorPart = () => {
  return (
    <>
      <ErrorPageContainer>
        <ErrorImgContainer>
          <ErrorImage>
            <img src={image1} alt="" />
          </ErrorImage>
          <ErrorButton>
            <Link style={{ color: "red" }} to="/">
              Back To Home
            </Link>
          </ErrorButton>
        </ErrorImgContainer>
      </ErrorPageContainer>
    </>
  );
};

export default ErrorPart;
