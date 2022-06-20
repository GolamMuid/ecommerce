import styled from "styled-components";

export const ProductDescriptionReviewAndSameStoreContainer = styled.div`
display: grid;
grid-template-columns: 4fr 1fr;
column-gap: 10px;
`

export const ProductInfoAndReviewContainer = styled.div`
padding: 10px;
`

export const ProductInfoContainer = styled.div`
`

export const ProductInfoTitle = styled.div`
font-size: 1.125rem;
font-weight: 500;
color:  ${props => props.theme.color.secondary};
padding: 10px 0;
`
export const ProductInfo = styled.div`
font-size: 0.825rem;
font-weight: 400;
color: ${props => props.theme.color.secondary};
`
export const ProductReviewSectionContainer = styled.div`
`
export const ProductRating = styled.div`
font-size: 2rem;
color: ${props => props.theme.color.secondary};
padding: 6px 0;
`
export const ProductRatingStars = styled.div`
font-size: 1.325rem;
color: ${props => props.theme.color.rating};
padding: 6px 0;
`
export const ProductReviewNumbers = styled.div`
font-size: 0.825rem;
font-weight: 400;
color: ${props => props.theme.color.primary};
padding: 6px 0;
`
export const ProductReviewTitle = styled.div`
font-size: 0.825rem;
font-weight: 400;
color: ${props => props.theme.color.secondary};
padding: 6px 0;
border-top: solid 1px ${props => props.theme.color.borderPrimary};
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
`
export const ProductReviewContainer = styled.div`
padding: 10px;
`
export const ReviewUsername = styled.div`
font-size: 0.825rem;
font-weight: 400;
color: ${props => props.theme.color.secondary};
padding: 6px 0;
`
export const ReviewUserRating = styled.div`
font-size: 0.825rem;
color: ${props => props.theme.color.rating};
padding: 6px 0;
`
export const ReviewUserReview = styled.div`
font-size: 0.825rem;
font-weight: 400;
color: ${props => props.theme.color.primary};
padding: 6px 0;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
`
