import React from "react";
import {
  HeadingTitel,
  HeadingTiteld,
  ProfileAccountDetailsContainer,
  UpdateInfoButton,
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
      <UpdateInfoButton>Update Information</UpdateInfoButton>
    </ProfileAccountDetailsContainer>
  );
};

export default ProfileAccountDetails;
