import styled from "styled-components";
import cores from "./paleta";

export const P = styled.p`
  color: ${({ type }) => cores(type)};
  font-size: ${(props) => `${props.fontSize}rem`};
  text-align: ${(props) => props.textalign};
  margin-top: ${(props) => `${props.mt}rem`};
  margin-right: ${(props) => `${props.mr}rem`};
  margin-bottom: ${(props) => `${props.mb}rem`};
  margin-left: ${(props) => `${props.ml}rem`};

  @media (max-width: 600px) {
    width: initial !important;
  }
`;
export const H1 = styled.h1`
  color: ${({ type }) => cores(type)};
  margin: ${(props) => `${props.margin}`};
  text-align: ${(props) => props.textalign};
  font-size: ${(props) => `${props.fontSize}rem`};

  @media (max-width: 600px) {
    font-size: 1.8em;
  }
`;
export const H2 = styled.h2`
  color: ${({ type }) => cores(type)};
  margin-top: ${(props) => `${props.mt}rem`};
  margin-right: ${(props) => `${props.mr}rem`};
  margin-bottom: ${(props) => `${props.mb}rem`};
  margin-left: ${(props) => `${props.ml}rem`};
`;
export const H3 = styled.h3`
  color: ${({ type }) => cores(type)};
  margin-top: ${(props) => `${props.mt}px`};
  margin-right: ${(props) => `${props.mr}px`};
  margin-bottom: ${(props) => `${props.mb}px`};
  margin-left: ${(props) => `${props.ml}px`};
  text-align: ${(props) => props.textalign};
`;
export const H4 = styled.h4`
  color: ${({ type }) => cores(type)};
`;
export const H5 = styled.h5`
  color: ${({ type }) => cores(type)};
`;

export const Small = styled.small`
  color: ${({ type }) => cores(type)};
  font-size: ${(props) => props.fontSize};
`;

export const Box = styled.div`
  color: ${({ type }) => cores(type)};
  background: ${({ type }) => cores(type)};
  margin-top: ${(props) => `${props.mt}rem`};
  margin-right: ${(props) => `${props.mr}rem`};
  margin-bottom: ${(props) => `${props.mb}rem`};
  margin-left: ${(props) => `${props.ml}rem`};
  text-align: ${(props) => props.textalign};
`;

export const Span = styled.span`
  color: ${({ type }) => cores(type)};
  margin-top: ${(props) => `${props.mt}rem`};
  margin-right: ${(props) => `${props.mr}rem`};
  margin-bottom: ${(props) => `${props.mb}rem`};
  margin-left: ${(props) => `${props.ml}rem`};
  text-align: ${(props) => props.textalign};
`;

export const Img = styled.img`
  @media (max-width: 600px) {
    width: initial;
  }
`;

export const Footer = styled.footer``;

export const Table = styled.table``;

export const Ul = styled.ul``;

export const Iframe = styled.iframe``;

export const Br = styled.br``;

export const Li = styled.li`
  list-style: ${(props) => props.marker};
`;
export const CApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 46px);
`;

export const CMain = styled.main`
  flex: 1;
  position: relative;
  margin-top: 80px;

  &.logado {
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  position: relative;
  font-family: "Spectral SC", serif;
  color: #4f0222;
  line-height: 1;
  font-size: 3rem;
  margin: 0 0 1rem;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    left: -5px;
    bottom: 5px;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.2rem;
    background: #d9a511;
    z-index: -1;
  }
`;

export const Section = styled.section``;
export const Div = styled.div``;

export const CGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `${props.grid}`};
  gap: ${(props) => `${props.gap}`};
  justify-items: center;
  align-items: ${(props) => `${props.alignitems}`};
  padding: ${(props) => `${props.padding}`};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding-inline: 1rem;
  }
`;

export const DivAlbum = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    border: solid 2px #4f0222;
    border-radius: 0.4rem;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Strong = styled.strong`
  color: ${({ type }) => cores(type)};
  font-weight: ${(props) => `${props.negrito}`};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TituloPrincipal = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #4b4b4b;
  span {
    color: #2171ac;
  }
`;

export const Paragrafo = styled.p`
  font-size: 1.25rem;
  font-weight: ${(props) => `${props.negrito}`};
  color: #4b4b4b;
  margin: ${(props) => `${props.margin}`};
  text-align: center;
  span {
    color: #2171ac;
  }

  @media (max-width: 600px) {
    width: initial !important;
  }
`;

export const BoxLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 10px);
  background: ${({ type }) => cores(type)};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  max-width: ${(props) => `${props.margin}`};
  padding: 1rem;
`;

export const MainLogado = styled.div`
  position: relative;
  top: 0;
  left: 240px;
  width: calc(100% - 240px);
  transition: linear 0.3s;

  &.ativo {
    left: 0;
    width: 100%;
  }

  @media (max-width: 800px) {
    &.ativo {
      left: 0;
      width: 100%;
    }

    left: 0;
    width: 100%;
  }

  .header-conteudo {
    position: fixed;
    top: 0;
    left: 240px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% - 240px);
    height: 44px;
    background: #2171ac;
    color: #fff;
    padding-inline: 1rem;
    transition: linear 0.3s;
    z-index: 10;

    &.ativo {
      left: 0;
      width: 100%;
    }

    h2 {
      display: flex;
      align-items: center;
      column-gap: 1rem;
      font-weight: normal;
      font-size: 1.25rem;

      i {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #022945;
      }
    }

    .button-menu {
      position: fixed;
      top: 2px;
      right: 1rem;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 8px;
      background: none;
      cursor: pointer;

      i {
        font-size: 26px;
        color: #fff;
      }
    }

    @media (max-width: 800px) {
      h2 {
        gap: 0.25rem;
        font-size: 1rem;
      }

      .button-menu {
        right: 1rem;
      }

      &.ativo {
        left: 0;
        width: 100%;
      }

      left: 0;
      width: 100%;
    }

    @media (max-width: 375px) {
      padding-inline: 0.5rem;

      .button-menu {
        right: 0.5rem;
      }
    }
  }
`;

export const SectionLogado = styled.div`
  width: 100%;
  height: calc(100vh - 44px);
  margin-top: 44px;
  padding-inline: 1rem;
`;

export const Button = styled.button`
  border: none;
`;
