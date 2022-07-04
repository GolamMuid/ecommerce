import styled from "styled-components";

export const CartWindowProductModelContainer = styled.div`
display: grid;
grid-template-columns: 2fr 2fr 1fr;
column-gap: 6px;
padding: 4px 0;
border-top: solid 1px ${props => props.theme.color.borderPrimary};
/* border-bottom: solid 1px ${props => props.theme.color.borderPrimary}; */
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
export const ProductNameAndPriceContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
`
export const ProductName = styled.div`
font-size: 0.825rem;
color: ${props => props.theme.color.primary};
`
export const ProductPrice = styled.div`
font-size: 1rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
`
export const DeleteButton = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.secondary};
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`