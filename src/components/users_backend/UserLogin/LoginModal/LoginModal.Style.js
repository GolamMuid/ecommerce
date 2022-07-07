import styled from "styled-components";

export const LoginModalContainer = styled.div`
  display: ${(p) => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.6);
`;

export const LoginContentConainer = styled.div`
  position: fixed;
  text-align: center;
  background: white;
  width: 33%;
  height: auto;
  margin-top: 1rem;
  top: 40%;
  left: 50%;
  /* padding: 1rem; */
  transform: translate(-50%, -50%);
`;
export const LoginCloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 0;
  font-size: 2.2rem;
  font-weight: bold;
  background: none;
  border: none;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
