import styled from "styled-components";

export const ModalContainer = styled.div`
  display: ${(p) => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.6);
`;

export const ContentConainer = styled.div`
  position: fixed;
  text-align: center;
  background: white;
  width: 50%;
  height: auto;
  top: 50%;
  left: 50%;
  padding: 2rem;
  transform: translate(-50%, -50%);
`;
export const CloseButton = styled.button`
  padding: 0.2rem 1.2rem;
  background: gainsboro;
  margin-top: 1rem;
  font-size: 28px;
`;
