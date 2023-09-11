import React from "react";
import { Link } from "react-router-dom";
import alvo from "../image/alvo.png";
import {
  Box,
  CGrid,
  Container,
  Div,
  Img,
  Paragrafo,
  Section,
  Span,
  TituloPrincipal,
} from "../styles/tags";

const MercadoTech = () => {
  return (
    <Section>
      <Container>
        <CGrid 
          grid="repeat(auto-fit, minmax(400px, 1fr))"
          gap="2rem"
          padding="60px 0"
          alignItems="center"
        >
          <Box>
            <Img
              src={alvo}
              alt="Ilustração de alvo com documentos"
              style={{ width: "400px" }}
            />
          </Box>

          <Box>
            <TituloPrincipal>
              Mercado <Span>Tech</Span>
            </TituloPrincipal>

            <Paragrafo margin="0 0 2rem 0">
              As empresas precisam inovar e criar valor na relação com o
              consumidor, com processos mais eficientes e confiáveis tendem a
              aumentar a <Span>conversão dos negócios.</Span>
            </Paragrafo>

            <Paragrafo margin="0 0 2rem 0">
              Pequenas e Médias empresas representam a maior participação no
              Market Share, mercado fonte de demandas e receitas contínuas,
              movimentando os números pelo Brasil.
            </Paragrafo>
          </Box>
        </CGrid>

        <Div style={{marginBottom: '60px'}}>
          <Paragrafo margin="0 0 2rem 0">
            Algumas <Span>matérias interessantes</Span>:
          </Paragrafo>

          <CGrid grid="repeat(auto-fit, minmax(200px, 1fr))" gap="2rem">
            <Link to="" style={{textAlign: 'center', color: '#202EAD'}}>
              "Inteligência Artificial para os pequenos negócios Como
              automatizar, otimizar, melhorar processos."
            </Link>

            <Link to="" style={{textAlign: 'center', color: '#202EAD'}}>
              "Tendências de tecnologia para pequenas empresas."
            </Link>

            <Link to="" style={{textAlign: 'center', color: '#202EAD'}}>
              "Pequenos negócios usam inteligência artificial para se destacar
              no Google."
            </Link>

            <Link to="" style={{textAlign: 'center', color: '#202EAD'}}>
               "40% dos brasileiros são influenciados por pequenas empresas -
              seja como empreendedor, consumidor ou empregado."
            </Link>
          </CGrid>
        </Div>
      </Container>
    </Section>
  );
};

export default MercadoTech;
