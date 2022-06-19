import React from "react";
import { UpdateButton } from "../profilePartInformationHeading/ProfilePartinformationHeading.style";
import {
  HeadingTitel,
  HeadingTiteld,
  ProfileAccountDetailsContainer,
} from "./ProfileAccountDetails.style";

const ProfileAccountDetails = () => {
  return (
    <ProfileAccountDetailsContainer>
      <HeadingTitel>Your Information here</HeadingTitel>
      <HeadingTiteld>Name: Mahfuz Islam</HeadingTiteld>
      <HeadingTiteld>Email: mahfuzislam@atilimited.net</HeadingTiteld>
      <HeadingTiteld>Address: Borobari,dhamcheriny</HeadingTiteld>
      <HeadingTiteld>City: Ulipur</HeadingTiteld>
      <HeadingTiteld>District: Kurigram</HeadingTiteld>
      <HeadingTiteld>Postal Code: 5620</HeadingTiteld>
      <HeadingTiteld>Country: Bangladesh</HeadingTiteld>
      <UpdateButton>Update Information</UpdateButton>
    </ProfileAccountDetailsContainer>
  );
};

export default ProfileAccountDetails;