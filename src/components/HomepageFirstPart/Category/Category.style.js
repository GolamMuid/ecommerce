import styled from 'styled-components'

export const CategoryContainer = styled.div`
z-index: 1;
min-width: 170px;
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
export const SubMenuContainer = styled.div`
`
export const SubMenuItem = styled.div`
list-style: none;
font-size: 0.75rem;
padding: 10px 20px 10px 20px;
/* position: relative; */
cursor: pointer;
transition: all 0.3s ease;
&:hover {
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.invertedPrimary}
}
`
export const CategoryMegaMenu = styled.div`
position: absolute;
left: 25%;
top: 80px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
display: none;
transition: all 0.3s ease;
z-index: 10;
padding: 10px;
background-color: #F5F5F5;
border-radius: 6px;
border: solid 1px ${props => props.theme.color.borderPrimary};
box-shadow: 10px 10px 18px 4px rgba(0,0,0,0.4);
${SubMenuItem}:hover & {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 40px;
    width: fit-content;
    z-index: 10;
    width: calc(100vw - 30%) ;
}
`
export const CategoryMegaMenuColumns = styled.div`
padding-bottom: 10px;
`
export const CategoryMegaMenuTitle = styled.div`
font-size: 0.875rem;
font-weight: 500;
padding: 10px 0px;
text-transform: uppercase;
color: ${props => props.theme.color.secondary};
`
export const CategoryMegaMenuItem = styled.div`
font-size: 0.85rem;
font-weight: 400;
list-style: none;
color: ${props => props.theme.color.secondary};
padding: 4px 0px;
text-transform: none;
transition: all 0.2s ease;
&:hover{
    transform: translateX(10px);
}
img{
    max-height: 100px;
    max-width: 100%;
}
`