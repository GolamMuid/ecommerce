import React from "react";
import LeftSideBar from "../../components/users_backend/LeftSideBar/LeftSideBar";
import { Name } from "../../components/users_backend/LeftSideBar/LeftSideBar.style";
import { PartCotainer } from "./Profile.style";

function Profile() {
  return (
    <PartCotainer>
      <LeftSideBar></LeftSideBar>
      <>
        <Name>this is your profile</Name>
      </>
    </PartCotainer>
  );
}

export default Profile;
