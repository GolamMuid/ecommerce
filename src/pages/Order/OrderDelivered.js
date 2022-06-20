import React from "react";
import UserBlankSpace from "../../components/users_backend/UserBlankSpace/UserBlankSpace";
import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";
import UserOrderDelivered from "../../components/users_backend/UserOrder/UserOrderDelivered/UserOrderDelivered";

const OrderDelivered = () => {
  return (
    <>
      <UserNavbar />
      <UserBlankSpace />
      <UserOrderDelivered />
    </>
  );
};

export default OrderDelivered;
