import styled from 'styled-components'

export const SliderWrapper = styled.div`
 padding: 10px 0 10px;
 z-index: 0;
 height: 400px;
 @media (max-width: 768px) {
    height: auto;
 }
`
export const SliderItem = styled.div`
position: relative;
`
export const SliderImageContainer = styled.div`
overflow: hidden;
img{
    top: 0;
object-fit: contain;
max-height: 400px;
/* max-height: 90%; */
/* max-height: 65vh; */
/* min-width: 713px; */
width: 100%;
display: block;
height: auto;
}
`
export const SliderTextContainer = styled.div`
position: absolute;
top: 20%;
left: 5%;
`
export const SliderTextCategory = styled.div`
text-transform: uppercase;
font-size: 1rem;
font-weight: 600;
color: ${props => props.theme.color.secondary};
padding: 10px 0;
`
export const SliderTextTitle = styled.div`
font-size: 1.5rem;
font-weight: 600;
color: ${props => props.theme.color.secondary};
padding: 10px 0;
`
export const SliderTextSubtitle = styled.div`
font-size: 0.825rem;
font-weight: 500;
color: ${props => props.theme.color.primary};
padding: 6px 0;
`
export const SliderTextPrice = styled.div`
padding: 20px 0 40px 0;
`
export const SliderTextOldPrice = styled.span`
font-size: 1rem;
font-weight: 400;
color: ${props => props.theme.color.primary};
text-decoration: line-through;
padding-right: 10px;
`
export const SliderTextNewPrice = styled.span`
font-size: 1.375rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
/* text-decoration: line-through; */
`
export const SliderBuyButton = styled.button`
padding: 10px 36px;
border-radius: 30px;
border: solid 2px black;
background: transparent;
font-size: 1rem;
font-weight: 600;
text-transform: uppercase;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
    background-color: ${props => props.theme.color.invertedBg};
    color: ${props => props.theme.color.invertedPrimary}; ;
}
`