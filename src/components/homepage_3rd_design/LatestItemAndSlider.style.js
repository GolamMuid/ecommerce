import styled from "styled-components";

export const LatestItemsAndSliderContainer = styled.div`
padding: 10px 20px;
display: grid;
grid-template-columns: minmax(0, 1fr) minmax(0, 3fr);
column-gap: 20px;
@media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr)
}
`