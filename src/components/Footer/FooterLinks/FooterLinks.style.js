import styled from 'styled-components'

export const FooterLinksContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
@media (max-width:768px) {
    grid-template-columns: 1fr;
    padding: 10px;
}
`
export const FooterLinkBox = styled.div`
padding: 10px;
`

export const FooterLinkTitle = styled.div`
color: ${props => props.theme.color.invertedPrimary};
font-size: 1rem;
font-weight: 500;
padding-bottom: 10px;
`
export const FooterLinkItem = styled.div`
color: ${props => props.theme.color.invertedPrimary};
font-size: 0.825rem;
padding: 4px 0px;
font-weight: 400;
cursor: pointer;
transition: all 0.2s ease;
&:hover{
    transform: translateX(10px);
}
`