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
import { ContainerGrid, ContainerGridRoboTexto, ItemGrid, ContainerGrid2 } from "./HomeStyled";
import rostoRobo from "../../image/home/rosto-robo.svg";
import cifrao from "../../image/home/cifrao.svg";
import metas from "../../image/home/metas.svg";
import Button from "../../components/form/button/Button";
import pcHome from "../../image/home/pchome.png"
import notebookHome from "../../image/home/notebookhome.png"
import celularHome from "../../image/home/celularhome.png"
import computaGrafHome from "../../image/home/computagrafhome.png"

export const DivInfo = styled.div`
  width: 16.25rem;
  padding: 2rem;
  flex-shrink: 0;
  border-radius: 0.384rem;
  background: #FFF;
  box-shadow: 0px 10px 30px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4.813rem;

  & h1 {
    color: #388DCC;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & p {
    color: #A7A7A7;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const DivCards = styled.div`
display: flex;
width: 25.313rem;
flex-direction: column;
align-items: center;
gap: 2.337rem;
flex-shrink: 0;
border-radius: 0.313rem;
border: 1px solid #FFF;
background: #78C6FF;
justify-content: center;
padding: 3rem;
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
  grid-template-columns: 1fr 1fr 1fr; // Define três colunas

  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr; 
  }
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
    grid-template-columns: 1fr 1fr; 
    grid-gap: 2rem;
    margin-top: 1.5rem;
    padding: 2rem;
  }

  @media (max-width: 490px) {
    grid-template-columns: 1fr; 
  }
`;



const Home = () => {
  return (
    <Section>

      <ContainerGrid style={{
        background: '#F8FCFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <DivContent>
          <Div>
            <H1 style={{ textAlign: 'start', marginBottom: '1rem', fontWeight: 'bold' }}>Encontre novos clientes para seu negócio</H1>
            <H2 style={{ fontWeight: 'bolder', marginBottom: '1rem', position: 'relative' }}>Gerencie, converta e qualifique seus Leads </H2>
            <P style={{ marginBottom: '1rem' }}>Plataforma que conecta seu negócio com outras empresas</P>
            <Div style={{
              background: '#4EA3E2',
              borderRadius: '0.625rem',
              padding: '0.625rem',
              width: 'auto',
              display: 'inline-block',
              marginBottom: '1.938rem'
            }}>
              <P style={{
                color: 'white'
              }}>15 Dias Grátis</P>
            </Div>

            <Div style={{
              display: 'flex',
              gap: '1.063rem'
            }}>
              <Button
                texto="REALIZAR DEMONSTRAÇÃO"
                fontWeight="550"
                type="first"
                color="#fff"
                style={{
                  marginBottom: "3.125rem",
                  borderRadius: "3.125rem",
                  background: '#388DCC'
                }}
              />
              <Button
                texto="CONHECER"
                fontWeight="550"
                type="first"
                color="#CFD0D0"
                style={{
                  marginBottom: "3.125rem",
                  borderRadius: "3.125rem",
                  background: '#FFFFFF',
                }}
              />
            </Div>
          </Div>
          <Div>
            <Img src={pcHome} alt="pc com logo dentro" style={{
              maxWidth: '100%',
              maxHeigh: '100%'
            }} />
          </Div>
        </DivContent>

      </ContainerGrid>

      <Container>
        <Div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap', // Permite que os elementos quebrem para a próxima linha quando não couberem na tela
          justifyContent: 'center', // Alinha os elementos ao centro
          gap: '1.875rem'
        }}>
          <DivInfo>
            <H1>116M</H1>
            <P>Cnpjoto tst</P>
          </DivInfo>

          <DivInfo>
            <H1>4.8m</H1>
            <P>Leads Gerados</P>
          </DivInfo>

          <DivInfo>
            <H1>+321%</H1>
            <P>Ganhos Mensais</P>
          </DivInfo>

          <DivInfo>
            <H1>81NH1S</H1>
            <P>Ganhos mensais</P>
          </DivInfo>
        </Div>
      </Container>


      <Div style={{
        marginBottom: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '1rem'
      }}>
        <P style={{
          fontSize: '1.5rem',
          fontStyle: 'normal',
          fontWeight: '500'
        }}>Seu negócio com</P>
        <P style={{
          color: '#388DCC',
          fontSize: '1.5rem',
          fontStyle: 'normal',
          fontWeight: '700'
        }}>Inteligência Artificial nas campanhas</P>

        <DivContent>
          <Img src={notebookHome} alt="notebook com informações" style={{ maxWidth: '100%' }} />
          <Div style={{ maxWidth: '100%', padding: '1rem' }}>
            <H1 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'normal' }}>Converta leads com <Span style={{ fontWeight: 'bold' }}>campanhas</Span></H1>
            <P style={{ fontSize: '1rem' }}>
              Use o poder da <Span style={{ color: '#2171ac' }}>inteligência artificial (ChatGPT)</Span> para gerar novas campanhas para sua base de clientes, totalmente incluso no plano e <Span style={{ color: '#2171ac' }}>sem uma equipe especializada de marketing.</Span>
            </P>
          </Div>
        </DivContent>
      </Div>


      <Div style={{
        background: 'linear-gradient(180deg, #FDFDFD 77.35%, rgba(245, 245, 245, 0.76) 158.57%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        marginTop: '4rem',
      }}>
        <DivContent style={{
          marginTop: '2rem',
        }}>
          <Div style={{ maxWidth: '50rem', padding: '1rem' }}>
            <H1 style={{ fontSize: '2.25rem', marginBottom: '1.813rem', fontWeight: 'normal' }}>Encontre potenciais clientes</H1>
            <P style={{ fontSize: '1.813rem' }}>
              Aumente sua <Span style={{ color: '#2171ac' }}>base de Leads.</Span> nossa ferramenta encontra <Span style={{ color: '#2171ac' }}>potenciais clientes</Span> para seu negocio, <Span style={{ color: '#2171ac' }}>filtre por regiões de interesse</Span>, nicho de mercado e reputação.
            </P>
          </Div>
          <Img src={celularHome} alt="celular com informações" style={{ maxWidth: '100%' }} />
        </DivContent>
      </Div>


      <Div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        marginBottom: '4rem',
        flexDirection: 'column', // Alterando a direção para uma coluna em telas menores
        textAlign: 'center' // Centralizando o texto
      }}>
        <DivContent>
          <Img src={computaGrafHome} alt="computador com gráficos" />
          <Div style={{ maxWidth: '100%', padding: '0 1rem' }}> {/* Definindo uma largura máxima */}
            <H1 style={{ fontSize: '2.25rem', marginBottom: '1.813rem', fontWeight: 'normal' }}>Resultados em Tempo Real</H1>
            <P style={{ fontSize: '1.813rem' }}>Dashboard de métricas para acompanhar sua performance, <Span style={{ color: '#2171ac' }}>sem depender de planilhas ou trabalho manual.</Span>
              Integre suas <Span style={{ color: '#2171ac' }}>Campanhas</Span> com um clique e aumente a performance de <Span style={{ color: '#2171ac' }}>seus anúncios.</Span></P>
          </Div>
        </DivContent>
      </Div>


      <Div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2.5rem',
  marginBottom: '5rem'
}}>
  <Div style={{ textAlign: 'center' }}>
    <P style={{ fontSize: '1.875rem' }}>Agregando valor ao</P>
    <P style={{ fontSize: '2rem', color: '#2171ac' }}>Seus Clientes e em Seu Negócio</P>
  </Div>

  <DivSectionCards style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  }}>
    <DivCards>
      <Img src={rostoRobo} alt="rosto de um robô" />
      <H1 style={{ color: 'white', fontSize: '1.875rem' }}>Chatbot</H1>
      <P style={{ color: 'white', fontSize: '1.5rem' }}>Com valores baixos e acessíveis, você poderá ter acesso a uma plataforma moderna e super prática que irá revolucionar e impulsionar suas vendas e até seu negócio/network...</P>
    </DivCards>

    <DivCards style={{ background: '#4EA3E2' }}>
      <Img src={metas} alt="rosto de um robô" />
      <H1 style={{ color: 'white', fontSize: '1.875rem' }}>Métricas em tempo real</H1>
      <P style={{ color: 'white', fontSize: '1.5rem' }}>Com valores baixos e acessíveis, você poderá ter acesso a uma plataforma moderna e super prática que irá revolucionar e impulsionar suas vendas e até seu negócio/network...</P>
    </DivCards>

    <DivCards style={{ background: '#2171ac' }}>
      <Img src={cifrao} alt="rosto de um robô" />
      <H1 style={{ color: 'white', fontSize: '1.875rem' }}>Valores Acessíveis</H1>
      <P style={{ color: 'white', fontSize: '1.5rem' }}>Com valores baixos e acessíveis, você poderá ter acesso a uma plataforma moderna e super prática que irá revolucionar e impulsionar suas vendas e até seu negócio/network...</P>
    </DivCards>
  </DivSectionCards>
</Div>


      <ContainerGrid2>
        <H2 style={{ textAlign: 'center', color: 'white', fontWeight: 'normal', fontSize: '2rem' }}>Algumas razões do</H2>
        <H1 style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: '2rem' }}> Porque nos escolher</H1>

        <DivSectionReasons>
          <DivReasons>
            <H3>Plataforma de alta performance</H3>

            <P>Resultados rápidos e uma plataforma intuitiva, prática e eficiente </P>
          </DivReasons>

          <DivReasons>
            <H3>Alto nivel de usabilidade</H3>

            <P>Resultados rápidos e uma plataforma intuitiva, prática e eficiente </P>
          </DivReasons>

          <DivReasons>
            <H3>Acessibilidade</H3>

            <P>Resultados rápidos e uma plataforma intuitiva, prática e eficiente </P>
          </DivReasons>

          <DivReasons>
            <H3>Acompanhamento de resultados</H3>

            <P>Resultados rápidos e uma plataforma intuitiva, prática e eficiente </P>
          </DivReasons>

          <DivReasons>
            <H3>Suporte dedicado</H3>

            <P>Resultados rápidos e uma plataforma intuitiva, prática e eficiente </P>
          </DivReasons>

          <DivReasons>
            <H3>Plataforma de alta performance</H3>

            <P>Resultados rápidos e uma plataforma intuitiva, prática e eficiente </P>
          </DivReasons>
        </DivSectionReasons>
      </ContainerGrid2>


    </Section >
  );
};

export default Home;
