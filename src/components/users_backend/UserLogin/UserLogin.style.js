import styled, { keyframes } from "styled-components";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-0.188)
  }
`;

export const LoginWrapper = styled.section`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  height: 100%;
  width: 100%;
  /* margin-top: 3rem; */
`;

export const MainContainer = styled.div`
  /* border: 2px solid green; */
  display: grid;
  gap: 0.3rem;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 0.4rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  /* max-width: 100px; */

  @media only screen and (max-width: 768px) {
  }
`;

export const WelcomeText = styled.h2`
  color: black;
  display: grid;
  text-align: center;
  padding: 1rem;
`;

export const InputContainer = styled.form`
  display: grid;
  gap: 1rem;
  padding: 0.1rem 0.1rem 0.5rem 0.1rem;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 13px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  padding: 0.7rem;
  display: grid;
  margin: 0.2rem 1rem 0rem 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 0.9rem;
  /* font-weight: bold; */
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 1rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const SubmitButton = styled.input`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  padding: 0.5rem 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-out;
  display: block;
  /* margin: 0.5rem 2rem 0.5rem 5rem; */
  margin: auto;
  :hover {
    background: rgb(0, 100, 0);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;
export const LoginButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  padding: 0.5rem 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-out;
  display: block;
  /* margin: 0.5rem 2rem 0.5rem 5rem; */
  margin: auto;
  :hover {
    background: rgb(0, 100, 0);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

export const DirectLoginPart = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
`;

export const CancelButton = styled.button`
  background: #b74c4c;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border: none;
  color: #ffffff;
  border-radius: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 3rem;
  margin: 0.5rem 3rem 1rem 3rem;
  cursor: pointer;
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
`;

export const HorizontalRule = styled.hr`
  display: block;
  margin: auto;
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
`;

// export const LoginButton = styled.input`
//   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
//   text-transform: uppercase;
//   letter-spacing: 0.2rem;
//   width: 55%;
//   height: 3rem;
//   border: none;
//   color: white;
//   border-radius: 2rem;
//   cursor: pointer;
//   padding: 14px 20px;
//   margin: 8px 0;

//   margin-top: 0.8rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease-out;
//   :hover {
//     background: rgb(0, 100, 0);
//     animation: ${jump} 0.2s ease-out forwards;
//   }
// `;
