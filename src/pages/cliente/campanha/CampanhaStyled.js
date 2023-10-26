import styled from "styled-components";

export const ContainerTable = styled.div`
  width: 100%;
  .table {
    width: calc(100% - 40px);
    margin: 0 auto;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

export const HeaderTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: 1.5rem;

  div {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    border-radius: 0.25rem;
    background: linear-gradient(180deg, #2171ac 0%, #145b8e 100%);
    font-size: 1rem;
    color: #fff;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

export const DispararCampanha = styled.div`
  width: calc(100% - 40px);
  border-radius: 8px;
  border: solid 1px #a6a6a6;
  background: #e1e1e1;
  margin-bottom: 3.5rem;
  padding: 1rem;

  #conteudo {
    .paragrafo-campanha {
      background: #fff;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      color: #333;
      padding: 1rem;
      margin: auto 0 1rem auto;
      font-size: 1.125rem;
    }
  }

  form {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: flex-end;
    gap: 10px;
    padding: 0;

    textarea {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background: #fff;
    }

    button {
      position: relative;
      top: -6px;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 240px);
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);

  .modal {
    position: relative;
    width: 40%;
    border-radius: 8px;
    background: #fff;
    padding: 1rem;

    form {
      label {
        margin-bottom: 1rem;
      }

      .btn-enviar-numero:disabled {
        cursor: pointer;
      }
    }

    .fechar {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      font-size: 1.5rem;
      cursor: pointer;

      &:hover {
        background: linear-gradient(
          180deg,
          #2171ac 0%,
          #145b8e 100%,
          #053456 100%
        );
        color: #fff;
      }
    }
  }
`;
