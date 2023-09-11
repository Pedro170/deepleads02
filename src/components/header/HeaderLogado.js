import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Li, Ul } from "../../styles/tags";

const HeaderConteudo = styled.header`
  position: fixed;
  top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.125rem;
  background: #2171ac;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-inline: 2rem;
  z-index: 500;

  @media (max-width: 600px) {
    height: 7.125rem;
    padding-inline: 1rem;
  }
`;

const CHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 600px) {
    height: 100%;
    padding: 1rem 0;
  }

  nav {
    width: 100%;

    @media (max-width: 600px) {
      height: 100%;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 600px) {
      width: 100%;
      height: 100%;
      justify-content: initial;
      gap: 1rem;
    }
  }

  nav ul li a {
    border-radius: 10px;
    font-size: 1.5rem;
    padding: 0.625em 1rem;
    color: #fff;

    &:hover,
    &:focus {
      color: #fff;
    }

    @media (max-width: 600px) {
      background: #fff;
      font-size: 1rem;
      color: #2171ac;
      padding: 0.5rem;

      &:hover, &:focus {
        background: #25804F;
      }
    }
  }

  nav ul li a span {
    color: #2171ac;
  }
`;

export const Nav = styled.nav``;

const HeaderLogado = () => {
  return (
    <HeaderConteudo>
      <CHeader>
        <Nav>
          <Ul>
            <Li>
              <Link to="cliente/inicio">Início</Link>
            </Li>

            <Li>
              <Link to="cliente/leads">Leads</Link>
            </Li>

            <Li>
              <Link to="cliente/campanha">Campanha</Link>
            </Li>

            <Li>
              <Link to="cliente/negocio">Negócio</Link>
            </Li>

            <Li>
              <Link to="cliente/conta">Conta</Link>
            </Li>
          </Ul>
        </Nav>
      </CHeader>
    </HeaderConteudo>
  );
};

export default HeaderLogado;
