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


  .paragrafo-campanha {
    width: max-content;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #25804F;
    padding: 1rem;
    margin: auto 0 2rem auto;
    font-size: 1.2;
  }

  .Chat {
    position: fixed;
    bottom: 90px;
    right: 10px;
    font-family: Arial, Helvetica, sans-serif;
    z-index: 500;
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
  }

  .fechar-modal {
    background: none;
    border: none;
    cursor: pointer;
  }

  .texto-conversa {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: calc(2rem - 2px);
    line-height: 1.33;
    font-size: 1.25rem;
    padding: 1rem;
  }

  .pergunta {
    color: #C03333;
  }

  .resposta {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.5rem;
    align-items: flex-start;
    color: #25804F;

    img {
      width: 28px;
    }
  }

  .resposta:nth-child(even) {
    position: relative;
    left: -60px;
    z-index: 2;

    @media(max-width: 600px) {
      left: 0;
    }
  }
`;

export default GlobalStyles;
