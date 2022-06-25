import styled from 'styled-components'

export const MegaMenuTitle = styled.div`
font-size: 1rem;
font-weight: 500;
color: ${props => props.theme.color.primary};
padding: 26px 16px;
text-transform: uppercase;
/* position: relative; */
transition: all 0.3s ease-in-out;
&:hover{
    color: ${props => props.theme.color.invertedPrimary};
    background-color: ${props => props.theme.color.invertedBg};
}
`

export const MegaMenucontainer = styled.div`
width: 160vh ;
padding: 10px;
position: absolute;
left: 0;
margin-top: 25px ;
box-shadow: 10px 10px 18px 4px rgba(0,0,0,0.4);
border-radius: 0 0 6px 6px;
border: solid 2px ${props => props.theme.color.borderPrimary};
background-color: ${props => props.theme.color.bgQuaternary};
display: none;
${MegaMenuTitle}:hover &{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
`

export const MegaMenuSub = styled.div`
padding: 10px;
`
export const MegaMenuSubTitle = styled.div`
font-size: 0.875rem;
font-weight: 500;
padding: 12px 0 6px 8px;
text-transform: uppercase;
${MegaMenuTitle}:hover &{
    color: ${props => props.theme.color.primary};
}
`

export const MegaMenuSubItemContainer = styled.ul`
`

export const MegaMenuSubItem = styled.li`
font-size: 0.85rem;
font-weight: 400;
list-style: none;
color: ${props => props.theme.color.secondary};
padding: 4px 8px;
text-transform: none;
transition: all 0.2s ease;
&:hover{
    transform: translateX(10px);
}
`