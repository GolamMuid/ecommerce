import React from "react";
import UserBlankSpace from "../../components/users_backend/UserBlankSpace/UserBlankSpace";
import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";
import UserOrderProcess from "../../components/users_backend/UserOrder/UserOrderProcess/UserOrderProcess";

const OrderOnProgress = () => {
  return (
    <>
      <UserNavbar />
      <UserBlankSpace />
      <UserOrderProcess />
    </>
  );
};

export default OrderOnProgress;
