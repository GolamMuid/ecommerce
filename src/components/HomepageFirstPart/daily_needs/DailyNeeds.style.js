import styled from "styled-components";

export const DailyNeedsSectionContainer = styled.div`
padding: 10px;
background-color: #F5F5F5;
max-width: 100vw;
`
export const DailyNeedsSectionTitle = styled.div`
font-size: 1.375rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 10px 0;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
margin-bottom: 10px;
text-align: center;
`
export const DailyNeedsTitle = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding-bottom: 10px;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
margin-bottom: 10px;
`

export const DailyNeedsProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
padding: 10px 0 20px;
column-gap: 20px;
row-gap: 20px;
@media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
}
`

// export const DailyNeedsProduct = styled.div`
// border: solid 1px ${props => props.theme.color.borderPrimary};
// padding: 10px;
// position: relative;
// `
// export const DailyNeedsProductCategory = styled.div`
// font-size: 0.825rem;
// font-weight: 400;
// color: ${props => props.theme.color.primary};
// padding: 10px 0px 0px 0px;
// text-transform: uppercase;
// `
// export const DailyNeedsProductName = styled.div`
// font-size: 1rem;
// font-weight: 500;
// color: ${props => props.theme.color.secondary};
// padding: 10px 0;
// `
// export const DailyNeedsProductImage = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
// transition: all 0.3s ease;
// cursor: pointer;
// img{
// max-height: 140px;
// max-width: 100%;
// padding: 10px 0;
// overflow: hidden;
// }
// &:hover{
//     transform: scale(1.1);
// }
// `
// export const DailyNeedsProductPrice = styled.div`
// font-size: 1.125rem;
// font-weight: 500;
// color: ${props => props.theme.color.secondary};
// padding: 12px 0;
// `
// export const DailyNeedsProductRating = styled.span`
// font-size: 1rem;
// color: ${props => props.theme.color.rating};
// text-align: end;
// cursor: pointer;
// position: absolute;
// right: 10px;
// `
// export const ProductBuyButton = styled.button`
// position: absolute;
// top: 0;
// right: 0;
// visibility: hidden;
// opacity: 0;
// background-color: ${props => props.theme.color.invertedBg};
// font-size: 1.25rem;
// padding: 8px 4px 2px;
// color: ${props => props.theme.color.invertedPrimary};
// border: solid 1px ${props => props.theme.color.secondary};
// border-radius: 4px;
// transition: all 0.3s ease;
// cursor: pointer;
// &:hover{
//     background-color: ${props => props.theme.color.bg};
//     color: ${props => props.theme.color.secondary};
// }
// @media (min-width: 767px) {
//     ${DailyNeedsProduct}:hover &{
//     top: 20px;
//     right: 10px;
//     visibility: visible;
//     opacity: 1;
// }
// }
// @media (max-width: 768px) {
//     top: 20px;
//     right: 10px;
//     visibility: visible;
//     opacity: 1;
// }
// `


