import styled from "styled-components";

export const CartAdditionalInfoContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap: 20px;
padding: 10px;
@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`
export const InfoContainer = styled.div`
padding: 10px;
border: solid 1px ${props => props.theme.color.borderPrimary};
`
export const InfoTitle = styled.div`
text-align: center;
font-size: 1.125rem;
font-weight: 500;
padding-bottom: 10px;
margin-bottom: 20px;
color: ${props => props.theme.color.secondary};
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
text-transform: uppercase;
`
export const InfoText = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.primary};
text-align: center;
font-weight: 400;
padding: 10px;
`
export const InfoInput = styled.input`
border: none;
outline: none;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
width: 80%;
display: block;
margin: auto;
padding: 10px 0;
font-size: 1rem;
`
export const InfoButton = styled.button`
display: block;
padding: 10px 20px;
margin: 10px auto;
font-family: 'Rubik', sans-serif;;
background-color: ${props => props.theme.color.bg};
color: ${props => props.theme.color.secondary};
border-radius: 16px;
border: solid 2px ${props => props.theme.color.secondary};
cursor: pointer;
text-transform: uppercase;
font-size: 0.825rem;
font-weight: 500;
transition: all 0.3s ease;
&:hover{
    background-color: ${props => props.theme.color.invertedBg};
color: ${props => props.theme.color.invertedPrimary};
}
`
export const InfoDropdownContainer = styled.div`
text-align: center;
padding: 10px 0;
`
export const InfoLabel = styled.label`
text-transform: uppercase;
font-size: 1rem;
color: ${props => props.theme.color.primary};
padding: 10px;
`
export const InfoDropdown = styled.select`
border: none;
padding: 10px;
background-color: ${props => props.theme.color.bgTertiary};
font-size: 1rem;
`
export const InfoDropdownOptions = styled.option`
padding: 10px;
`
export const TotalContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
text-align: center;
padding: 10px;
`
export const TotalCategory = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.primary};
text-transform: uppercase;
padding: 10px;
`
export const TotalPrice = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.secondary};
font-weight: 500;
padding: 10px;
`
export const CartEmptyContainer = styled.div`
font-size: 1.5rem;
text-align: center;
padding: 40px;
`