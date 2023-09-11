import React from "react";
import { Span, TituloPrincipal } from "../../styles/tags";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  width: 100vw;
  height: calc(100vh - 7.625rem + 40px);

  @media (max-width: 600px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

const NotFound = () => {
  return (
    <CNotFound>
      <TituloPrincipal style={{ margin: 0 }}>
        <Span>Error</Span> - Página não encontrada
      </TituloPrincipal>

      <Link
        style={{
          borderRadius: "5px",
          background: "#2171AC",
          padding: ".5rem 1.5rem",
          color: "#fff",
        }}
        to="/login"
      >
        voltar ao login
      </Link>
    </CNotFound>
  );
};

export default NotFound;
