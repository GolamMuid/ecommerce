import styled from "styled-components";

export const BlogDetailContainer = styled.div`
padding: 10px 20px;
`
export const BlogDetailImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    width: 60%;
    max-height: 80vh;
}
`
export const BlogTitle = styled.div`
font-size: 1.25rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 10px 0;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
`
export const BlogDescription = styled.div`
font-size: 1rem;
font-weight: 400;
color: ${props => props.theme.color.primary};
`