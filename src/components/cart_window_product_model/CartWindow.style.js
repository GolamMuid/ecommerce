import styled from "styled-components";

export const CartWindowContainer = styled.div`
position: fixed;
right: 0;
top: 30%;
border-top-left-radius: 6px;
border-bottom-left-radius: 6px;
box-shadow: 0px 0px 26px 4px rgba(0,0,0,0.69);
-webkit-box-shadow: 0px 0px 26px 4px rgba(0,0,0,0.69);
-moz-box-shadow: 0px 0px 26px 4px rgba(0,0,0,0.69);
z-index: 10;
cursor: pointer;
width: 70px;
transition: all 0.3s ease;
`
export const CartIcon = styled.div`
padding: 10px;
font-size: 1.325rem;
background-color: rgba(0, 0, 0, 0.7);
border-top-left-radius: 6px;
display: flex;
flex-direction: column;
align-items: center;
color: white;
gap: 6px;
-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
export const CartItemQty = styled.div`
text-align: center;
font-size: 0.825rem;
font-weight: 400;
`
export const CartTotal = styled.div`
background-color: white;
color: black;
text-align: center;
border-bottom-left-radius: 6px;
padding: 2px;
`

export const CartViewContainer = styled.div`
position: fixed;
top: 40px;
right: 70px;
width: 310px;
height: 90vh;
border: solid 2px ${props => props.theme.color.borderPrimary};
z-index: 5;
background-color: ${props => props.theme.color.bg};
padding: 10px;
`
export const CartContents = styled.div`
position: relative;
height: 100%;
`
export const CartEmpty = styled.div`
text-align: center;
margin-top: 20px;
font-size: 1.125rem;
font-weight: 500;
`
export const CartProductContainer = styled.div`
padding-bottom: 10px;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
margin: 10px;
max-height: calc(100% - 100px);
overflow-y: auto;
`
export const CartTotalAndButtonContainer = styled.div`
position: absolute;
bottom:0 ;
width: 100%;
`
export const TotalContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
font-size: 1rem;
font-weight: 500;
padding: 10px;
`
export const TotalText = styled.div`
`
export const TotalAmount = styled.div`
text-align: right;
`
export const CartButtonContainer = styled.div`
display: grid;
grid-template-columns:  1fr 1fr;
column-gap: 6px;
`

export const CartButton = styled.button`
display: block;
margin: 10px auto;
width: 80%;
padding: 8px ;
font-family: 'Rubik', sans-serif;;
background-color: ${props => props.theme.color.invertedBg};
color: ${props => props.theme.color.invertedPrimary};
border-radius: 16px;
border: none;
cursor: pointer;
text-transform: uppercase;
font-size: 0.825rem;
font-weight: 500;
transition: all 0.3s ease;
&:hover{
    background-color: ${props => props.theme.color.bg};
color: ${props => props.theme.color.secondary};
outline: solid 2px ${props => props.theme.color.secondary};
}
`