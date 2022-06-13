import styled from 'styled-components'

const FooterContainer = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
padding-top: 40px;
background-color: ${props => props.theme.color.secondary};
@media (max-width:768px) {
    grid-template-columns: 1fr;
}
`
export default FooterContainer