import styled from "styled-components";

export const CheckoutProductModelContainer = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
column-gap: 10px;
background-color: ${props => props.theme.color.bgTertiary};
padding: 10px 0;
margin-bottom: 10px;
/* width: 80%; */
`

export const CheckoutProductModelImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    max-width: 100%;
    max-height: 60px;
}
`
export const CheckoutPageProductInfo = styled.div`
font-size: 0.825rem;
color: ${props => props.theme.color.primary};
`
export const CheckoutPageProductTitle = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.secondary};
font-weight: 500;
`