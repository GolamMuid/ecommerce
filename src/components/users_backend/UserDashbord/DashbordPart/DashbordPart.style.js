import styled from "styled-components";

export const DashbordPartContainer = styled.div`
  /* border: 1px solid green; */
  display: grid;
  padding: 1rem;
`;
export const DashbordCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-left: 14.5rem;
  margin-right: 0.7rem;
  margin-bottom: 1rem;
  padding: 0.1rem;
  @media (max-width: 768px) {
    margin-left: 68px;
  }
`;
export const DashbordTotalCard = styled.div`
  display: grid;
  border-radius: 0.2rem;
  padding: 1rem 0.5rem 01.5rem 0.6rem;
  gap: 0.5rem;
  background: rgb(80, 53, 136);
  background: linear-gradient(
    266deg,
    rgba(80, 53, 136, 1) 51%,
    rgba(117, 92, 161, 1) 100%
  );
  color: #ffffff;
`;

export const TotalPart = styled.div`
  display: grid;
  align-items: left;
  /* border: 2px solid white; */
`;

export const DashbordOnProcessCard = styled.div`
  display: grid;
  padding: 1rem 0.5rem 01.5rem 0.6rem;
  gap: 0.5rem;
  border-radius: 0.2rem;
  /* padding: 0.5rem; */
  background: linear-gradient(
    260deg,
    rgba(8, 102, 159, 1) 51%,
    rgba(64, 171, 237, 1) 100%
  );
  color: #ffffff;
`;
export const DashbordCencelCard = styled.div`
  display: grid;
  padding: 1rem 0.5rem 01.5rem 0.6rem;
  gap: 0.5rem;
  border-radius: 0.2rem;
  background: linear-gradient(
    260deg,
    rgba(245, 103, 15, 1) 49%,
    rgba(240, 151, 96, 1) 100%
  );
  color: #ffffff;
`;

export const DashbordSummryContainer = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-left: 14.5rem;
  margin-right: 0.7rem;
  @media (max-width: 768px) {
    margin-left: 68px;
  }
`;
export const ChartContainer = styled.div`
  /* border: 1px solid green; */
  display: grid;
  padding: 1rem;
  gap: 1rem;
  z-index: -1;
  /* margin-left: 255px;
  @media (max-width: 768px) {
    margin-left: 68px;
  } */
`;
export const SummryContainer = styled.div`
  display: grid;
  gap: 1rem;
`;
export const SummryPart = styled.div`
  display: grid;
  padding: 0.4rem;
`;
export const ProductSummryPart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;
  margin: 0.5rem 0.1rem 0.1rem 0.1rem;
`;
export const ProductSummryTotal = styled.div`
  /* border: 1px solid green; */
  display: grid;
`;

export const UserReting = styled.div`
  display: grid;
  gap: 0.6rem;
  padding: 0.4rem;
`;
export const Rating = styled.div`
  color: goldenrod;
  /* padding: 0.4rem; */
`;
export const RatingNumber = styled.div`
  display: grid;

  /* padding: 0.4rem; */
`;

export const Text = styled.p`
  font-size: 28px;
  padding: 5px 10px;
  margin-left: 258px;
  margin-top: 8px;
  @media (max-width: 768px) {
    margin-left: 68px;
  }
`;
export const DiscriptionText = styled.p`
  font-size: 1rem;
  text-align: left;
`;
export const ProductText = styled.p`
  font-size: 1rem;
  text-align: right;
  color: #0366fc;
`;
export const RevenueText = styled.p`
  font-size: 1rem;
  text-align: right;
  color: green;
`;
export const CostText = styled.p`
  font-size: 1rem;
  text-align: right;
  color: #cf6332;
`;
export const ProfitText = styled.p`
  font-size: 1rem;
  text-align: right;
  color: red;
`;

export const TitelText = styled.h4`
  /* text-align: center; */
  font-size: 1rem;
`;
export const RatingTitelText = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;
export const RatingPart = styled.h4`
  /* text-align: center; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.2rem;
`;
