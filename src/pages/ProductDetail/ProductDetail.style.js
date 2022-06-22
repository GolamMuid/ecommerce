import styled from "styled-components";

export const ProductDescriptionAndSameStoreContainer = styled.div`
display: grid;
grid-template-columns: 4fr 1fr;
@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`
export const ProductDescriptionAndReviewContainer = styled.div`
`

export const SameStoreContainer = styled.div`
`
export const SameStoreItemContainer = styled.div`
@media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
}
`

export const SameStoreTitle = styled.div`
font-size: 1.125rem;
font-weight: 500;
color:  ${props => props.theme.color.secondary};
padding: 10px 0;
text-align: center;
`