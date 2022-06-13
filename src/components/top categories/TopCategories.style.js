import styled from "styled-components";

export const TopCategoriesContainer = styled.div`
padding: 40px;
`
export const TopCategoriesTitle = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding-bottom: 10px;
margin-bottom: 20px;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary} ;;
`
export const TopCategoriesItemContainer = styled.div`
padding: 10px;
`
export const TopCategoriesItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
background-color: ${props => props.theme.color.bgTertiary};
border-radius: 10px;
border: none;
`
export const TopCategoriesImage = styled.div`
img{
    min-height: 100px;
    max-width: 100%;
    max-height: 140px;
}
`
export const TopCategoriesName = styled.div`
font-size: 1rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 10px;
`