import styled from "styled-components";

export const Sidebar = styled.div`
  height: 100vh;
`;

// --primary: #0091ff;
// --dark: #061b28;
// --gray: #756388;
// --light: #ffffff;

export const SidebarCotainer = styled.div`
  background-color: #061b28;
  width: 300px;
  height: 100vh;
  position: relative;
  color: #ffffff;
  transition: 0.4s;
`;

export const SidebarCotainerNX = styled.div`
  width: 85px;
`;

export const NavUpper = styled.div`
  display: grid;
`;
export const NavHeading = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  height: 75px;
`;

export const NavBrand = styled.div`
  display: flex;
  color: #ffffff;
`;

export const Name = styled.h1`
  margin-top: 20px;
  margin-left: 20px;
`;

export const LogoSize = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin-left: 5px;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  margin-top: 50px;
`;

export const linkRemove = styled.div`
  text-decoration: "none";
`;

export const MenuItem = styled.div`
  height: 57px;
  display: flex;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 40px;
  border-radius: 10px;
  border-color: blue;
`;
export const MenuItemImg = styled.div`
  width: 30px;
  padding-left: px;
`;

export const MenuName = styled.p`
  margin-top: 5px;
  margin-left: 20px;
  text-decoration: none;
`;
