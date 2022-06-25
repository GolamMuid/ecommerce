import styled from "styled-components";

export const DealOfTheWeekContainer = styled.div`
padding: 10px;
object-fit: contain;
overflow: hidden;
width: 100%;
/* height: 60vh; */
  max-width: 100%;
  max-height: 400px;
  // CSS Grid/Flexbox bug size workaround
  // @see https://github.com/kenwheeler/slick/issues/982
  min-height: 0;
  min-width: 0;
  background-color: white;
`


export const DotdTitle = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.invertedPrimary};
padding: 5px 0;
text-align: center;
background-color: ${props => props.theme.color.invertedBg};
`
export const DotdProductContainer = styled.div`
padding: 10px 20px;
border: solid 1px ${props => props.theme.color.borderPrimary} ;
/* height: 332px; */
`
export const DotdCategory = styled.div`
font-size: 0.825rem;
font-weight: 400;
color: ${props => props.theme.color.primary};
padding: 0px 0px 10px 0px;
text-transform: uppercase;
`
export const DotdProductName = styled.div`
font-size: 1rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
`
export const DotdProductImage = styled.div`
img{
    max-height: 150px;
    max-width: 100%;
    cursor: pointer;
}
`
export const DotdProductPrice = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding-bottom: 10px;
`
export const DotdProductRating = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.rating};
cursor: pointer;
`
export const DotdProductSellProgress = styled.div`
padding: 10px 0px;
`
export const DotdSellStats = styled.div`
font-size : 0.825rem;
font-weight : 500;
color: ${props => props.theme.color.primary};
`

