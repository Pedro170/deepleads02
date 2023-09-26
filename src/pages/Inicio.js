import React from "react";
import robo from "../image/robo.png";
import copy from "../image/copy.svg";
import {
  BoxConversa,
  CGrid,
  Container,
  Conversa,
  Div,
  Form,
  Img,
  Paragrafo,
  Section,
  Span,
  TituloPrincipal,
} from "../styles/tags";
import styled from "styled-components";
import Button from "../components/form/button/Button";
import Input, { InputGroup } from "../components/form/input/Input";

export const BoxImgRobo = styled.div`
  position: absolute;
  top: 10px;
  left: -29px;
  z-index: 1;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Inicio = () => {
  const [campanha, setCampanha] = React.useState("");

  const mensagemGPT = async (e) => {
    e.preventDefault();
    const conversa = document.querySelector("#conversa");
    conversa.innerHTML += `
      <p class="texto-conversa pergunta">${campanha}</p>
    `;

    const response = await fetch(
      `https://deepleads-api.azurewebsites.net/api/generative/ia/generate/ia/message?message=${campanha} com 25 palavras&apiKey=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`
    );

    const json = await response.json();

    conversa.innerHTML += `
      <p class="texto-conversa resposta">
        <span>${json.response}</span>
        <img src="${copy}" alt="documento" />
      </p>
    `;

    setCampanha("");
  };

  return (
    <Section>
      <Container>
        <CGrid grid="1fr" padding="60px 0">
          <TituloPrincipal>
             Interagindo com nossa <Span>Inteligência Artificial</Span>
          </TituloPrincipal>

          <Paragrafo style={{ marginBottom: "2rem" }}>
            Aqui você poderá interagir com uma{" "}
            <Span>inteligência artificial</Span> que será capaz de criar
            sugestões para auxiliar você durante a criação da sua
            <Span>promoção</Span>, <Span>divulgação</Span> ou{" "}
            <Span>campanha</Span>.
          </Paragrafo>

          <Div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <BoxImgRobo>
              <Img src={robo} alt="robo" />
            </BoxImgRobo>
            <BoxConversa>
              <Conversa id="conversa"></Conversa>

              <Div style={{ width: "100%" }}>
                <Form
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "10px",
                    padding: "0",
                  }}
                >
                  <InputGroup background="#fff" border="solid 1px #4B4B4B">
                    <Input
                      placeholder="Digite em alguma palavras o que você gostaria..."
                      cor="#2171AC"
                      corplaceholder="#2171AC"
                      value={campanha}
                      onChange={({ target }) => setCampanha(target.value)}
                    />
                  </InputGroup>

                  <Button
                    onClick={mensagemGPT}
                    fontSize={1.25}
                    type="first"
                    color="#fff"
                    style={{
                      height: "40px",
                      padding: ".5rem 1.2rem",
                    }}
                  />
                </Form>
              </Div>
            </BoxConversa>
          </Div>
        </CGrid>
      </Container>
    </Section>
  );
};

export default Inicio;
