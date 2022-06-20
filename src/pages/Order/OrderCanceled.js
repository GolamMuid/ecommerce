import React from "react";
import UserBlankSpace from "../../components/users_backend/UserBlankSpace/UserBlankSpace";
import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";
import UserOrderCanceled from "../../components/users_backend/UserOrder/UserOrderCanceled/UserOrderCanceled";

const OrderCanceled = () => {
  return (
    <>
      <UserNavbar />
      <UserBlankSpace />
      <UserOrderCanceled />
    </>
  );
};

export default OrderCanceled;
