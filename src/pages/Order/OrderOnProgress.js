import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BlankSpace from "../../components/Other Components/BlankSpace";
// import UserBlankSpace from "../../components/users_backend/UserBlankSpace/UserBlankSpace";
// import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";
import UserOrderProcess from "../../components/users_backend/UserOrder/UserOrderProcess/UserOrderProcess";

const OrderOnProgress = () => {
  return (
    <>
      <Navbar />
      {/* <UserNavbar /> */}
      <BlankSpace />
      <UserOrderProcess />
    </>
  );
};

export default OrderOnProgress;
