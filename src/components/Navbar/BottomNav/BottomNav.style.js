import styled from "styled-components"

const BottomNavContainer = styled.div`
display: grid;
grid-template-columns: 1fr 4fr 1fr;
height: 70px;
position: relative;
@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`
export default BottomNavContainer;