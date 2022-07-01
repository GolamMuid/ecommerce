import styled from "styled-components";

export const ProfileAccountDetailsContainer = styled.div`
  border-radius: 5px;
  padding: 0.5rem 0rem;
  margin: 1.9rem 0rem 0.7rem 1rem;
  /* width: 19rem; */
  background: transparent;
  /* color: black; */
  border: 2px solid #ffffff;
  /* box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%); */

  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -webkit-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -moz-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
`;
export const HeadingTitel = styled.h1`
  margin-top: 9px;
  font-size: 21px;
  padding: 4px;
  text-align: left;
  margin-left: 17px;
`;
export const HeadingTiteld = styled.p`
  margin-top: 9px;
  font-size: 17px;
  padding: 5px;
  text-align: left;
  margin-left: 17px;
`;

export const UpdateInfoButton = styled.button`
  border-radius: 6px;
  padding: 0.3rem 1.2rem;
  margin-top: 35px;
  margin-left: 35px;
  margin-bottom: 15px;
  font-size: 23px;
  background: transparent;
  color: black;
  border: 1px solid #4caf50;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #4caf50;
  }
`;
