import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

  const Lodding = styled.div`
    animation: ${rotate360} 1.1s linear infinite;
    transform: translateZ(0);
    border-top: 0.3rem solid #ffffff;
    border-right: 0.3rem solid #3498db;
    border-bottom: 0.3rem solid #3498db;
    border-left: 0.3rem solid #3498db;
    background: transparent;
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
  `;

  return <Lodding></Lodding>;
};

export default Spinner;
