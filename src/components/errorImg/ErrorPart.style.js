import styled from "styled-components";

export const ErrorPageContainer = styled.div`
  display: grid;
`;
export const ErrorImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    max-height: 400px;
    max-width: 100%;
    transition: all 0.3s ease;
    z-index: 0;
  }
  @media (max-width: 768px) {
    padding-top: 20vh;
  }
`;

export const ErrorButton = styled.button`
  border-radius: 3px;
  padding: 0.6rem;
  margin-top: 20px;
  background: transparent;
  color: red;
  border: 1px solid black;
`;
