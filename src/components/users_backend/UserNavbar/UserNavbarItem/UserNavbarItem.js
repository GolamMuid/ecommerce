import React from "react";
import {
  DropdownContainer,
  DropHorizontalline,
  DropPicSize,
  IdSize,
  LogoutPart,
  MenuNameSize,
  NameSize,
  NavPicSize,
  PicturePart,
  ProfileButton,
  ProfileContainer,
  UserNavbarItemContainer,
} from "./UserNavbarItem.style";
import image1 from "../../icons/77238922.jfif";
import { IoIosArrowDown } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const UserNavbarItem = () => {
  const { Logout } = useAuth();

  return (
    <UserNavbarItemContainer>
      <NavPicSize>
        <img src={image1} alt="" />
        <IoIosArrowDown />
      </NavPicSize>

      <DropdownContainer>
        <ProfileContainer>
          <PicturePart>
            <DropPicSize>
              <img src={image1} alt="" />
            </DropPicSize>
            <NameSize>Mahfuz Islam</NameSize>
            <IdSize>ID: 456734673</IdSize>
            <ProfileButton>
              <Link
                style={{ background: "#0b7dda", color: "#ffffff" }}
                to="/profile"
              >
                View Profile
              </Link>
            </ProfileButton>
          </PicturePart>

          <DropHorizontalline />
          <LogoutPart>
            <MenuNameSize>
              <FiSettings /> Setting
            </MenuNameSize>
            <MenuNameSize onClick={Logout}>
              <BiLogOut />
              Logout
              {/* <LogOutButton onClick={Logout}>Logout</LogOutButton> */}
            </MenuNameSize>
          </LogoutPart>
        </ProfileContainer>
      </DropdownContainer>
    </UserNavbarItemContainer>
  );
};

export default UserNavbarItem;
