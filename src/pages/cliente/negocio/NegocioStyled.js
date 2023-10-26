import styled from "styled-components";

export const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  row-gap: 1.5rem;
  border-radius: 5px;
  border: solid 1px #fff;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 1rem;

  .texto-preco {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;

    div {
      p {
        margin-bottom: 0.5rem;
      }

      span {
        font-weight: 550;
        font-size: 1.5rem;
      }
    }

    &::before {
      content: "";
      display: block;
      width: 4px;
      height: 100%;
      border-radius: 12px;
      background: ${(props) => props.bg};
    }
  }

  .icone {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background: ${(props) => props.bg};

    img {
      width: 32px;
    }
  }

  .informacoes {
    grid-column: -1/1;
  }
`;