import React from "react";
import pessoas from "../image/img-sobre.png";
import {
  Box,
  CGrid,
  Container,
  Img,
  Paragrafo,
  Section,
  Span,
  TituloPrincipal,
} from "../styles/tags";

const Sobre = () => {
  return (
    <Section>
      <Container>
        <CGrid 
          grid="repeat(auto-fit, minmax(400px, 1fr))"
          alignItems="center"
          gap="2rem" 
          padding="60px 0">
          <Box>
            <Img
              src={pessoas}
              alt="Ilustração de pessoas sentadas"
              style={{ width: "400px" }}
            />
          </Box>

          <Box>
            <TituloPrincipal>
              Quem <Span>Somos</Span>
            </TituloPrincipal>

            <Paragrafo margin="0 0 2rem 0">
              A deep<Span>leads</Span> nasceu com o objetivo de promover e
              democratizar o acesso a tecnologia no mercado B2B.
            </Paragrafo>

            <Paragrafo margin="0 0 2rem 0">
              Nosso time desenvolveu um software capaz de minerar e armazenar
              <Span>leads</Span> a partir do público alvo.
            </Paragrafo>

            <Paragrafo margin="0 0 2rem 0">
              Com uma IA generativa integrada ao banco de dados, tornou-se
              possível criar conteúdos com informações relevantes sobre os
              produtos e serviços das empresas.
            </Paragrafo>

            <Paragrafo>
              Automatizamos processos de mensageria escalando o potencial de
              comunicação do seu negocio, trazendo maior agilidade e
              profissionalismo a pequenos empreendedores.
            </Paragrafo>
          </Box>
        </CGrid>
      </Container>
    </Section>
  );
};

export default Sobre;
