import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BlankSpace from "../../components/Other Components/BlankSpace";
// import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";
import UserProfile from "../../components/users_backend/UserProfile/UserProfile/UserProfile";

function Profile() {
  return (
    <>
      {/* <UserNavbar /> */}
      <Navbar />
      <BlankSpace />
      <UserProfile />
    </>
  );
}

export default Profile;
