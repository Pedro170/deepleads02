import React from "react";
import {
  CGrid,
  Container,
  Div,
  H1,
  H2,
  H3,
  H4,
  Img,
  P,
  Paragrafo,
  Section,
  Span,
  TituloPrincipal,
} from "../../styles/tags";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ContainerGrid,
  ContainerGridRoboTexto,
  ItemGrid,
  ContainerGrid2,
} from "./HomeStyled";
import rostoRobo from "../../image/home/rosto-robo.svg";
import cifrao from "../../image/home/cifrao.svg";
import metas from "../../image/home/metas.svg";
import Button from "../../components/form/button/Button";
import pcHome from "../../image/home/pchome.png";
import notebookHome from "../../image/home/notebookhome.png";
import celularHome from "../../image/home/celularhome.png";
import computaGrafHome from "../../image/home/computagrafhome.png";

export const DivInfo = styled.div`
  width: 16.25rem;
  padding: 2rem;
  flex-shrink: 0;
  border-radius: 0.384rem;
  background: #fff;
  box-shadow: 0px 10px 30px 2px rgba(0, 0, 0, 0.1); /* Add drop shadow here */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4.813rem;

  & h1 {
    color: #388dcc;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & p {
    color: #a7a7a7;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;


export const DivCards = styled.div`
  display: flex;
  width: 24.313rem;
  flex-direction: column;
  align-items: center;
  gap: 2.337rem;
  flex-shrink: 0;
  border-radius: 0.313rem;
  border: 1px solid #fff;
  background: #78c6ff;
  justify-content: center;
  padding: 3rem;

  @media (max-width: 1200px) {
    width: 20.313rem;
  }
`;


export const DivReasons = styled.div`
  display: flex;
  width: 20.438rem;
  flex-direction: column;
  justify-content: center;
  padding: 0.625rem;
  text-align: start;
`;

export const DivContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Define duas colunas
  place-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const DivSectionCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Define three columns */
  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;
  }
  gap: 2rem; /* Add gap between elements */

`;


export const DivSectionReasons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1.25rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  place-items: center;
  grid-gap: 0.625rem;
  @media (max-width: 1350px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    margin-top: 1.5rem;
    padding: 1rem;
  }
`;


const Home = () => {

  const redirectToPlansPage = () => {
    // Substitua '/planos' pela URL da página de planos
    window.location.href = '/planos';
  }
  const redirectToLogin = () => {
    // Substitua '/login' pela URL da tela de login
    window.location.href = '/login';
  }
  return (
    <Section>
      <ContainerGrid
        style={{
          background: "#F8FCFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DivContent>
          <Div>
            <H1
              style={{
                textAlign: "start",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              Encontre novos clientes para seu negócio
            </H1>
            <H2
              style={{
                fontWeight: "bolder",
                marginBottom: "1rem",
                position: "relative",
              }}
            >
              Gerencie, converta e qualifique seus Leads{" "}
            </H2>
            <P style={{ marginBottom: "1rem" }}>
              Aproveite o período de experimentação e aumente a visibilidade do seu negócio
            </P>
            <Div
              style={{
                background: "#4EA3E2",
                borderRadius: "0.625rem",
                padding: "0.625rem",
                width: "auto",
                display: "inline-block",
                marginBottom: "1.938rem",
              }}
            >
              <P
                style={{
                  color: "white",
                }}
              >
                15 Dias Grátis
              </P>
            </Div>

            <Div
              style={{
                display: "flex",
                gap: "1.063rem",
              }}
            >
              <Button
                texto="INICIAR DEMOSNTRAÇÃO"
                fontWeight="550"
                type="first"
                color="#fff"
                style={{
                  marginBottom: "3.125rem",
                  borderRadius: "3.125rem",
                  background: "#388DCC",
                }}
                onClick={redirectToLogin}
              />
              <Button
                texto="SAIBA MAIS..."
                fontWeight="550"
                type="first"
                color="#CFD0D0"
                style={{
                  marginBottom: "3.125rem",
                  borderRadius: "3.125rem",
                  background: "#FFFFFF",
                }}
                onClick={redirectToPlansPage}
              />
            </Div>
          </Div>
          <Div>
            <Img
              src={pcHome}
              alt="pc com logo dentro"
              style={{
                maxWidth: "100%",
                maxHeigh: "100%",
              }}
            />
          </Div>
        </DivContent>
      </ContainerGrid>

      <Container>
        <Div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap", // Permite que os elementos quebrem para a próxima linha quando não couberem na tela
            justifyContent: "center", // Alinha os elementos ao centro
            gap: "1.875rem",
          }}
        >
          <DivInfo>
            <H1>43K</H1>
            <P>Leads Minerados</P>
          </DivInfo>

          <DivInfo>
            <H1>12k</H1>
            <P>Interações com IA</P>
          </DivInfo>

          <DivInfo>
            <H1>93k</H1>
            <P>Mensagens Enviadas</P>
          </DivInfo>

          {/* <DivInfo>
            <H1>81NH1S</H1>
            <P>Ganhos mensais</P>
          </DivInfo> */}
        </Div>
      </Container>

      <Div
        style={{
          marginBottom: "1.25rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <P
          style={{
            fontSize: "3.5rem",
            fontStyle: "normal",
            fontWeight: "500",
          }}
        >
          Explore todo o potencial da nossa
        </P>
        {/* <P
          style={{
            color: "#388DCC",
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: "700",
          }}
        >
          Inteligência Artificial e desenvolva novas campanhas para o seu negócio 
        </P> */}

        <DivContent>
          <Img
            src={notebookHome}
            alt="notebook com informações"
            style={{ maxWidth: "100%" }}
          />
          <Div style={{ maxWidth: "100%", padding: "1rem" }}>
            <H1
              style={{
                fontSize: "2.25rem",
                marginBottom: "1rem",
                fontWeight: "normal",
              }}
            >
              Aumente a taxa de conversão do seu{" "}
              <Span style={{ fontWeight: "bold" }}>negócio</Span>
            </H1>
            <P style={{ fontSize: "1.813rem" }}>
              Descubra novos clientes,{" "}
              <Span style={{ color: "#2171ac" }}>
                crie promoções
              </Span>{" "}
              e entre em contato com o seu público-alvo de {" "}
              <Span style={{ color: "#2171ac" }}>
                forma rápida e intuitiva
              </Span>
            </P>
          </Div>
        </DivContent>
      </Div>

      <Div
        style={{
          background:
            "linear-gradient(180deg, #FDFDFD 77.35%, rgba(245, 245, 245, 0.76) 158.57%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          marginTop: "4rem",
        }}
      >
        <DivContent
          style={{
            marginTop: "2rem",
          }}
        >
          <Div style={{ maxWidth: "50rem", padding: "1rem" }}>
            <H1
              style={{
                fontSize: "2.25rem",
                marginBottom: "1.813rem",
                fontWeight: "normal",
              }}
            >
              Segmente e encontre {" "}
              <Span style={{ color: "#2171ac" }}>potenciais clientes</Span>
            </H1>
            <P style={{ fontSize: "1.813rem" }}>
              Crie uma nova base de leads, ou reutilize a sua própria base de dados, segmente por área de atuação, bairro, raio de alcance e muito mais...
            </P>
          </Div>
          <Img
            src={celularHome}
            alt="celular com informações"
            style={{ maxWidth: "100%" }}
          />
        </DivContent>
      </Div>

      <Div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          marginBottom: "4rem",
          flexDirection: "column", // Alterando a direção para uma coluna em telas menores
          textAlign: "center", // Centralizando o texto
        }}
      >
        <DivContent>
          <Img src={computaGrafHome} alt="computador com gráficos" />
          <Div style={{ maxWidth: "100%", padding: "0 1rem" }}>
            {" "}
            {/* Definindo uma largura máxima */}
            <H1
              style={{
                fontSize: "2.25rem",
                marginBottom: "1.813rem",
                fontWeight: "normal",
              }}
            >
              Métricas em {" "}
              <Span style={{ color: "#2171ac" }}>
                Tempo Real
              </Span>
            </H1>
            <P style={{ fontSize: "1.813rem" }}>
              Nossa solução conta com um dashboard  amigável e intuitivo para que você possa acompanhar de maneira dinâmica a performance das suas campanhas. Todo o potencial do deepleads na palma da sua mão...
            </P>
          </Div>
        </DivContent>
      </Div>

      <Div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2.5rem",
          marginBottom: "5rem",
        }}
      >
        <Div style={{ textAlign: "center" }}>
          <P style={{ fontSize: "1.875rem" }}>Agregue valor às suas relações e</P>
          <P style={{ fontSize: "2rem", color: "#2171ac" }}>
            aumente o profissionalismo do seu negócio
          </P>
        </Div>

        <DivSectionCards
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <DivCards>
            <Img src={rostoRobo} alt="rosto de um robô" />
            <H1 style={{ color: "white", fontSize: "1.875rem" }}>Inteligência Artificial</H1>
            <P style={{ color: "white", fontSize: "1.5rem" }}>
              Descubra todo o potencial e inovação ao utilizar nossa inteligência artificial para criar propagandas para o seu negócio
            </P>
          </DivCards>

          <DivCards style={{ background: "#4EA3E2" }}>
            <Img src={metas} alt="rosto de um robô" />
            <H1 style={{ color: "white", fontSize: "1.875rem" }}>
              Métricas em Tempo Real
            </H1>
            <P style={{ color: "white", fontSize: "1.5rem" }}>
              Gráficos inteligentes atualizados em tempo real, para que você possa acompanhar os resultados da sua campanha em poucos segundos.
            </P>
          </DivCards>

          <DivCards style={{ background: "#2171ac" }}>
            <Img src={cifrao} alt="rosto de um robô" />
            <H1 style={{ color: "white", fontSize: "1.875rem" }}>
              Acessível para todos
            </H1>
            <P style={{ color: "white", fontSize: "1.5rem" }}>
              Democratizamos o acesso à tecnologia para pequenos e médios empreendedores. Saiba como fazer a diferença no seu negócio sem burocracias e altos investimentos.
            </P>
          </DivCards>
        </DivSectionCards>
      </Div>

      <ContainerGrid2>
        <H2
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "normal",
            fontSize: "2rem",
          }}
        >
        </H2>
        <H1
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          {" "}
          Por que nos escolher?
        </H1>

        <DivSectionReasons>
          <DivReasons>
            <H3>Plataforma de alta performance</H3>

            <P>
              Tecnologia de ponta, integrando serviços na nuvem e inteligência artificial{" "}
            </P>
          </DivReasons>

          <DivReasons>
            <H3>Criação de campanhas personalizadas</H3>

            <P>
              Agende suas campanhas para atingir o seu público-alvo na hora e data desejadas{" "}
            </P>
          </DivReasons>

          <DivReasons>
            <H3>Indicadores de Performance</H3>

            <P>
              Obtenha insights valiosos através de gráficos estáticos e tome as melhores decisões para o seu negócio{" "}
            </P>
          </DivReasons>

          <DivReasons>
            <H3>Acessibilidade</H3>

            <P>
              Solução 100% responsiva, acessível via computadores, tablets e celulares{" "}
            </P>
          </DivReasons>

          <DivReasons>
            <H3>Mineração e armazenamento de leads</H3>

            <P>
              Crie sua própria base de potenciais leads ou utilize os seus leads para disparar novas campanhas{" "}
            </P>
          </DivReasons>

          <DivReasons>
            <H3>Suporte dedicado</H3>

            <P>
              Atendimento e suporte 100% online através das redes sociais, email e plataformas digitais{" "}
            </P>
          </DivReasons>
        </DivSectionReasons>
      </ContainerGrid2>
    </Section>
  );
};

export default Home;
