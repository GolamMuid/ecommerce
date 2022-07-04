import styled from "styled-components";

export const ProfileAccountDetailsContainer = styled.div`
  border-radius: 5px;
  background: transparent;
  border: 2px solid #ffffff;

  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -webkit-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -moz-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
`;
export const HeadingTitel = styled.h1`
  margin-top: 1rem;
  font-size: 1.5rem;
  padding: 0.3rem;
  text-align: left;
  margin-left: 1rem;
`;
export const HeadingTiteld = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  padding: 0.1rem;
  text-align: left;
  margin-left: 1rem;
`;

export const UpdateInfoButton = styled.button`
  border-radius: 6px;
  padding: 0.3rem 1.2rem;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  background: transparent;
  color: black;
  border: 1px solid #4caf50;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #4caf50;
  }
`;
