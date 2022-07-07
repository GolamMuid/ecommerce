import styled from "styled-components";

export const DiscountModalBackgroundContainer = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0, 0, 0, 0.7);
display: flex;
align-items: center;
justify-content: center;
z-index: 20;
`
export const DiscountModalContainer = styled.div`
position: relative;
background-color: white;
width: 50vw;
height: 50vh;
border-radius: 10px;
z-index: 10;
text-align: center;
`
export const ExitButton = styled.div`
position: absolute;
top: 6px;
right: 6px;
background-color: rgba(0, 0, 0, 0.6);
color: white;
padding: 4px 8px;
border-radius: 14px;
cursor: pointer;
font-weight: 700;

`

export const ModalTop = styled.div`
height: 30%;
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(5,5,48,1) 60%, rgba(30,32,103,1) 100%);
border-top-left-radius: 10px;
border-top-right-radius: 10px;
color: white;
font-size: 1.325rem;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`

export const ModalCenter = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-size: 1.125rem;
padding: 20px;
`

export const DiscountAmount = styled.div`
font-size: 3rem;
padding: 20px;
`