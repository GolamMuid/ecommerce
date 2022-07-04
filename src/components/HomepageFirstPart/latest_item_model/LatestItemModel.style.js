import styled from "styled-components"

export const LatestItemsProduct = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
border: solid 1px ${props => props.theme.color.borderPrimary};
position: relative;
a:link , a:active, a:visited{
    color: ${props => props.theme.color.primary};
}
a:hover{
    color: ${props => props.theme.color.invertedPrimary};
}
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
export const ViewButton = styled.div`
position: absolute;
top: 10px;
right: 10px;
color: ${props => props.theme.color.primary};
border: solid 1px ${props => props.theme.color.borderPrimary};
padding: 4px ;
background-color: ${props => props.theme.color.bg};
cursor: pointer;
opacity: 0;
visibility: hidden;
transition: all 0.3s ease;
&:hover{
    color: ${props => props.theme.color.invertedPrimary};
    background-color: ${props => props.theme.color.invertedBg};;
}
${LatestItemsProduct}:hover &{
    visibility: visible;
    opacity: 1;
}
`