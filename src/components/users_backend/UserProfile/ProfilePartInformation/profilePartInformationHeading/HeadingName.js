import React from "react";
import {
  ProfilePartMenuDiscription,
  ProfilePartMenuHeding,
} from "../../ProfilePartMenu/ProfilePartMenu.style";
import {
  HeadingNameContainer,
  HeadingNameDis,
} from "./ProfilePartinformationHeading.style";

const HeadingName = () => {
  return (
    <HeadingNameContainer>
      MAHFUZ ISLAM
      <HeadingNameDis>This is your profile</HeadingNameDis>
    </HeadingNameContainer>
  );
};

export default HeadingName;
