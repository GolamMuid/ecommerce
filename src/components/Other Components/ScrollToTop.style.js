import styled from 'styled-components'

const ScrollToTopContainer = styled.div`
position: fixed;
bottom: 10px;
right: 10px;
padding: 10px;
color: ${props => props.theme.color.invertedPrimary};
font-size: 1rem;
background-color: ${props => props.theme.color.secondary};
cursor: pointer;
z-index: 2;
border: solid 2px white;
`
export default ScrollToTopContainer