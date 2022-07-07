import React from "react";
import { ProfilePartContainer, ProfilePartPage } from "./ProfilePart.style";
import UserProfileMenu from "../ProfilePartMenu/ProfilePartMenu";
import ProfilePartInformation from "../ProfilePartInformation/ProfilePartInformaton/ProfilePartInformation";

const ProfilePart = () => {
  return (
    <ProfilePartContainer>
      <ProfilePartPage>
        <UserProfileMenu />
        <ProfilePartInformation />
      </ProfilePartPage>
    </ProfilePartContainer>
  );
};

export default ProfilePart;
