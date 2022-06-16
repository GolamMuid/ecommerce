import React from "react";
import UserBlankSpace from "../../components/users_backend/UserBlankSpace/UserBlankSpace";
import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";
import UserOrder from "../../components/users_backend/UserOrder/UserOrder/UserOrder";

function Order() {
  return (
    <>
      <UserNavbar />
      <UserBlankSpace />
      <UserOrder />
    </>
  );
}

export default Order;
