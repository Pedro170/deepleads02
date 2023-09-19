import React from "react";
import {
  Section,
  Container,
  CGrid,
  Div,
  Span,
  P,
  Small,
  Img,
} from "../styles/tags";
import styled from "styled-components";
import pessoas from "../image/negocios/pessoas.svg";
import global from "../image/negocios/global.svg";

export const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  row-gap: 1.5rem;
  border-radius: 5px;
  border: solid 1px #ddd;
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 1rem;

  .texto-preco {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;

    div {
      p {
        margin-bottom: .5rem;
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

const Negocio = () => {
  return (
    <Section>
      <Container>
        <CGrid grid="1fr" padding="60px 0">
          <CGrid
            grid="repeat(auto-fit, minmax(240px, 1fr))"
            gap="2rem"
            style={{ width: "100%" }}
          >
            <ItemBox bg="#515FD5">
              <Div className="texto-preco">
                <Div>
                  <P>Custos</P>
                  <Span>1.456</Span>
                </Div>
              </Div>

              <Div className="icone">
                <Img src={pessoas} alt="icone pessoas" />
              </Div>

              <Small className="informacoes">
                <Span>+6,5%</Span> <Span>aumento de lucro</Span>
              </Small>
            </ItemBox>

            <ItemBox bg="#8EC9CD">
              <Div className="texto-preco">
                <Div>
                  <P>Custos</P>
                  <Span>1.456</Span>
                </Div>
              </Div>

              <Div className="icone">
                <Img src={global} alt="icone global" />
              </Div>

              <Small className="informacoes">
                <Span>+6,5%</Span> <Span>aumento de lucro</Span>
              </Small>
            </ItemBox>

            <ItemBox bg="#7472D3">
              <Div className="texto-preco">
                <Div>
                  <P>Custos</P>
                  <Span>1.456</Span>
                </Div>
              </Div>

              <Div className="icone">
                <Img src={pessoas} alt="icone pessoas" />
              </Div>

              <Small className="informacoes">
                <Span>+6,5%</Span> <Span>aumento de lucro</Span>
              </Small>
            </ItemBox>

            <ItemBox bg="#6E9FF3">
              <Div className="texto-preco">
                <Div>
                  <P>Custos</P>
                  <Span>1.456</Span>
                </Div>
              </Div>

              <Div className="icone">
                <Img src={pessoas} alt="icone pessoas" />
              </Div>

              <Small className="informacoes">
                <Span>+6,5%</Span> <Span>aumento de lucro</Span>
              </Small>
            </ItemBox>
          </CGrid>
        </CGrid>
      </Container>
    </Section>
  );
};

export default Negocio;
