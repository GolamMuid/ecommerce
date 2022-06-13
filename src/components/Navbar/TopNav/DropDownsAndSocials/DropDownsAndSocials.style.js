import styled from "styled-components"

export const DropDownContainer = styled.div`
display: flex;
`

export const DropDownMenuContainer = styled.div`
border-right: solid 2px #ECE6E3 ;
padding: 0 34px;
`

export const DropDownMenu = styled.select`
background-color:  #F5F5F5;
 border: none;
 color: ${props => props.theme.color.primary};
 cursor: pointer;
`

export const DropDownOption = styled.option`
 color: ${props => props.theme.color.primary};
`

export const SocialContainer = styled.div`
display: flex;
flex: 1;
justify-content: space-around;
cursor: pointer;

`
export const SocialIcon = styled.div`
&:hover{
    color: #4867AA;
}
`
