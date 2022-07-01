import React from "react";
import {
  MenuContainer,
  OrderMenuButton,
  OrderPartMenuContainer,
} from "./OrderPartmenu.style";
import { FaRegTimesCircle } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

const OrderPartMenu = () => {
  return (
    <MenuContainer>
      <OrderPartMenuContainer>
        <OrderMenuButton>
          <FcApproval />
          Completed
        </OrderMenuButton>
        <OrderMenuButton>
          <FcClock />
          On Progress
        </OrderMenuButton>
        <OrderMenuButton>
          <FaRegTimesCircle style={{ color: "red" }} />
          Canceled
        </OrderMenuButton>
      </OrderPartMenuContainer>
    </MenuContainer>
  );
};

export default OrderPartMenu;
