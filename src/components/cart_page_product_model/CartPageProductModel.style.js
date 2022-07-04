import styled from "styled-components";

export const CartPageProductModelContainer = styled.div`
display: grid;
grid-template-columns: 2fr 2fr 1fr 2fr 2fr 1fr;
column-gap: 10px;
row-gap: 10px;
align-items: center;
justify-content: center;
text-align: center;
border: solid 1px ${props => props.theme.color.borderPrimary};
margin: 10px;
`
export const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    max-width: 100%;
    max-height: 50px;
}
`
export const ProductName = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.primary};
`
export const ProductPrice = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.secondary};
font-weight: 500;
`
export const ProductQuantity = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.primary};
display: flex;
align-items: center;
justify-content: space-around;
`
export const ProductPriceTotal = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.secondary};
font-weight: 500;
`
export const DeleteButton = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.secondary};
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`