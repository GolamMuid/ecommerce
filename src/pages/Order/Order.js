import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BlankSpace from "../../components/Other Components/BlankSpace";
// import UserBlankSpace from "../../components/users_backend/UserBlankSpace/UserBlankSpace";
// import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";
import UserOrder from "../../components/users_backend/UserOrder/UserOrder/UserOrder";

function Order() {
  return (
    <>
      {/* <UserNavbar /> */}
      <Navbar />
      <BlankSpace />
      <UserOrder />
    </>
  );
}

export default Order;
