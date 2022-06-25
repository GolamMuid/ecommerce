import React from "react";
import {
  ChartContainer,
  DashbordCardContainer,
  DashbordCencelCard,
  DashbordOnProcessCard,
  DashbordPartContainer,
  DashbordSummryContainer,
  DashbordTotalCard,
  DiscriptionText,
  SummryContainer,
  SummryPart,
  TitelText,
  TotalPart,
  UserReting,
} from "./DashbordPart.style";
import { FaFlag } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const DashbordPart = () => {
  return (
    <DashbordPartContainer>
      <DashbordCardContainer>
        <DashbordTotalCard>
          <TotalPart>
            <FaBoxOpen />
            <DiscriptionText>Stack Total</DiscriptionText>
            <TitelText>$250000</TitelText>
          </TotalPart>
          <TotalPart>
            <DiscriptionText>Increaced by 60%</DiscriptionText>
          </TotalPart>
        </DashbordTotalCard>
        <DashbordOnProcessCard>
          <TotalPart>
            <FaDatabase></FaDatabase>
            <DiscriptionText>Stack Total</DiscriptionText>
            <TitelText>$250000</TitelText>
          </TotalPart>
          <TotalPart>
            <DiscriptionText>Increaced by 60%</DiscriptionText>
          </TotalPart>
        </DashbordOnProcessCard>
        <DashbordCencelCard>
          <TotalPart>
            <FaFlag />
            <DiscriptionText>Stack Total</DiscriptionText>
            <TitelText>$250000</TitelText>
          </TotalPart>
          <TotalPart>
            <DiscriptionText>Increaced by 60%</DiscriptionText>
          </TotalPart>
        </DashbordCencelCard>
      </DashbordCardContainer>
      <DashbordSummryContainer>
        <ChartContainer>
          <div>
            <TitelText>Recent Order</TitelText>
            <br />
            <DiscriptionText>
              chart . Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda id at rerum! Totam dicta rem cupiditate reiciendis ut
              assumenda ex non voluptatibus! Aspernatur, quidem. Officia ab
              similique eligendi voluptas. Tempore.
            </DiscriptionText>
          </div>
        </ChartContainer>
        <SummryContainer>
          <SummryPart>
            <TitelText>Summary (30 days)</TitelText>
            <br />
            <DiscriptionText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              veniam fugit omnis, nisi facilis officiis amet perspiciatis sequi
              soluta itaque oexercitationem nulla?
            </DiscriptionText>
          </SummryPart>
          <UserReting>
            <TitelText>User Reting</TitelText>
            <br />
            <DiscriptionText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qu?
            </DiscriptionText>
          </UserReting>
        </SummryContainer>
      </DashbordSummryContainer>
    </DashbordPartContainer>
  );
};

export default DashbordPart;
