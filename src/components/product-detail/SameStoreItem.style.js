import styled from "styled-components";

export const SameStoreItemContainer = styled.div`
padding: 10px 10px;
border: solid 1px ${props => props.theme.color.borderPrimary};
margin: 10px 0;
cursor: pointer;
`

export const SameStoreItemImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
img{
    max-height: 100px;
    max-width: 100%;
    transition: all 0.3s ease;
    ${SameStoreItemContainer}:hover &{
        transform: scale(1.1);
    }
}
`
export const SameStoreItemName = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.primary} ;
padding: 6px 0;
`
export const SameStoreItemPrice = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.secondary};
font-weight: 500;
padding: 6px 0;
`
export const SameStoreItemRating = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.rating};
padding: 6px 0;

`