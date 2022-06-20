import styled from "styled-components";

export const ProductDescriptionAndSameStoreContainer = styled.div`
display: grid;
grid-template-columns: 4fr 1fr;
`

export const SameStoreContainer = styled.div`

`
export const SameStoreTitle = styled.div`
font-size: 1.125rem;
font-weight: 500;
color:  ${props => props.theme.color.secondary};
padding: 10px 0;
text-align: center;
`