import styled from "styled-components";

// --primary: #0091ff;
// --dark: #061b28;
// --gray: #756388;
// --light: #ffffff;

export const SidebarCotainer = styled.div`
  /* border: 1px solid red; */
  /* display: flex;
  flex-direction: column; */
  display: grid;
  background-color: #061b28;
  color: #ffffff;
  height: 100%;
  width: 14rem;
  position: fixed;
  @media (max-width: 768px) {
    width: 65px;
  }
  //..
`;

export const NavHeading = styled.div`
  display: grid;
  padding: 0.5rem 0rem 0.5rem 1rem;
  border: 2px solid green;
`;

export const NavBrand = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* display: flex;
  flex-direction: row;
  align-items: center; */
  gap: 1rem;
  border: 2px solid red;
  /* color: #ffffff; */
`;

export const Name = styled.h1`
  border: 2px solid green;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-left: 4px;
    margin-right: -15px;
  }
`;

export const LogoSize = styled.div`
  border: 2px solid green;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  /* border: 2px solid green; */
  display: grid;
  margin-top: 2rem;
  gap: 0.21rem;
  grid-template-rows: repeat(12, 1fr);
  @media (max-width: 768px) {
    display: grid;
    gap: 0.21rem;
  }
`;

export const MenuItem = styled.div`
  /* border: 2px solid red; */
  padding: 0.5rem 1.5rem;
  display: flex;
  gap: 1rem;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  @media (max-width: 768px) {
    display: flex;
    padding: 0.5rem 0rem;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background: #9acded;
    color: black;
  }
`;
// export const MenuItemImg = styled.div`
//   /* border: 2px solid green; */
//   /* width: 30px; */
//   @media (max-width: 768px) {
//     margin-right: 15px;
//     margin-left: -20px;
//   }
// `;
export const IconItem = styled.div`
  /* border: 2px solid green; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  /* width: 30px; */
  /* font-size: 30px; */

  @media (max-width: 768px) {
  }
`;

export const MenuName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
