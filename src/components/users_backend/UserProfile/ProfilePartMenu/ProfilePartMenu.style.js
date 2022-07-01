import styled from "styled-components";

export const ProfilePartMenuContainer = styled.div`
  margin-left: 245px;
  margin-top: 25px;
  margin-right: 5px;
  @media (max-width: 768px) {
    margin-left: 68px;
    margin-right: 5px;
  }
`;
export const ProfilePartMenuItem = styled.button`
  /* display: inline-block; */
  border-radius: 5px;
  padding: 0.2rem 0rem;
  margin: 0.7rem 0rem 0.7rem 1rem;
  /* width: 19rem; */
  width: 95%;
  background: transparent;
  /* color: black; */
  border: 2px solid #ffffff;
  /* box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%); */

  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -webkit-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -moz-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProfilePartMenuHeding = styled.h1`
  font-size: 21px;
  padding: 4px;
  text-align: left;
  margin-left: 15px;
`;
export const ProfilePartMenuDiscription = styled.p`
  font-size: 14px;
  padding: 5px;
  text-align: left;
  margin-left: 15px;
`;
