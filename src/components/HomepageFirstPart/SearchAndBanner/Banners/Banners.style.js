import styled from 'styled-components'

export const BannerContainer = styled.div`
padding: 10px;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: flex-start;
row-gap: 10px;
column-gap: 10px;
height: fit-content;
`
export const BannerItem = styled.div`
position: relative;
cursor: pointer;
transition: all 0.3s ease;
img{
    max-width: 100%;
    /* max-height: 100%; */
   /* object-fit: contain; */
}
&:hover{
    transform: scale(1.1);
}
`
export const BannerTextContainer = styled.div`
position: absolute;
top: 5%;
left: 10%;
width: 70%;
`

export const BannerCategory = styled.div`
font-size: 1rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 16px 0px;
text-transform: uppercase;
`

export const BannerText = styled.div`
font-size: 1rem;
font-weight: 400;
color: ${props => props.theme.color.primary};
line-height: 1.5;

`
export const BannerTextBold = styled.span`
font-size: 1rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
`