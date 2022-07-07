import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BlankSpace from "../../components/Other Components/BlankSpace";
// import UserBlankSpace from "../../components/users_backend/UserBlankSpace/UserBlankSpace";
// import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";
import UserOrderCanceled from "../../components/users_backend/UserOrder/UserOrderCanceled/UserOrderCanceled";

const OrderCanceled = () => {
  return (
    <>
      {/* <UserNavbar /> */}
      <Navbar />
      <BlankSpace />
      <UserOrderCanceled />
    </>
  );
};

export default OrderCanceled;
