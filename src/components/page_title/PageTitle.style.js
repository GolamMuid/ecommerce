import styled from 'styled-components'

export const PageTitleContainer = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding-bottom: 10px;
margin-bottom: 20px;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary} ;
text-align: center;
`