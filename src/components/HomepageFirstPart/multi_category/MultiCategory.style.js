import styled from 'styled-components'

export const MultiCategoryContainer = styled.div`
background-color: ${props => props.theme.color.bgQuaternary};
padding: 10px 10px 20px 10px;
`
export const MultiCategoryTitleContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding-bottom: 10px;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
margin-bottom: 10px;
align-items: center;
@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`
export const MultiCategoryMainTitle = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
`
export const MultiCategorySubTitleContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: end;
`
export const MultiCategorySubTitle = styled.div`
font-size: 1.125rem;
font-weight: 400;
color: ${props => props.theme.color.primary};
padding: 10px 10px;
cursor: pointer;
`
export const MultiCategoryItemContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
column-gap: 10px;
@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}
`
