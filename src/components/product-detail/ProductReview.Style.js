import styled from "styled-components"

export const ProductReviewContainer = styled.div`
padding: 0px 10px 10px 10px ;
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