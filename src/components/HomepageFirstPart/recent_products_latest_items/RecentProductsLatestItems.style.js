import styled from "styled-components";

export const RecentProductsLatestItemsContainer = styled.div`
display: grid;
grid-template-columns: 3fr 1fr;
column-gap: 20px;
padding: 10px;
@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`