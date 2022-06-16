import React from "react";
import UserBlankSpace from "../../components/users_backend/UserBlankSpace/UserBlankSpace";
import UserNavbar from "../../components/users_backend/UserNavbar/UserNavbar";
import UserProfile from "../../components/users_backend/UserProfile/UserProfile/UserProfile";

function Profile() {
  return (
    <>
      <UserNavbar />
      <UserBlankSpace />
      <UserProfile />
    </>
  );
}

export default Profile;
