import React from "react";
import icon6 from "../../../icons/77238922.jfif";
import {
  HeadingName,
  HeadingNameContainer,
  HeadingNameDis,
  PicSize,
  ProfilePartHeadigContainer,
  UpdateButton,
  UpdateButtonContainer,
} from "./ProfilePartinformationHeading.style";

const ProfilePartinformationHeding = () => {
  return (
    <ProfilePartHeadigContainer>
      <PicSize>
        <img src={icon6} alt="" srcset="" />
      </PicSize>
      <HeadingNameContainer>
        <HeadingName>MAHFUZ ISLAM</HeadingName>
        <HeadingNameDis>This is your profile</HeadingNameDis>
      </HeadingNameContainer>
      <UpdateButtonContainer>
        <UpdateButton>Update</UpdateButton>
      </UpdateButtonContainer>
    </ProfilePartHeadigContainer>
  );
};

export default ProfilePartinformationHeding;
