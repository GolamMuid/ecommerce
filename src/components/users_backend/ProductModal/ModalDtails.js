import React from "react";
import {
  Horizontalline,
  ItemContainer,
  ItemDetailsContainer,
  ItemDetailshedingContainer,
  ItemPicContainer,
  ModalDetailContainer,
  OrderDetailsHedingText,
  OrderDetailsText,
  OrderHedingContainer,
  OrderHedingText,
  PicDetailContainer,
  PicItemContainer,
} from "./ProductModal.Style";
import ima1 from "./shoes/shoe-2.png";

const ModalDtails = () => {
  return (
    <ModalDetailContainer>
      <ItemDetailsContainer>
        <ItemDetailshedingContainer>
          <OrderHedingText>Item Details</OrderHedingText>
        </ItemDetailshedingContainer>
        <PicItemContainer>
          <ItemPicContainer>
            <img src={ima1} alt="" />
          </ItemPicContainer>
          <PicDetailContainer>
            {/* <OrderDetailsText>Size: 11</OrderDetailsText> */}
            <OrderDetailsText>
              Size: 11
              <br />
              Color: Desert sage
            </OrderDetailsText>
          </PicDetailContainer>
        </PicItemContainer>
      </ItemDetailsContainer>
      <Horizontalline />
      <ItemDetailsContainer>
        <ItemDetailshedingContainer>
          <OrderHedingText>Order Details</OrderHedingText>
        </ItemDetailshedingContainer>
        <ItemContainer>
          <OrderHedingContainer>
            <OrderDetailsHedingText> Order Number:</OrderDetailsHedingText>
            <OrderDetailsHedingText>Date:</OrderDetailsHedingText>
            <OrderDetailsHedingText>price:</OrderDetailsHedingText>
          </OrderHedingContainer>
          <OrderHedingContainer>
            <OrderDetailsText>#BBRT-3456789</OrderDetailsText>
            <OrderDetailsText>25-6-2022</OrderDetailsText>
            <OrderDetailsText>$110</OrderDetailsText>
          </OrderHedingContainer>
        </ItemContainer>
      </ItemDetailsContainer>
      <Horizontalline />
      <ItemDetailsContainer>
        <ItemDetailshedingContainer>
          <OrderHedingText>Shipment</OrderHedingText>
        </ItemDetailshedingContainer>
        <ItemContainer>
          <OrderHedingContainer>
            <OrderDetailsHedingText>Estimated arrival:</OrderDetailsHedingText>
          </OrderHedingContainer>
          <OrderHedingContainer>
            <OrderDetailsText>05-7-2022</OrderDetailsText>
          </OrderHedingContainer>
        </ItemContainer>
      </ItemDetailsContainer>
    </ModalDetailContainer>
  );
};

export default ModalDtails;
