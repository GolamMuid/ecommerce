import styled from "styled-components";

const LoginRegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.primary};
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
  a:link,
  a:active,
  a:link,
  a:visited {
    color: ${(props) => props.theme.color.primary};
  }
`;

export default LoginRegisterContainer;
