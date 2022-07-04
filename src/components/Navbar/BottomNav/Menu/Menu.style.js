import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10%;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  @media (max-width: 1150px) {
    padding: 0px 4px;
  }
  @media (max-width: 768px) {
    display: none;
  }
  a:link,
  a:active,
  a:visited,
  a:hover {
    color: ${(props) => props.theme.color.secondary};
  }
`;
export const SubMenuContainer = styled.ul`
  position: absolute;
  margin-top: 24px;
  display: none;
  left: 0;
  width: 200px;
  transition: all 0.3s ease;
  box-shadow: 10px 10px 18px 4px rgba(0, 0, 0, 0.4);
  border-radius: 0 0 6px 6px;
  border: solid 2px ${(props) => props.theme.color.borderPrimary};
  @media (max-width: 768px) {
    position: relative;
    border: none;
    background-color: ${(props) => props.theme.color.bg};
  }
`;
export const SubMenuItem = styled.li`
  list-style: none;
  text-transform: none;
  font-weight: 400;
  padding: 10px 20px;
  font-size: 0.85rem;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => props.theme.color.bgQuaternary};
  @media (min-width: 767px) {
    &:hover {
      color: ${(props) => props.theme.color.invertedPrimary};
      background: ${(props) => props.theme.color.invertedBg};
    }
  }
  @media (max-width: 768px) {
    color: ${(props) => props.theme.color.invertedPrimary};
    background: ${(props) => props.theme.color.invertedBg};
  }
`;

export const MenuItem = styled.div`
  font-size: 1rem;
  font-weight: 500;
  /* color: #404040; */
  color: ${(props) => props.theme.color.primary};
  padding: 24px 16px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease-in-out;
  @media (min-width: 767px) {
    &:hover {
      color: ${(props) => props.theme.color.invertedPrimary};
      background-color: ${(props) => props.theme.color.secondary};
      ${SubMenuContainer} {
        display: block;
        color: ${(props) => props.theme.color.secondary};
        background-color: ${(props) => props.theme.color.bg};
        transition: all 3s ease-in-out;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 16px 0px;
    color: ${(props) => props.theme.color.invertedPrimary};
    /* &:hover{
        color: #404040;
        background-color: white;
    } */
  }
`;
export const HamburgerContainer = styled.div`
  display: none;
  position: absolute;
  right: 30px;
  top: 30px;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const MobileMenuContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.invertedBg};
  color: ${(props) => props.theme.color.invertedPrimary};
  margin-top: 70px;
  transition: all 0.3s ease;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 100px;
  z-index: 5;
  &:-webkit-scrollbar {
    display: none;
  }
`;
