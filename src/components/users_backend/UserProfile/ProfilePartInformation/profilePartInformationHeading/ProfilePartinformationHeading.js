import React from "react";
import HeadingName from "./HeadingName";
import HeadingPic from "./HeadingPic";
import {
  ProfilePartHeadigContainer,
  UpdateButton,
} from "./ProfilePartinformationHeading.style";

const ProfilePartinformationHeding = () => {
  return (
    <ProfilePartHeadigContainer>
      <HeadingPic />
      <HeadingName />
      <UpdateButton>Update</UpdateButton>
    </ProfilePartHeadigContainer>
  );
};

export default ProfilePartinformationHeding;
