import styled from "styled-components";

export const UserMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding-left: 1rem;
  gap: 1rem;
`;

export const UserNavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.invertedPrimary};
    background: ${(props) => props.theme.color.invertedBg};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserMegaNavItem = styled.div`
  color: ${(props) => props.theme.color.primary};
  &:hover {
    color: ${(props) => props.theme.color.invertedPrimary};
    background-color: ${(props) => props.theme.color.invertedBg};
  }

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserSubMenuContainer = styled.ul`
  position: absolute;
  top: 4.5rem;
  display: none;
  background: white;
  /* left: 0; */
  transition: all 0.3s ease;
  box-shadow: 10px 10px 18px 4px rgba(0, 0, 0, 0.4);
  border-radius: 0 0 6px 6px;
  border: solid 2px ${(props) => props.theme.color.borderPrimary};

  color: black;
  ${UserNavItem}:hover & {
    display: block;
  }
  @media (max-width: 768px) {
    position: relative;
    border: none;
    background-color: ${(props) => props.theme.color.bg};
  }

  /* position: absolute;
  background-color: #ffffff;
  display: none;
  padding: 0.5rem 1.5rem;
  box-shadow: 10px 10px 18px 4px rgba(0, 0, 0, 0.4); */
`;

export const UserSubMenuItem = styled.li`
  list-style: none;
  text-transform: none;
  font-weight: 400;
  padding: 0.625rem 1.75rem;
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

export const UserMenuItem = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.3rem;
`;

export const UserMegaMenuTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 0rem 0.3rem;
`;

export const UserMegaMenuContainer = styled.div`
  width: 160vh;
  padding: 10px;
  position: absolute;
  top: 4.5rem;
  display: none;
  /* left: 0; */
  transition: all 0.3s ease;
  box-shadow: 10px 10px 18px 4px rgba(0, 0, 0, 0.4);
  border-radius: 0 0 6px 6px;
  border: solid 2px ${(props) => props.theme.color.borderPrimary};

  background-color: white;

  color: black;
  ${UserMegaNavItem}:hover & {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* left: 0; */
  }
`;

export const UserMegaMenuSubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  padding: 12px 0 6px 8px;
  text-transform: uppercase;
  ${UserMegaNavItem}:hover & {
    color: ${(props) => props.theme.color.primary};
  }
`;
export const LinkButton = styled.button`
  padding: 1.65rem;
  font-size: 1rem;
  border: none;
  background: #ffffff;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.invertedPrimary};
    background: ${(props) => props.theme.color.invertedBg};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
