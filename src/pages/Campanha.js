import React from "react";
import {
  Box,
  Br,
  CGrid,
  Container,
  Div,
  Form,
  P,
  Paragrafo,
  Section,
  Span,
  TituloPrincipal,
} from "../styles/tags";
import Button from "../components/form/button/Button";
import Input, { InputGroup } from "../components/form/input/Input";

const Campanha = () => {
  return (
    <Section>
      <Container>
        <CGrid grid="1fr" padding="60px 0">
          <TituloPrincipal>
            Configurando sua <Span>Campanha</Span>
          </TituloPrincipal>

          <Paragrafo>
            Nos próximos passos iremos programar e iniciar a sua{" "}
            <Span>Campanha</Span>
          </Paragrafo>

          <Div style={{ width: "100%", maxWidth: "1000px" }}>
            <Form
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "10px",
              }}
            >
              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Nicho de busca"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Alcance"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Mais informações"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>
            </Form>
          </Div>

          <Div style={{ width: "100%", maxWidth: "1000px" }}>
            <Form
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "10px",
                marginBottom: "34px",
              }}
            >
              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Nicho de busca"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Alcance"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Mais informações"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>
            </Form>
          </Div>

          <Box
            style={{
              width: "100%",
              maxWidth: '1000px',
              borderRadius: "10px",
              background: "#CDCDCD",
              boxShadow:
                "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              padding: '1rem',
            }}
          >
            <P
              style={{
                width: 'max-content',
                borderRadius: '10px',
                background: '#FFF',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                color: '#25804F',
                padding: '1rem',
                margin: 'auto 0 2rem auto'
              }}
              fontSize={1.25}
            >
              Promoção imperdível! Feijoada completa por apenas <Br /> R$59,90! Quartas
              e sábados, das 12:00 às 16:00. Não deixe <Br /> de experimentar essa
              delícia!
            </P>
            <Div style={{ width: "100%" }}>
              <Form
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "10px",
                  padding: '0'
                }}
              >
                <InputGroup background="#fff" border="solid 1px #4B4B4B">
                  <Input
                    placeholder="Digite a mensagem a ser disparada..."
                    cor="#2171AC"
                    corplaceholder="#2171AC"
                  />
                </InputGroup>

                <Button
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
          </Box>
        </CGrid>
      </Container>
    </Section>
  );
};

export default Campanha;
