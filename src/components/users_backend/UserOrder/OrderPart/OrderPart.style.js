import styled from "styled-components";

export const OrderPartContainer = styled.div`
  display: grid;
  margin-left: 270px;
  @media (max-width: 768px) {
    margin-left: 75px;
  }
  /* grid-template-columns: 1fr 2fr; */
`;

export const OrderContainer = styled.div`
  padding: 5px 10px;
  margin-left: 15px;
  margin-top: 20px;
  margin-right: 20px;
  display: grid;
  min-height: 125px;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 5px;
  padding: 0.5rem 0rem;
  background: transparent;
  border: 2px solid #ffffff;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);

  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -webkit-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -moz-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  /* @media (max-width: 768px) {
    margin-left: 68px;
  } */
`;

export const OrderDeliveredButton = styled.div`
  width: 110px;
  height: 32px;
  background: transparent;
  border-radius: 6px;
  /* background-color: #42ba96; */
  background: linear-gradient(to right, #ff7a35 10%, #42ba96 79%);
  color: #ffffff;
  margin: 0.5em 1em;
  padding: 0.4em 1em;
`;

export const OrderOnProcessButton = styled.div`
  width: 120px;
  height: 32px;
  background: transparent;
  border-radius: 6px;
  background-color: #ff7a35;
  color: #ffffff;
  margin: 0.5em 1em;
  padding: 0.4em 1em;
`;
export const OrderCanceledButton = styled.div`
  width: 110px;
  height: 32px;
  background: transparent;
  border-radius: 6px;
  background-color: #b74c4c;
  color: #ffffff;
  margin: 0.5em 1em;
  padding: 0.4em 1em;
`;
export const OrderSmallText = styled.p``;
export const OrderBigText = styled.h3`
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
