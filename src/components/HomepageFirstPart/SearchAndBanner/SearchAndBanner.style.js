import styled from 'styled-components'

export const SearchAndBannerContainer = styled.div`
display: grid;
grid-template-columns: minmax(0, 8fr) minmax(0, 4fr);
min-width: 0px;
max-width: 100vw;
column-gap: 10px;
overflow: hidden;
@media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr)  ;
}           
`