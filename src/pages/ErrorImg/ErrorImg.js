import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "./img/245134.jpg";

const ErrorImg = () => {
  return (
    <>
      <img src={image1} alt="" width="900" height="500" />

      <NavLink style={{ textDecoration: "none" }} to="/">
        <button variant="text">Back to FrontUI</button>
      </NavLink>
    </>
  );
};

export default ErrorImg;
