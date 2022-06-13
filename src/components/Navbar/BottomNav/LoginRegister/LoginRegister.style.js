import styled from 'styled-components'

const LoginRegisterContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: ${props => props.theme.color.primary};
cursor: pointer;
@media (max-width: 768px) {
    display: none;
}
`

export default LoginRegisterContainer