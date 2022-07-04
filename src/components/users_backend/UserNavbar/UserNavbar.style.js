import styled from "styled-components";

export const UserNavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 3.8fr 1.2fr;
  gap: 0.1rem;
  height: 4.45rem;
  position: fixed;
  top: 0;
  color: #404040;
  width: 100%;
  background-color: #ffffff;
  z-index: 9;
  /* height: 100px; */
  box-shadow: 0 0 25px -10px rgb(0 0 0 / 40%);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
