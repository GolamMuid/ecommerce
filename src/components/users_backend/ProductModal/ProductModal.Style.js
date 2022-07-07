import styled from "styled-components";

export const ModalContainer = styled.div`
  display: ${(p) => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.6);
`;

export const ContentConainer = styled.div`
  position: fixed;
  text-align: center;
  background: white;
  width: 50%;
  height: auto;
  margin-top: 1rem;
  top: 50%;
  left: 50%;
  padding: 1rem;
  transform: translate(-50%, -50%);
`;
export const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 0;
  font-size: 2.2rem;
  font-weight: bold;
  background: none;
  border: none;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
export const ModalDetailContainer = styled.div`
  display: grid;
  gap: 0.3rem;
  //..
`;
export const ItemDetailsContainer = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  gap: 0.1rem;
  /* margin: 0.3rem; */
  //..
`;
export const ItemContainer = styled.div`
  display: grid;
  gap: 0.2rem;
  grid-template-columns: 1fr 1fr;
  //..
`;
export const PicItemContainer = styled.div`
  display: grid;
  gap: 0.2rem;
  grid-template-columns: 1.5fr 1fr;
  //..
`;
export const ItemDetailshedingContainer = styled.div`
  /* border: 2px solid red; */
  display: grid;
  margin-bottom: 0.3rem;
`;
export const ItemPicContainer = styled.div`
  display: grid;
  img {
    max-width: 100%;
    max-height: 100%;
    /* max-height: 100%; */
    /* object-fit: contain; */
  }
`;
export const PicDetailContainer = styled.div`
  display: grid;
  padding: 0.2rem;
  align-items: center;
  /* display: grid; */
  /* position: relative; */
`;
export const OrderHedingContainer = styled.div`
  /* border: 2px solid green; */
  display: grid;
  padding: 0.2rem;
  /* margin: 1rem; */
`;
export const OrderHedingText = styled.h5`
  text-align: left;
`;
export const OrderDetailsHedingText = styled.div`
  text-align: left;
`;
// export const OrderDetailsContainer = styled.div`
//   border: 2px solid red;
//   display: grid;
//   padding: 1rem;
//   margin: 1rem;
// `;
export const OrderDetailsText = styled.div`
  text-align: right;
`;

export const Horizontalline = styled.hr`
  display: block;

  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 0.1rem;
  border-radius: 0.8rem;
  border: none;
  background-color: grey;
`;

// export const BannerItem = styled.div`
// position: relative;
// cursor: pointer;
// transition: all 0.3s ease;
// img{
//     max-width: 100%;
//     /* max-height: 100%; */
//    /* object-fit: contain; */
// }
// &:hover{
//     transform: scale(1.1);
// }
