import React from "react";
import {
  ChartContainer,
  CostText,
  DashbordCardContainer,
  DashbordCencelCard,
  DashbordOnProcessCard,
  DashbordPartContainer,
  DashbordSummryContainer,
  DashbordTotalCard,
  DiscriptionText,
  ProductSummryPart,
  ProductSummryTotal,
  ProductText,
  ProfitText,
  Rating,
  RatingNumber,
  RatingPart,
  RatingTitelText,
  RevenueText,
  SummryContainer,
  SummryPart,
  TitelText,
  TotalPart,
  UserReting,
} from "./DashbordPart.style";
import { FaFlag } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { BsFillStarFill, BsStar } from "react-icons/bs";

const DashbordPart = () => {
  return (
    <DashbordPartContainer>
      <DashbordCardContainer>
        <DashbordTotalCard>
          <TotalPart>
            <FaBoxOpen />
            <DiscriptionText>Total Order</DiscriptionText>
            <TitelText>$25000</TitelText>
          </TotalPart>
          <TotalPart>
            <DiscriptionText>Increaced by 60%</DiscriptionText>
          </TotalPart>
        </DashbordTotalCard>
        <DashbordOnProcessCard>
          <TotalPart>
            <FaDatabase></FaDatabase>
            <DiscriptionText>On Process Order</DiscriptionText>
            <TitelText>$2500</TitelText>
          </TotalPart>
          <TotalPart>
            <DiscriptionText>Increaced by 60%</DiscriptionText>
          </TotalPart>
        </DashbordOnProcessCard>
        <DashbordCencelCard>
          <TotalPart>
            <FaFlag />
            <DiscriptionText>Cancel Order</DiscriptionText>
            <TitelText>$200</TitelText>
          </TotalPart>
          <TotalPart>
            <DiscriptionText>Increaced by 60%</DiscriptionText>
          </TotalPart>
        </DashbordCencelCard>
      </DashbordCardContainer>
      <DashbordSummryContainer>
        <ChartContainer>This is processing</ChartContainer>
        <SummryContainer>
          <SummryPart>
            <TitelText>Summary (30 days)</TitelText>

            <ProductSummryPart>
              <ProductSummryTotal>
                <DiscriptionText>Total Product</DiscriptionText>
              </ProductSummryTotal>
              <ProductSummryTotal>
                <ProductText>10</ProductText>
              </ProductSummryTotal>
            </ProductSummryPart>

            <ProductSummryPart>
              <ProductSummryTotal>
                <DiscriptionText>Total Order</DiscriptionText>
              </ProductSummryTotal>
              <ProductSummryTotal>
                <RevenueText>$12,648</RevenueText>
              </ProductSummryTotal>
            </ProductSummryPart>

            <ProductSummryPart>
              <ProductSummryTotal>
                <DiscriptionText>Running Order</DiscriptionText>
              </ProductSummryTotal>
              <ProductSummryTotal>
                <CostText>$4,646</CostText>
              </ProductSummryTotal>
            </ProductSummryPart>

            <ProductSummryPart>
              <ProductSummryTotal>
                <DiscriptionText>Cancel Order</DiscriptionText>
              </ProductSummryTotal>
              <ProductSummryTotal>
                <ProfitText>$646</ProfitText>
              </ProductSummryTotal>
            </ProductSummryPart>
          </SummryPart>
          <UserReting>
            <RatingTitelText>User Rating</RatingTitelText>
            <RatingPart>
              <Rating>
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsStar />
              </Rating>
              <RatingNumber>
                <RevenueText>(1500)</RevenueText>
              </RatingNumber>
            </RatingPart>
          </UserReting>
        </SummryContainer>
      </DashbordSummryContainer>
    </DashbordPartContainer>
  );
};

export default DashbordPart;
