import styled, { keyframes } from "styled-components";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const LoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 33px;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* height: 80vh; */
  /* width: 30vw; */
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  @media only screen and (max-width: 768px) {
    /* width: 80vw;
    height: 80vh; */
    /* width: 70%;
    height: 80vh; */
  }
`;

export const WelcomeText = styled.h2`
  color: black;
  margin: 1.4rem 0 1rem 0;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* height: 35%; */
  width: 100%;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 13px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  /* height: 3rem; */
  padding: 0.6rem;
  margin: 0.5rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const Sub = styled.input`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  /* width: 90%; */
  height: 1rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  padding: 8px 80px 20px 80px;
  margin: 15px 15px;
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(0, 100, 0);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

export const LoginButton = styled.input`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 55%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  padding: 14px 20px;
  margin: 8px 0;

  margin-top: 0.8rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(0, 100, 0);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

export const CancelButton = styled.button`
  background: #b74c4c;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 55%;
  height: 1rem;
  border: none;
  color: #ffffff;
  border-radius: 2rem;
  cursor: pointer;
  padding: 8px 20px 20px 20px;
  margin-bottom: 2rem;

  cursor: pointer;
  margin-top: 0.1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(0, 100, 0);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

export const ForgotPassword = styled.h4`
  cursor: pointer;
  color: black;
  text-align: center;
`;
export const RegistrationText = styled.h4`
  cursor: pointer;
  color: blue;
  text-align: center;
  margin: 0px 20px;
`;

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 0.5rem 0rem 1rem 0rem;
  backdrop-filter: blur(25px);
`;
