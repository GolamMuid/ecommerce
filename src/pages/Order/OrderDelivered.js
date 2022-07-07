import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BlankSpace from "../../components/Other Components/BlankSpace";
// import UserBlankSpace from "../../components/users_backend/UserBlankSpace/UserBlankSpace";
// import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";
import UserOrderDelivered from "../../components/users_backend/UserOrder/UserOrderDelivered/UserOrderDelivered";

const OrderDelivered = () => {
  return (
    <>
      {/* <UserNavbar /> */}
      <Navbar />
      <BlankSpace />
      <UserOrderDelivered />
    </>
  );
};

export default OrderDelivered;
