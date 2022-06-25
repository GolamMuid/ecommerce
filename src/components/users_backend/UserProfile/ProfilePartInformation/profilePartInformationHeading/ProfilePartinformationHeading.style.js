import styled from "styled-components";

export const ProfilePartHeadigContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 2fr 1.2fr;
  gap: 0.5rem;
  border-radius: 5px;
  background: transparent;

  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -webkit-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
  -moz-box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 15%);
`;

export const PicSize = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const HeadingNameContainer = styled.div`
  /* display: grid; */
`;

export const UpdateButtonContainer = styled.div`
  background: transparent;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
`;

export const UpdateButton = styled.button`
  border-radius: 0.2rem;
  background: transparent;
  color: black;
  border: 0.1rem solid #4caf50;
  padding: 0.1rem 0.8rem;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #4caf50;
  }
`;

export const HeadingName = styled.h5`
  /* padding: 5px; */
  font-size: 1.4rem;
  padding-top: 1.6rem;
  text-align: left;
`;
export const HeadingNameDis = styled.p`
  text-align: left;
`;
