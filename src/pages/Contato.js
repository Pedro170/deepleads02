import React from "react";
import contato from "../image/contato.png";
import {
  Box,
  Br,
  CGrid,
  Container,
  Form,
  Img,
  P,
  Paragrafo,
  Section,
  Span,
  TituloPrincipal,
} from "../styles/tags";
import Input, { InputGroup } from "../components/form/input/Input";
import Button from "../components/form/button/Button";

const Contato = () => {
  return (
    <Section>
      <Container>
        <CGrid grid="1fr" alignItems="center" padding="60px 0">
          <TituloPrincipal>
            Fale <Span>Conosco</Span>
          </TituloPrincipal>

          <Box mb={1}>
            <Img src={contato} alt="Ilustração de uma mulher com microfone" />
          </Box>

          <Box mb={1.5}>
            <P
              textAlign="center"
              type="second"
              fontSize="1.25"
              margin="0 0 1.5rem 0"
            >
              Envie suas dúvidas ou sugestões no email abaixo
            </P>

            <Paragrafo margin="1.5rem 0" negrito="550">
              contato@<Span>deepleads</Span>.com.br
            </Paragrafo>

            <P
              textAlign="center"
              type="second"
              fontSize="1.25"
              margin="0 0 2rem 0"
            >
              Nosso horário de atendimento é de segunda a sexta-feira <Br /> das
              8:00 às 18:00 hrs.
            </P>
          </Box>

          <Box>
            <Form>
              <InputGroup background="#CDCDCD">
                <Input
                  placeholder="Email"
                  type="email"
                  cor="#4b4b4b"
                  corPlac="#4b4b4b"
                />
              </InputGroup>

              <InputGroup background="#CDCDCD">
                <Input
                  placeholder="Assunto"
                  type="text"
                  cor="#4b4b4b"
                  corPlac="#4b4b4b"
                />
              </InputGroup>

              <Button
                fontWeight="550"
                type="first"
                color="#fff"
                style={{ marginBottom: "50px" }}
              />
            </Form>
          </Box>
        </CGrid>
      </Container>
    </Section>
  );
};

export default Contato;
