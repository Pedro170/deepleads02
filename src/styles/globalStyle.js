import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  body {
    min-height: 100vh;
    background: #ffffff;
    font-family: 'Roboto', sans-serif;
    color: #333;
    overflow-x: hidden;
  }
  
  a {
    color: #333;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    font-size: 1.25rem;
  }

  .btnSalvar {
    @media(max-width: 600px) {
      margin-top: 1rem;
    }
  }

  .titulo {
    @media(max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  .area-grafico {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    padding: 1rem;
  }

  .tr-body {
    height: 40px;
    background: red;
  }

  .Chat {
    position: fixed;
    bottom: 90px;
    right: 10px;
    font-family: Arial, Helvetica, sans-serif;
    z-index: 600;
  }

  .btn-chat {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background: #2171AC;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    img {
      width: 30px;
    }

    @media(max-width: 800px) {
      width: 40px;
      height: 40px;

      img {
        width: 24px;
      }
    }
  }

  .fechar-modal {
    background: none;
    border: none;
    cursor: pointer;
  }

  .carregando {
    cursor: wait !important;
    opacity: .5;
  }

  .error-input {
    font-size: .875rem;
    margin-top: 8px;
    color: #f00;
  }

  .formulario-login .error-input {
    color: #fff !important;
  }

  .formulario-editar {
    width: 60%;

    p {
      font-size: .875rem;
      margin-top: 4px;
      color: #f00;
    }
    @media(max-width: 800px) {
      width: 100%;
    }
  }
`;

export default GlobalStyles;
