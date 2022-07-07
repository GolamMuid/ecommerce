import styled from "styled-components";

export const ProfilePartContainer = styled.div`
  display: grid;
  /* @media (max-width: 768px) {
    width: 65px;
    margin-top: -2.5rem;
  } */
`;
export const ProfilePartPage = styled.div`
  display: grid;
  margin-left: 14.5rem;
  margin-right: 0.7rem;
  grid-template-columns: 1fr 2.2fr;
  padding: 1rem;
  gap: 1rem;
  @media (max-width: 768px) {
    margin-left: 4.25rem;
    display: grid;
    grid-template-columns: minmax(0, 1fr);

    margin-top: -2.5rem;
  }
`;
