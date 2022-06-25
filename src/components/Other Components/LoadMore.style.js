import styled from "styled-components";

export const LoadMoreContainer = styled.div`
width: 100%;
padding: 10px;
border: solid 1px ${props => props.theme.color.borderPrimary};
border-left: none;
border-right: none;
`
export const LoadMoreButton = styled.div`
text-align: center;
width: 20%;
display: block;
margin: 0 auto;
font-size: 1rem;
color: ${props => props.theme.color.secondary}; 
border: solid 2px ${props => props.theme.color.secondary};
cursor: pointer;
padding: 10px 20px;
transition: all 0.3s ease;
&:hover{
    color: ${props => props.theme.color.invertedPrimary}; 
border: solid 2px ${props => props.theme.color.secondary};
background-color: ${props => props.theme.color.invertedBg};
}
@media (max-width: 768px) {
    width: 40%;
}
`