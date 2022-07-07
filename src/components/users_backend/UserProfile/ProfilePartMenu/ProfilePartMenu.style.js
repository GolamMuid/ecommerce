import styled from "styled-components";

export const ProfilePartMenuContainer = styled.div`
  margin-top: 0.1rem;
  @media (max-width: 768px) {
    margin-right: 0.7rem;
  }
`;

export const ProfilePartMenuItem = styled.div`
  border-radius: 0.3rem;
  padding: 0.6rem 0.1rem 0.6rem 0.5rem;
  margin: 0rem 0.7rem 1.3rem 0.4rem;
  /* margin: 0.7rem 0rem 0.7rem 1rem; */
  width: 95%;
  background: transparent;
  box-shadow: 0.3125rem 0.3125rem 0.3125rem 0.3125rem rgb(0 0 0 / 15%);
  -webkit-box-shadow: 0.3125rem 0.3125rem 0.3125rem 0.3125rem rgb(0 0 0 / 15%);
  -moz-box-shadow: 0.3125rem 0.3125rem 0.3125rem 0.3125rem rgb(0 0 0 / 15%);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProfilePartMenuHeding = styled.h3`
  font-size: 1rem;
  padding-bottom: 0.4rem;
  text-align: left;
`;

export const ProfilePartMenuDiscription = styled.p`
  font-size: 1rem;
  text-align: left;
`;
