import styled from 'styled-components'

const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 70px;
cursor: pointer;

img{
   max-height: 100%;
   max-width: 100%;
   object-fit: contain; 
}
`
export default LogoContainer;