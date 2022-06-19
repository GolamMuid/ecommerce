import React from "react";
import {
  ProfilePartMenuContainer,
  ProfilePartMenuDiscription,
  ProfilePartMenuHeding,
  ProfilePartMenuItem,
} from "./ProfilePartMenu.style";

const ProfilePartMenu = () => {
  return (
    <ProfilePartMenuContainer>
      <ProfilePartMenuItem>
        <ProfilePartMenuHeding>Account setting</ProfilePartMenuHeding>
        <ProfilePartMenuDiscription>
          Details about your parsonal information
        </ProfilePartMenuDiscription>
      </ProfilePartMenuItem>
      <ProfilePartMenuItem>
        <ProfilePartMenuHeding>Notification</ProfilePartMenuHeding>
        <ProfilePartMenuDiscription>
          Check your Notification
        </ProfilePartMenuDiscription>
      </ProfilePartMenuItem>
      <ProfilePartMenuItem>
        <ProfilePartMenuHeding>Password and Sucurity</ProfilePartMenuHeding>
        <ProfilePartMenuDiscription>
          Change your Password
        </ProfilePartMenuDiscription>
      </ProfilePartMenuItem>
    </ProfilePartMenuContainer>
  );
};

export default ProfilePartMenu;
