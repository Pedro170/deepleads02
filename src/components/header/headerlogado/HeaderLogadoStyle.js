import styled from "styled-components";

export const HeaderConteudo = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  background: #fff;
  border-right: solid 1px #c3c3c3;
  transition: linear 0.3s;
  z-index: 1;

  &.ativo {
    left: -240px;
  }

  @media(max-width: 800px) {
    left: -240px;
    z-index: 20;
    &.ativo {
      left: 0px;
    }
  }
`;

export const CHeader = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 1rem 0 1rem 1rem;

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    @media (max-width: 600px) {
      width: 100%;
      height: 100%;
      justify-content: initial;
      gap: 1rem;
    }
  }

  nav ul li a,
  .button-logout {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.125rem;
    border-top: solid 1px transparent;
    background: transparent;
    border-radius: 0.25rem 0 0 0.25rem;
    padding: 0.5rem;
    color: #c3c3c3;
    transition: linear 0.3s;

    svg path {
      fill: #c3c3c3;
    }

    &:hover {
      border-color: #0b4773;
      background: #2171ac;
      color: #fff;

      svg path {
        fill: #fff;
      }
    }

    &.active {
      border-color: #0b4773;
      background: #2171ac;
      color: #fff;

      svg path {
        fill: #fff;
      }
    }
  }

  nav ul li a.ativo {
    border-color: #0b4773;
    background: #2171ac;
    color: #fff;

    svg path {
      fill: #fff;
    }
  }

  nav ul li a span {
    color: #2171ac;
  }

  .button-logout {
    width: 100%;
    background: none;
    box-shadow: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;

  img {
    display: block;
    max-width: 100%;
  }
`;

export const Perfil = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 40px);
  height: 74px;
  border-radius: 10px;
  background: #2171ac;
  box-shadow: 0px 6px 10px -4px rgba(0, 0, 0, 0.1);
  padding: 2rem 1rem 1rem 1rem;

  .box-img {
    position: absolute;
    top: -31px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: #fff;
    border: solid 4px #fff;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  span {
    display: block;
    color: #fff;

    &:nth-child(2) {
      font-size: 1.125rem;
    }

    &:nth-child(3) {
      font-size: 0.75rem;
    }

    &:nth-child(3)::before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: solid 1px #fff;
      background: #2bc48a;
      margin-right: 6px;
    }
  }
`;

export const Svg = styled.svg``;
export const Path = styled.path``;

export const ButtonLogout = styled.button`
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
`;

export const Nav = styled.nav``;
