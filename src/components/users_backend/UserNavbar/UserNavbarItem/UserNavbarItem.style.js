import styled from "styled-components";

export const UserNavbarItemContainer = styled.div`
  position: relative;
  /* margin: 0rem 6rem 0.2rem 2rem;
  padding-right: 1rem; */
  margin: 0rem 6rem 0rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavPicSize = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  img {
    vertical-align: middle;
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
  }
  &:hover {
  }
  /* &:hover {
    transform: scale(1.1);
  } */
`;

export const LogoutMenuTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.primary};
  padding: 26px 16px;
  text-transform: uppercase;
  /* position: relative; */
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.color.invertedPrimary};
    background-color: ${(props) => props.theme.color.invertedBg};
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  background-color: #ffffff;
  top: 4.5rem;
  display: none;
  padding: 0.5rem 1.5rem;
  ${UserNavbarItemContainer}:hover & {
    display: block;
  }
  box-shadow: 10px 10px 18px 4px rgba(0, 0, 0, 0.4);
`;
export const ProfileContainer = styled.div`
  display: grid;
`;
export const PicturePart = styled.div`
  display: grid;
  gap: 0.3rem;
  padding: 1rem;
`;
export const LogoutPart = styled.div`
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
`;

export const DropHorizontalline = styled.hr`
  display: block;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 0.1rem;
  border-radius: 0.8rem;
  border: none;
  background-color: grey;
`;

export const DropPicSize = styled.div`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    width: 6.125rem;
    height: 6.125rem;
    border-radius: 50%;
  }
`;
export const NameSize = styled.h5`
  text-align: center;
`;
export const MenuNameSize = styled.div`
  text-align: left;
  color: "black";
  cursor: pointer;
`;
export const IdSize = styled.h6`
  text-align: center;
`;
export const ProfileButton = styled.button`
  text-align: center;
  background: #0b7dda;
  border: none;
  border-radius: 1rem;
  margin-top: 0.5rem;
  padding: 0.4rem;
`;
export const LogOutButton = styled.button`
  text-align: center;
  background: #ffffff;
  cursor: pointer;
  border: none;
  border: 1px solid red;
  border-radius: 1rem;
  margin-top: 0.5rem;
  padding: 0.4rem;
`;
