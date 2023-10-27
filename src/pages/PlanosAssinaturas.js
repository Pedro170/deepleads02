import React from "react";
import prata from "../image/planos/prata.png";
import ouro from "../image/planos/ouro.png";
import diamante from "../image/planos/diamante.png";
import {
  Box,
  CGrid,
  Container,
  Img,
  Li,
  P,
  Paragrafo,
  Section,
  Small,
  Span,
  Strong,
  TituloPrincipal,
} from "../styles/tags";
import { styled } from "styled-components";

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  height: 10rem;

  li {
    list-style: disc;
  }
`;

export const DivPlanos = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  row-gap: 0.5rem;
  justify-items: center;
`;

export const Preco = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10.625rem;
  align-items: center;
  border-radius: 10px;
  background: #2171ac;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  padding: 0.65rem 1rem;

  span {
    strong {
      font-size: 1.5rem;
    }
  }
`;

const PlanosAssinaturas = () => {
  return (
    <Section>
      <Container>
        <CGrid grid="1fr" alignitems="center" padding="60px 0 30px 0">
          <Box>
            <TituloPrincipal>
              Planos de <Span>Assinatura</Span>
            </TituloPrincipal>

            <Paragrafo margin="0 0 2rem 0">
              Com um investimento mensal a partir de R$489, você tem acesso a
              ferramentas com potencial para aumentar sua visibilidade e criar
              oportunidades de negócio 7 dias por semana.
            </Paragrafo>

            <CGrid grid="repeat(auto-fit, minmax(240px, 1fr))" gap="2rem">
              <DivPlanos>
                <Box style={{ height: "200px" }}>
                  <Img src={prata} alt="medalha de prata" />
                </Box>

                <Lista>
                  <Li>50 leads B2B por semana</Li>
                  <Li>50 interações com a IA por mês</Li>
                  <Li>50 mensagens por dia via Whatsapp</Li>
                  <Li>Dashboard Analytics</Li>
                </Lista>

                <Preco>
                  <Small>Por apenas</Small>
                  <Span>
                    <Small>R$</Small>
                    <Strong>489.</Strong>
                    <Small>00</Small>
                  </Span>
                </Preco>
              </DivPlanos>

              <DivPlanos>
                <Box style={{ height: "200px" }}>
                  <Img src={ouro} alt="medalha de prata" />
                </Box>

                <Lista>
                  <Li>100 leads B2B por semana</Li>
                  <Li>150 interações com a IA por mês</Li>
                  <Li>100 mensagens por dia via Whatsapp</Li>
                  <Li>Dashboard Analytics</Li>
                </Lista>

                <Preco>
                  <Small>Por apenas</Small>
                  <Span>
                    <Small>R$</Small>
                    <Strong>799.</Strong>
                    <Small>00</Small>
                  </Span>
                </Preco>
              </DivPlanos>

              <DivPlanos>
                <Box style={{ height: "200px" }}>
                  <Img src={diamante} alt="medalha de prata" />
                </Box>

                <Lista>
                  <Li>Mineração de Leads</Li>
                  <Li>IA com Criação de Textos</Li>
                  <Li>IA com Criação de Imagens</Li>
                  <Li>Envio de Mensagens Whatsapp</Li>
                  <Li>Dashboard Analytics</Li>
                </Lista>

                <Preco>
                  <Small>Planos Especiais</Small>
                  <Span>
                    <Strong>Sob Consulta</Strong>
                  </Span>
                </Preco>
              </DivPlanos>
            </CGrid>

            <P style={{ textAlign: "center", marginTop: '60px', color: '#2171AC' }}>
              **O cancelamento poderá ser realizado a qualquer momento sem
              custos adicionais
            </P>
          </Box>
        </CGrid>
      </Container>
    </Section>
  );
};

export default PlanosAssinaturas;
