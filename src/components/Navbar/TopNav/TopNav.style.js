import styled from 'styled-components'

const TopNavContainer = styled.div`
display: grid;
grid-template-columns: 2fr 3fr 3fr;
color: ${props => props.theme.color.primary};
background-color: #F5F5F5;
font-size: 0.875rem;
padding: 6px;
@media (max-width: 768px) {
    display: none;   
}
`
export default TopNavContainer;