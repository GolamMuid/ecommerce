import styled from "styled-components";

export const ProfilePartHeadigContainer = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 5fr 2fr;
  border-radius: 5px;
  padding: 0.4rem 0rem;
  margin: 1.2rem 0rem 0.7rem 1rem;
  /* width: 19rem; */
  background: transparent;
  /* color: black; */
  border: 2px solid #ffffff;
  /* box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%); */

  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -webkit-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -moz-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
`;

export const PicSize = styled.div`
  /* border-radius: 10px; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* border-bottom: solid 1px ${(props) => props.theme.color.borderPrimary}; */
  transition: all 0.3s ease;
  cursor: pointer;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
export const UpdateButton = styled.button`
  border-radius: 6px;
  padding: 0.3rem 0;
  margin-top: 35px;
  margin-right: 16px;
  height: 40px;
  font-size: 25px;
  background: transparent;
  color: black;
  border: 1px solid #4caf50;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #4caf50;
  }
`;

export const HeadingNameContainer = styled.h1`
  margin-top: 30px;
  font-size: 21px;
  padding: 5px;
  text-align: left;
  margin-left: 5px;
`;
export const HeadingNameDis = styled.p`
  font-size: 13px;
  padding: 5px;
  text-align: left;
  /* margin-left: 5px; */
`;
