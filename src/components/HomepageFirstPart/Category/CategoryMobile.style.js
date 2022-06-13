import styled from 'styled-components'

export const CategoryContainer = styled.div`
z-index: 1;
`
export const CategoryTitle = styled.div`
font-size: 0.875rem; 
font-weight: 500;
color: ${props => props.theme.color.invertedPrimary};
background-color: ${props => props.theme.color.secondary};
text-align: center;
padding: 12px;
text-transform: uppercase;
cursor: pointer;
`
export const CategoryMenuContainer = styled.div`
border: solid 1px ${props => props.theme.color.borderPrimary};
border-top: none;
min-height: 20px;
`
export const CategoryItem = styled.div`
font-size: 0.75rem;
font-weight: 500;
color: ${props => props.theme.color.primary};
padding: 10px;
position: relative;
cursor: pointer;
transition: all 0.3s ease;
&:hover {
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.invertedPrimary}
}
`
export const ArrowContainer = styled.span`
position: absolute;
right: 10px;
`
export const SubMenuContainer = styled.ul`
`
export const SubMenuItem = styled.li`
list-style: none;
font-size: 0.75rem;
padding: 10px 20px 10px 20px;
position: relative;
cursor: pointer;
transition: all 0.3s ease;
&:hover {
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.invertedPrimary}
}
`
export const SubSubMenuContainer = styled.ul`
`
export const SubSubMenuItem = styled.li`
list-style: none;
font-size: 0.75rem;
padding: 10px 30px 10px 30px;
cursor: pointer;
transition: all 0.3s ease;
&:hover {
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.invertedPrimary}
}
` 