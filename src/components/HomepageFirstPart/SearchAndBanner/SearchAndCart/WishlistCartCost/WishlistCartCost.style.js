import styled from 'styled-components'

export const WishlistCartCostContainer = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: flex-end;
/* height: 38px; */
`
export const WishlistCartCostItmes = styled.div`
color: ${props => props.theme.color.primary};
font-size: 1.375rem;
font-weight: 600;
padding: 10px;
cursor: pointer;
position: relative;
&:nth-child(4){
    font-size: 1rem;
    font-weight: 500;
}
`
export const WishlistCartCostItmeCount = styled.div`
position: absolute;
background-color: ${props => props.theme.color.invertedBg};
color: ${props => props.theme.color.invertedPrimary};
font-size: 0.625rem;
padding: 2px 4px;
border-radius: 50%;
top: 3px;
right: 4px ;
`
export const CartViewContainer = styled.div`
position: absolute;
top: 40px;
right: 10px;
width: 310px;
min-height: 100px;
border: solid 2px ${props => props.theme.color.borderPrimary};
z-index: 5;
background-color: ${props => props.theme.color.bg};
padding: 10px;
`
export const CartProductContainer = styled.div`
padding-bottom: 10px;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
margin: 10px;
`
export const TotalContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
font-size: 1rem;
font-weight: 500;
padding: 10px;
`
export const TotalText = styled.div`
`
export const TotalAmount = styled.div`
text-align: right;
`
export const CartButtonContainer = styled.div`
display: grid;
grid-template-columns:  1fr 1fr;
column-gap: 6px;
`

export const CartButton = styled.button`
display: block;
margin: 10px auto;
width: 80%;
padding: 8px ;
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