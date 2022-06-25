import styled from 'styled-components'

export const AllProductsHeaderContainer = styled.div`
padding: 10px;
display: grid;
grid-template-columns: 1fr 1fr;
`
export const TitleAndSortContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const TitleContainer = styled.div`
font-size: 1rem;
color : ${props => props.theme.color.secondary};
font-weight: 500;
`
export const SortingContainer = styled.div`

`
export const SortingDropdownContainer = styled.select`
padding: 6px 10px;
border: solid 1px ${props => props.theme.color.borderPrimary};
color: ${props => props.theme.color.primary};
outline: none;
`
export const SortingDropdownOption = styled.option`
`

export const ListGridViewContainer = styled.div`
font-size: 2rem;
color: ${props => props.theme.color.primary};
display: flex;
align-items: center;
justify-content: center;
`

export const ViewSelector = styled.div`
padding: 0 10px;
cursor: pointer;
img{
    height: 1.125rem;
}
`