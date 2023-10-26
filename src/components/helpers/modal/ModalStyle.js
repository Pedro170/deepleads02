import styled from "styled-components";

export const ModalContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => `${props.display}`};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const CModal = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  column-gap: 1rem;
  width: max-content;
  border-radius: 5px;
  background: #fff;
  padding: 1rem;
`;