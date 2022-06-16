import React from "react";
import UserBlankSpace from "../../components/users_backend/UserBlankSpace/UserBlankSpace";
import UserDashbord from "../../components/users_backend/UserDashbord/UserDashbord/UserDashbord";
import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";

const Dashbord = () => {
  return (
    <>
      <UserNavbar />
      <UserBlankSpace />
      <UserDashbord />
    </>
  );
};

export default Dashbord;
