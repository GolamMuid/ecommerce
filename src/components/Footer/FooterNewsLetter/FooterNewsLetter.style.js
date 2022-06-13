import styled from 'styled-components'

export const FooterNewsLetterContainer = styled.div`
padding: 20px;
padding-top: 0px;
`

export const NewsLetterTitle1 = styled.div`
font-size: 2rem;
font-weight: 400;
color: ${props => props.theme.color.invertedPrimary};
`
export const NewsLetterTitle2 = styled.div`
font-size: 2rem;
font-weight: 600;
color: ${props => props.theme.color.invertedPrimary};
`

export const NewsLetterText = styled.div`
font-size: 0.875rem;
color: ${props => props.theme.color.invertedPrimary};
padding: 20px 0px;
`
export const NewsLetterSubscribe = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`
export const NewsLetterInput = styled.input`
height: 40px;
width: 120px;
background-color: ${props => props.theme.color.bg};
border-radius: 20px 0px 0px 20px;
border: none;
padding: 6px;
`
export const NewsLetterButton = styled.button`
height: 40px;
/* background-color: ${props => props.theme.color.bgSecondary}; */
background-color: #AE0F0A;
/* color: ${props => props.theme.color.secondary}; */
color: white;
border-radius: 0px 20px 20px 0px;
border: none;
padding: 10px 4px;
text-transform: uppercase;
font-weight: 600;
font-size: 0.825rem;
cursor: pointer;
transition: all 0.2s ease;
&:hover{
    /* background-color: ${props => props.theme.color.primary}; */
    background-color: #005221;
}
`

export const FooterSocialContainer = styled.div`
display: flex;
padding: 10px 0px;
`
export const FooterSocialItems = styled.div`
color: ${props => props.theme.color.secondary};
font-size: 0.875rem;
text-transform: uppercase;
font-weight: 500;
padding: 10px;
transition: all 0.3s ease;
&:hover{
    cursor: pointer;
    transform: scale(1.2);
    &:nth-child(1){
        cursor: default;
        transform: none;
    }
}
`