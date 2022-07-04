import styled from "styled-components";

export const CartContainer = styled.div`
padding: 10px;
`
export const CartLabelContainer = styled.div`
display: grid;
grid-template-columns: 2fr 2fr 1fr 2fr 2fr 1fr;
column-gap: 10px;
row-gap: 10px;
align-items: center;
justify-content: center;
text-align: center;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
`
export const CartLabels = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 10px 0;
`
export const CartFullContainer = styled.div`
padding-bottom: 10px;
margin: 0 10px;
border: solid 1px ${props => props.theme.color.borderPrimary};
`
export const CartButtonContainer = styled.div`
padding: 20px;
margin-bottom: 20px ;
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
`
export const CartButton = styled.button`
padding: 10px 40px;
/* width: 20%; */
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