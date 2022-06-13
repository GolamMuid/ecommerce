import styled from 'styled-components'

export const FooterLocationContainer = styled.div`
padding: 10px;
`
export const LocationTitle = styled.div`
color: ${props => props.theme.color.invertedPrimary};
font-size: 1rem;
font-weight: 500;
padding-bottom: 10px;
@media (max-width: 768px ) {
    padding-left: 10px;
}
`
export const Location = styled.div`
padding-bottom: 20px;
font-size: 0.875rem;
color: ${props => props.theme.color.invertedPrimary};
line-height: 1.5;
@media (max-width: 768px) {
    padding: 10px;
}
`
export const PaymentMethodContainer = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
padding: 20px 0px;
@media (max-width: 768px) {
    display: flex;
}

img{
    height: 100%;
    width: 100%;
    object-fit: contain;
    padding: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.2);
    }
    @media (max-width: 768px) {
        max-width: 60px;
    }
   
}
`