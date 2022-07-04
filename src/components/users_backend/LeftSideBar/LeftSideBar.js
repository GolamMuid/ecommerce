import React from "react";
import { NavLink } from "react-router-dom";

import {
  IconItem,
  MenuItem,
  MenuName,
  NavMenu,
  SidebarCotainer,
} from "./LeftSideBar.style";
import { FcApproval, FcClock } from "react-icons/fc";
import { FaRegTimesCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiGridAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

const LeftSideBar = () => {
  // const [isExpanded, setExpendState] = useState(false);
  return (
    <>
      <SidebarCotainer>
        {/* <NavHeading>
          <NavBrand>
            <LogoSize>
              <img src={icon1} alt="" srcset="" />
            </LogoSize>
            <Name>Mahfuz</Name>
          </NavBrand>
        </NavHeading> */}

        <NavMenu>
          <NavLink style={{ textDecoration: "none" }} to="/dashbord">
            <MenuItem>
              <IconItem>
                <BiGridAlt></BiGridAlt>
              </IconItem>
              <MenuName>Dashbord</MenuName>
            </MenuItem>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/profile">
            <MenuItem>
              <IconItem>
                <CgProfile></CgProfile>
              </IconItem>
              <MenuName>Profile</MenuName>
            </MenuItem>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/order">
            <MenuItem>
              <IconItem>
                <FiShoppingCart></FiShoppingCart>
              </IconItem>
              <MenuName>Order</MenuName>
            </MenuItem>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/order/delivered">
            <MenuItem>
              <IconItem>
                <FcApproval />
              </IconItem>
              <MenuName>Completed</MenuName>
            </MenuItem>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/order/process">
            <MenuItem>
              <IconItem>
                <FcClock />
              </IconItem>
              <MenuName>On Progress</MenuName>
            </MenuItem>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/order/cancel">
            <MenuItem>
              <IconItem>
                <FaRegTimesCircle />
              </IconItem>
              <MenuName>Canceled</MenuName>
            </MenuItem>
          </NavLink>
        </NavMenu>
      </SidebarCotainer>
    </>
  );
};

export default LeftSideBar;
