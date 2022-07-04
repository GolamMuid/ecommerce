import styled from "styled-components";

export const OrderCardContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin-left: 14.5rem;
  margin-right: 0.7rem;
  @media (max-width: 768px) {
    margin-left: 63px;
  }
`;

export const OrderPartContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
`;

export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.3rem;
  border-radius: 0.3rem;
  background: transparent;
  border: 2px solid #ffffff;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);

  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -webkit-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -moz-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
`;

export const OrderButtonContainer = styled.div`
  display: grid;
  padding-left: 0.7rem;
  padding-top: 0.4rem;
  padding-bottom: 0.2rem;
`;
export const OrderDeliveredButton = styled.button`
  border: none;
  width: 6rem;
  height: 2rem;
  border-radius: 0.3rem;
  background: transparent;
  padding: 0.3rem;
  /* background-color: #42ba96; */
  background: linear-gradient(to right, #ff7a35 10%, #42ba96 79%);
  color: #ffffff;
`;

export const OrderOnProcessButton = styled.button`
  border: none;
  width: 6rem;
  height: 2rem;
  border-radius: 0.3rem;
  padding: 0.3rem;
  background: transparent;
  background-color: #ff7a35;
  color: #ffffff;
`;
export const OrderCanceledButton = styled.button`
  border: none;
  width: 6rem;
  height: 2rem;
  border-radius: 0.3rem;
  padding: 0.3rem;
  background: transparent;
  background: linear-gradient(to right, #b74c4c 30%, #ff7a35 90%);

  color: #ffffff;
  /* margin: 0.4em 1em;
  padding: 0.32em 1em; */
`;
export const OrderSmallText = styled.p``;
export const OrderBigText = styled.h4`
  /* font-size: 28px; */
`;

export const PartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  width: 100%;
  font-size: 28px;
  padding: 5px 10px;
  /* margin-left: 280px;
  @media (max-width: 768px) {
    margin-left: 80px;
  } */
`;
