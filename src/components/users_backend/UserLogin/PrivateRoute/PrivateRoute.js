import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import Login from "../../../../pages/Login/Login";
// import Spinner from "../../Spinner/Spinner";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading, email } = useAuth();
  let location = useLocation();
  //   if (isLoading) {
  //     return <Spinner />;
  //   }
  if (user.email || email) {
    return children;
  }
  return <Login></Login>;
};

export default PrivateRoute;
