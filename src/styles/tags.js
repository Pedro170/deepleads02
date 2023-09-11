import styled from "styled-components";
import cores from "./paleta";

export const P = styled.p`
  color: ${({ type }) => cores(type)};
  font-size: ${(props) => `${props.fontSize}rem`};
  text-align: ${(props) => props.textAlign};
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
  text-align: ${(props) => props.textAlign};
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
  text-align: ${(props) => props.textAlign};
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
  text-align: ${(props) => props.textAlign};
`;

export const Span = styled.span`
  color: ${({ type }) => cores(type)};
  margin-top: ${(props) => `${props.mt}rem`};
  margin-right: ${(props) => `${props.mr}rem`};
  margin-bottom: ${(props) => `${props.mb}rem`};
  margin-left: ${(props) => `${props.ml}rem`};
  text-align: ${(props) => props.textAlign};
`;

export const Img = styled.img`
  @media (max-width: 600px) {
    width: initial;
  }
`;

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
    margin-top: 160px;
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
  align-items: ${(props) => `${props.alignItems}`};
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
  row-gap: 1.5rem;
  max-width: ${(props) => `${props.margin}`};
  padding: 1rem;
`;
export const BoxConversa = styled.div`
  position: relative;
  max-width: 814px;
  min-height: 462px;
  width: 100%;
  height: 462px;
  border-radius: 10px;
  background: #cdcdcd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;
`;

export const Conversa = styled.div`
  width: 100%;
  height: calc(100% - 65px);
  margin-bottom: 1.5rem;
  padding-left: 6rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;
