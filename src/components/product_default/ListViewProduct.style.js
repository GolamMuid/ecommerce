import styled from 'styled-components'

export const AllProductsContainerList = styled.div`
padding: 10px;
`

export const ListViewProductContainer = styled.div`
padding: 10px;
margin-bottom: 10px;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
column-gap: 10px;
border: solid 2px ${props => props.theme.color.borderPrimary};
`
export const ImageContainer = styled.div`
display: flex;
flex-direction:  column;
align-items: center;
justify-content: center;
img{
    max-height: 200px;
    max-width: 100%;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.1);
    }
}
`
export const ProductViewButton = styled.button`
display: block;
margin: auto;
padding: 10px 20px;
width: 80%;
background-color: ${props => props.theme.color.bgSecondary};
border: none;
text-transform: uppercase;
font-size: 0.875rem;
font-weight: 600;
cursor: pointer;
z-index: 1;
`

export const ProductInformationContainer = styled.div`
padding: 10px;
border-right: solid 2px ${props => props.theme.color.borderPrimary};
`
export const CategoryAndWishlistContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
width: 100%;
color: ${props => props.theme.color.primary};
`
export const ListViewCategory = styled.div`
padding: 10px 0;
font-size: 0.75rem;
text-transform: uppercase;
`
export const ListViewWishlist = styled.div`
text-align: right;
cursor: pointer;
`
export const ListViewTitle = styled.div`
font-size: 1rem;
font-weight: 500;
padding-bottom: 10px;
color: ${props => props.theme.color.Primary};
`
export const ListViewRating = styled.div`
color: ${props => props.theme.color.rating};
padding-bottom: 10px;
`
export const ListViewProductDescription = styled.div`
font-size: 0.825rem;
color: ${props => props.theme.color.primary};
line-height: 1.3;
`
export const DeliveryInformationContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
line-height: 1.5;
padding: 0 20px;
`
export const DeliveryType = styled.div`
display: block;
margin-bottom : 10px ;
padding: 10px 20px;
/* width: 80%; */
background-color: ${props => props.theme.color.bgSecondary};
color: ${props => props.theme.color.primary};
border: none;
text-transform: uppercase;
font-size: 0.75rem;
font-weight: 500;
`
export const OldPrice = styled.div`
color: ${props => props.theme.color.primary};
font-size: 0.75rem;
text-decoration: line-through;
`
export const NewPrice = styled.div`
color: ${props => props.theme.color.secondary};
font-size: 1.125rem;
font-weight: 500;
`
export const Availability = styled.div`
color: green;
font-size: 1rem;
font-weight: 500;
padding-bottom: 10px;
`
export const AddButton = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.primary};
padding: 6px 16px;
border: solid 2px ${props => props.theme.color.primary};
border-radius: 28px;
margin-bottom: 10px;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
    color: ${props => props.theme.color.invertedPrimary};
    background-color: ${props => props.theme.color.invertedBg};
    border: solid 2px ${props => props.theme.color.invertedBg};
}
`