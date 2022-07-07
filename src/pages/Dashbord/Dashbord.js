import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BlankSpace from "../../components/Other Components/BlankSpace";
import UserBlankSpace from "../../components/users_backend/UserBlankSpace/UserBlankSpace";
import UserDashbord from "../../components/users_backend/UserDashbord/UserDashbord/UserDashbord";
// import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";

const Dashbord = () => {
  return (
    <>
      {/* <UserNavbar /> */}
      <Navbar />
      <BlankSpace />
      <UserDashbord />
    </>
  );
};

export default Dashbord;
