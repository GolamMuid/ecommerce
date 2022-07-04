import styled from "styled-components";

export const RecentProductsContainer = styled.div`
position: relative;
padding: 10px;
`
export const RecentProductsTitle = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding-bottom: 10px;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
`
export const RecentProductsItemContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 10px 0;
column-gap: 10px;
row-gap: 10px;
@media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
}
`
export const RecentProductsItem = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
border: solid 1px ${props => props.theme.color.borderPrimary};
`
export const RecentProductsImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
max-height: 100px;
max-width: 100%;
}
`
export const RecentProductsDetailContainer = styled.div`
padding: 10px;
`
export const RecentProductsCategory = styled.div`
font-size: 0.825rem;
font-weight: 400;
color: ${props => props.theme.color.primary};
padding: 10px 0px 0px 0px;
text-transform: uppercase;
`
export const RecentProductsName = styled.div`
font-size: 1rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 10px 0;
`
export const RecentProductsRating = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.rating};
cursor: pointer;
`
export const RecentProductsPriceNew = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 10px 0;
`

export const RecentProductsPriceOld = styled.span`
font-size: 0.825rem;
font-weight: 500;
color: ${props => props.theme.color.primary};
text-decoration: line-through;
padding-left: 10px;
`
export const SeeMoreButton = styled.button`
position: absolute;
top: 0;
right: 0;
padding: 2px 6px;
border-radius: 4px;
background-color: ${props => props.theme.color.invertedBg};
font-size: 0.825rem;
color: ${props => props.theme.color.invertedPrimary};
border-radius: 6px;
transition: all 0.3s ease;
cursor: pointer;
&:hover{
    background-color: ${props => props.theme.color.bg};
    color: ${props => props.theme.color.secondary};
}
`