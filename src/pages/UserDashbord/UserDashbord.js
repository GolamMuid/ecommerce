import React from "react";
import LeftSideBar from "../../components/users_backend/LeftSideBar/LeftSideBar";
import { Name } from "../../components/users_backend/LeftSideBar/LeftSideBar.style";
import { PartCotainer } from "../profile/Profile.style";

const UserDashbord = () => {
  return (
    <PartCotainer>
      <LeftSideBar></LeftSideBar>
      <Name>this is your Dashbord</Name>
    </PartCotainer>
  );
};

export default UserDashbord;
