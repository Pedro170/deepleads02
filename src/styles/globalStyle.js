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
`;

export default GlobalStyles;
