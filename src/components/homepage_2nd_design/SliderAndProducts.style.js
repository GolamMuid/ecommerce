import styled from "styled-components";

export const SliderAndProductContainer = styled.div`
padding: 10px;
display: grid;
grid-template-columns: minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr);
column-gap: 20px;
@media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr)
}
`