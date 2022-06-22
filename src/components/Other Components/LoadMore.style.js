import styled from "styled-components";

export const LoadMoreContainer = styled.button`
display: block;
margin: 0 auto;
font-size: 1rem;
color: ${props => props.theme.color.secondary}; 
border: solid 2px ${props => props.theme.color.secondary};
cursor: pointer;
padding: 10px 20px;
`