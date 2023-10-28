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
  TextareaContato,
} from "../styles/tags";
import Input from "../components/form/input/Input";
import Button from "../components/form/button/Button";
import { InputGroup } from "../components/form/input/InputStyled";
import Textarea from "../components/form/textarea/Textarea";

const Contato = () => {
  return (
    <Section>
      <Container>
        <CGrid grid="1fr" alignitems="center" padding="60px 0">
          <TituloPrincipal>
            Fale <Span>Conosco</Span>
          </TituloPrincipal>

          <Box mb={1}>
            <Img src={contato} alt="Ilustração de uma mulher com microfone" />
          </Box>

          <Box mb={1.5}>
            <P
              textalign="center"
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
              textalign="center"
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
                  type="text"
                  cor="#4b4b4b"
                  corplaceholdereholder="#4b4b4b"
                />
              </InputGroup>
              <InputGroup background="#CDCDCD">
                <Input
                  placeholder="Nome"
                  type="text"
                  cor="#4b4b4b"
                  corplaceholdereholder="#4b4b4b"
                />
              </InputGroup>

              <InputGroup background="#CDCDCD">
                <Input
                  placeholder="Assunto"
                  type="text"
                  cor="#4b4b4b"
                  corplaceholdereholder="#4b4b4b"
                />
              </InputGroup>

              <InputGroup background="#CDCDCD" border="solid 1px #C3C3C3">
                <TextareaContato
                  placeholder="Descreva..."
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
