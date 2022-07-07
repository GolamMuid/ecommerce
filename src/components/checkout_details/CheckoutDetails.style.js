import styled from "styled-components";

export const CheckoutDetailsContainer = styled.div`
padding: 10px 40px ;
display: grid;
grid-template-columns: 2fr 1fr;
column-gap: 20px;
@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`
export const CheckoutInformationContainer = styled.div`
`
export const CheckoutForm = styled.form`
`
export const CheckoutLabel = styled.div`
font-size: 1rem;
font-weight: 500;
padding: 10px 0;
`
export const DropdownSelect = styled.select`
border: none;
padding: 10px;
background-color: ${props => props.theme.color.bgSecondary};
font-size: 1rem;
`
export const DropdownOptions = styled.option`

`
export const GridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 20px;
`
export const GridCell = styled.div`

`
export const CheckoutInput = styled.input`
font-size: 1rem;
padding: 6px;
border: none;
background-color: ${props => props.theme.color.bgSecondary};
width: 100%;
`
export const CheckoutInputHalf = styled.input`
font-size: 1rem;
padding: 6px;
border: none;
background-color: ${props => props.theme.color.bgSecondary};
width: calc(50% - 10px) ;
`

export const OrderSummary = styled.div`
`

export const OrderSummaryTitle = styled.div`
padding: 10px;
font-size: 1.5rem;
font-weight: 500;
@media (max-width: 768px) {
    margin-top: 20px;
}
`
export const CheckoutCostContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 10px;
padding: 10px;
`
export const CheckoutCostType = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.primary};
`
export const CheckoutCostAmount = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.secondary};
font-weight: 500;
text-align: right;
`
export const CartCheckoutButton = styled.div`
padding: 10px;
margin: 20px 0;
text-align: center;
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