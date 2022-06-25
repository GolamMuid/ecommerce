import styled from "styled-components";

export const ProfilePartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  padding: 1rem;
  gap: 1rem;
  @media (max-width: 768px) {
    /* margin-left: 80px; */
    /* display: grid;
    grid-template-columns: 0.2fr 2fr; */
  }
`;
