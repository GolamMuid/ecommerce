import styled from 'styled-components'

export const SearchAndDropDownContainer = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
@media (max-width: 768px) {
    padding: 20px 0 20px;
}
`
export const DropDownContainer = styled.div`
`
export const CategorySelectDropDown = styled.div`
text-align: center;
background-color: ${props => props.theme.color.bgSecondary};
padding: 10px 0px 10px 0px ;

font-size: 1rem;
font-weight: 400;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.invertedPrimary}
}
`
export const CategorySelectOptionContainer = styled.ul`
position: absolute;
z-index: 6;
background-color: ${props => props.theme.color.bg};
`
export const CategorySelectOptionItems = styled.li`
list-style: none;
padding: 8px 16px;
border: solid 1px ${props => props.theme.color.borderPrimary};
font-size: 0.75rem;
color: ${props => props.theme.color.primary};
cursor: pointer;
&:hover{
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.invertedPrimary}
}
`
export const SearchContainer = styled.div`
width: 100%;
`
export const SearchBox = styled.input`
height: 40px;
border: solid 1px ${props => props.theme.color.borderPrimary};
padding: 4px;
width: 75%;
`
export const SearchButton = styled.button`
text-align: center;
background-color: ${props => props.theme.color.bgSecondary};
padding: 10px 10px 10px 10px ;
width: 25%;
font-size: 1rem;
font-weight: 400;
cursor: pointer;
border: none;
text-transform: capitalize;
&:hover{
    background-color: ${props => props.theme.color.invertedBg};
    color: ${props => props.theme.color.invertedPrimary};
}
`