import styled from "styled-components";

export const BlogPostsContainer = styled.div`
padding: 10px;
`
export const BlogPostsTitle = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 4px 0;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
margin-bottom: 10px;
`
export const BlogPostsItemContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 10px;
`
export const BlogPostsItem = styled.div`
cursor: pointer;
`
export const BlogPostsImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    object-fit: fill;
max-height: 140px;
max-width: 100%;
border-radius: 6px;
/* padding: 10px 0; */
}
`
export const BlogPostsItemDate = styled.div`
font-size: 0.825rem;
font-weight: 400;
color: ${props => props.theme.color.primary};
padding: 10px 0px 0px 0px;
text-transform: uppercase;
`
export const BlogPostsItemTitle = styled.div`
font-size: 1rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 10px 0;
text-align: center;
`
export const BlogPostsItemDescription = styled.div`
font-size: 1rem;
font-weight: 400;
color: ${props => props.theme.color.primary};
`