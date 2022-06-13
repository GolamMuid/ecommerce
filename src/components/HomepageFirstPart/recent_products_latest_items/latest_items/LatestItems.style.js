import styled from "styled-components";

export const LatestItemsContainer = styled.div`
`
export const LatestItemsTitle = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding-bottom: 10px;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
`
export const LatestItemsProductsContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
row-gap: 10px;
column-gap: 10px;
padding: 10px 0;
@media (max-width: 768px) {
    display: grid;
grid-template-columns: 1fr 1fr;
}
`
export const LatestItemsProduct = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
border: solid 1px ${props => props.theme.color.borderPrimary};
`
export const LatestItemsProductImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
max-height: 100px;
max-width: 100%;
}
`
export const LatestItemsProductDetailContainer = styled.div`
padding: 10px;
`
export const LatestItemsProductName = styled.div`
font-size: 1rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 10px 0;
`
export const LatestItemsProductsRating = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.rating};
cursor: pointer;`

export const LatestItemsProductPriceNew = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 10px 0;
`
export const LatestItemsProductPriceOld = styled.span`
font-size: 0.825rem;
font-weight: 500;
color: ${props => props.theme.color.primary};
text-decoration: line-through;
padding-left: 10px;
`
export const SeeMoreButton = styled.button`
display: block;
margin: 10px auto;
background-color: ${props => props.theme.color.invertedBg};
font-size: 1rem;
padding: 10px;
color: ${props => props.theme.color.invertedPrimary};
border-radius: 6px;
transition: all 0.3s ease;
cursor: pointer;
&:hover{
    background-color: ${props => props.theme.color.bg};
    color: ${props => props.theme.color.secondary};
}
`

