import React from "react";
import { ProfilePartContainer } from "./ProfilePart.style";
import UserProfileMenu from "../ProfilePartMenu/ProfilePartMenu";
import ProfilePartInformation from "../ProfilePartInformation/ProfilePartInformaton/ProfilePartInformation";

const ProfilePart = () => {
  return (
    <ProfilePartContainer>
      <UserProfileMenu />
      <ProfilePartInformation />
    </ProfilePartContainer>
  );
};

export default ProfilePart;
