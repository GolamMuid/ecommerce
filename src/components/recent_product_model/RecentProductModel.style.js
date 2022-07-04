import styled from 'styled-components'

export const RecentProductModelContainer = styled.div`
border: solid 1px ${props => props.theme.color.borderPrimary};
a:link , a:active, a:visited{
    color: ${props => props.theme.color.primary};
}
a:hover{
    color: ${props => props.theme.color.invertedPrimary};
}
`
export const ImageAndNameContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`
export const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    max-width: 100%;
    max-height: 200px;
}
`
export const NameAndPriceContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
`
export const Category = styled.div`
font-size: 0.825rem;
font-weight: 400;
color: ${props => props.theme.color.primary};
text-transform: uppercase;
padding: 10px;
`
export const ProductName = styled.div`
font-size: 1rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 10px;
`
export const ProductRating = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.rating};
padding: 10px;
cursor: pointer;
`
export const ProductPriceContainer = styled.div`
display: flex;
align-items: baseline;
gap: 10px;
padding-bottom: 10px;
padding-left: 10px;
`
export const OldPrice = styled.div`
font-size: 0.825rem;
font-weight: 500;
color: ${props => props.theme.color.primary};
text-decoration: line-through;
`
export const CurrentPrice = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
`
export const CartViewWishlistContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 4px;
padding-bottom: 10px;
`
export const CartViewWishlist = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: ${props => props.theme.color.primary};
border: solid 1px ${props => props.theme.color.borderPrimary};
padding: 4px 2px;
cursor: pointer;
opacity: 0;
visibility: hidden;
transition: all 0.3s ease;
&:hover{
    color: ${props => props.theme.color.invertedPrimary};
    background-color: ${props => props.theme.color.invertedBg};;
}
${RecentProductModelContainer}:hover &{
    visibility: visible;
    opacity: 1;
}
`
