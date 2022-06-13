import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  LogoSize,
  MenuItem,
  MenuItemImg,
  MenuName,
  Name,
  NavBrand,
  NavHeading,
  NavMenu,
  NavUpper,
  SidebarCotainer,
} from "./LeftSideBar.style";
import icon1 from "../icons/Logo.svg";
import icon2 from "../icons/grid.svg";
import icon3 from "../icons/shopping-cart.svg";
import icon4 from "../icons/align-justify.svg";

const LeftSideBar = () => {
  //   const [isExpanded, setExpendState] = useState(false);
  return (
    <>
      <div>
        <SidebarCotainer>
          <NavUpper>
            <NavHeading>
              <NavBrand>
                <LogoSize>
                  <img src={icon1} alt="" srcset="" />
                </LogoSize>
                <Name>Mahfuz</Name>
              </NavBrand>
            </NavHeading>
            <NavMenu>
              <linkRemove>
                <NavLink style={{ textDecoration: "none" }} to="/profile">
                  <MenuItem>
                    <MenuItemImg>
                      <img src={icon4} alt="" srcset="" />
                    </MenuItemImg>
                    <MenuName>Profile</MenuName>
                  </MenuItem>
                </NavLink>
              </linkRemove>
              <NavLink style={{ textDecoration: "none" }} to="/dashbord">
                <MenuItem>
                  <MenuItemImg>
                    <img src={icon2} alt="" srcset="" />
                  </MenuItemImg>
                  <MenuName>Dashbord</MenuName>
                </MenuItem>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/order">
                <MenuItem>
                  <MenuItemImg>
                    <img src={icon3} alt="" srcset="" />
                  </MenuItemImg>
                  <MenuName>Order</MenuName>
                </MenuItem>
              </NavLink>
            </NavMenu>
          </NavUpper>
        </SidebarCotainer>
        ;
      </div>
    </>
  );
};

export default LeftSideBar;
