import React from "react";
import ProfilePartinformationHeding from "../profilePartInformationHeading/ProfilePartinformationHeading";
import { ProfilePartInformanionContainer } from "./ProfilePartInformaton.style";
import ProfileAccountDetails from "../ProfileAccountDetails/ProfileAccountDetails";

const ProfilePartInformation = () => {
  return (
    <ProfilePartInformanionContainer>
      <ProfilePartinformationHeding />
      <ProfileAccountDetails />
    </ProfilePartInformanionContainer>
  );
};

export default ProfilePartInformation;
