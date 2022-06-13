import styled from 'styled-components'

const CategoryAndBannersContainer = styled.div`
padding: 10px;
display: grid;
grid-template-columns: 1fr 3fr;
column-gap: 20px;
@media (max-width: 768px){
    grid-template-columns: 1fr;
}
`


export default CategoryAndBannersContainer;