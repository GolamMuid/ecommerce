import styled from "styled-components";

export const SearchAndCartContainer = styled.div`
display: grid;
grid-template-columns: 4fr 1fr;
padding: 10px;
@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`
