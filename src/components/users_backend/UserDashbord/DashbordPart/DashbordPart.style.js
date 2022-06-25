import styled from "styled-components";

export const DashbordPartContainer = styled.div`
  display: grid;
  padding: 1rem;
`;
export const DashbordCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-left: 255px;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-left: 255px;
  @media (max-width: 768px) {
    margin-left: 68px;
  }
`;
export const ChartContainer = styled.div`
  display: grid;
  padding: 1rem;
`;
export const SummryContainer = styled.div`
  display: grid;
  gap: 1rem;
`;
export const SummryPart = styled.div`
  display: grid;
  padding: 1rem;
`;
export const UserReting = styled.div`
  display: grid;
  padding: 1rem;
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

export const TitelText = styled.h4`
  /* text-align: center; */
  font-size: 1rem;
`;
