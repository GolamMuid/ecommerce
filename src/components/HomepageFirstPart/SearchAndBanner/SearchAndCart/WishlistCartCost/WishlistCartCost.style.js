import styled from 'styled-components'

export const WishlistCartCostContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 38px;
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