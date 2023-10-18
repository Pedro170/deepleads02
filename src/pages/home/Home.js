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
  width: 260px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 6.14px;
  background: #FFF;
  box-shadow: 0px 10px 30px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 77px;

  & h1 {
    color: #388DCC;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & p {
    color: #A7A7A7;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const DivCards = styled.div`
display: flex;
width: 405px;
height: 686px;
flex-direction: column;
align-items: center;
gap: 37.394px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #FFF;
background: #78C6FF;
justify-content: center;
padding: 20px;
`;

export const DivReasons = styled.div`
display: flex;
width: 327px;
flex-direction: column;
justify-content: center;
padding: 10px;
text-align: start;
`;



const Home = () => {
  return (
    <Section>

      <ContainerGrid style={{
        background: '#F8FCFF',
        height: '575px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '48px'
      }}>
        <Div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <Div >
            <H1 style={{ textAlign: 'start', marginBottom: '16px', fontSize: '35px', fontWeight: 'bold' }}>Encontre novos clientes para seu negócio</H1>
            <H2 style={{ fontWeight: 'bolder', marginBottom: '16px', fontSize: '33px', position: 'relative', }}>Gerencie, converta e qualifique seus Leads </H2>
            <P style={{ marginBottom: '16px' }}>Plataforma que conecta seu negócio com outras empresas</P>
            <Div style={{
              background: '#4EA3E2',
              borderRadius: '10px',
              padding: '10px',
              width: 'auto',
              display: 'inline-block',
              marginBottom: '31px'
            }}>
              <P style={{
                color: 'white'
              }}>15 Dias Grátis</P>
            </Div>

            <Div style={{
              display: 'flex',
              gap: '17px'
            }}>
              <Button
                texto="REALIZAR DEMONSTRAÇÃO"
                fontWeight="550"
                type="first"
                color="#fff"
                style={{
                  marginBottom: "50px",
                  borderRadius: "50px",
                  background: '#388DCC'
                }}
              />
              <Button
                texto="CONHECER"
                fontWeight="550"
                type="first"
                color="#CFD0D0"
                style={{
                  marginBottom: "50px",
                  borderRadius: "50px",
                  background: '#FFFFFF',
                }}
              />
            </Div>
          </Div>
          <Div>
            <Img src={pcHome} alt="pc com logo dentro" style={{
              width: '735px',
              height: '551px'
            }} />
          </Div>

        </Div>
      </ContainerGrid>

      <Container>

        <Div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '30px'
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
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Div style={{
          textAlign: 'center'
        }}>
          <P style={{
            fontSize: '30px',
            fontStyle: 'normal',
            fontWeight: '500'
          }}>Seu negócio com</P>
          <P style={{
            color: '#388DCC',
            fontSize: '30px',
            fontStyle: 'normal',
            fontWeight: '700'
          }}>Inteligência Artificial nas campanhas</P>
        </Div>

        <Div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Img src={notebookHome} alt="notebook com informações" />
          <Div style={{ width: '800px' }}>
            <H1 style={{ fontSize: '36px', marginBottom: '29px', fontWeight: 'normal' }}>Converta leads com <Span style={{ fontWeight: 'bold' }}>campanhas</Span></H1>
            <P style={{ fontSize: '29px' }}>Use o poder da <Span style={{ color: '#2171ac' }}>inteligencia artificial (ChatGPT)</Span> para gerar novas campanhas para sua base de clientes, totalmente incluso no plano e <Span style={{ color: '#2171ac' }}>sem uma equipe especializada de marketing.</Span></P>
          </Div>
        </Div>
      </Div>

      <Div style={{
        background: 'linear-gradient(180deg, #FDFDFD 77.35%, rgba(245, 245, 245, 0.76) 158.57%)',
        height: '788px',
      }}>
        <Div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px'
      }}>
        <Div style={{ width: '800px'}}>
          <H1 style={{ fontSize: '36px', marginBottom: '29px', fontWeight: 'normal' }}>Encontre potenciais clientes</H1>
          <P style={{ fontSize: '29px' }}>Aumente sua <Span style={{ color: '#2171ac' }}>base de Leads.</Span> nossa ferramenta encontra <Span style={{ color: '#2171ac' }}>potenciais clientes</Span> para seu negocio, <Span style={{ color: '#2171ac' }}>filtre por regiões de interesse</Span>, nicho de mercado e reputação.</P>
        </Div>
        <Img src={celularHome} alt="celular com informações" />
        </Div>
      </Div>

      <Div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

      }}>
        <Img src={computaGrafHome} alt="computador com graficos" />
        <Div style={{ width: '800px' }}>
          <H1 style={{ fontSize: '36px', marginBottom: '29px', fontWeight: 'normal' }}>Resultados em Tempo Real</H1>
          <P style={{ fontSize: '29px' }}>Dashboard de métricas para acompanhar sua performance, <Span style={{ color: '#2171ac' }}>sem depender de planilhas ou trabalho manual.</Span>
            Integre suas <Span style={{ color: '#2171ac' }}>Campanhas</Span> com um clique e aumente a performance de <Span style={{ color: '#2171ac' }}>seus anúncios.</Span></P>
        </Div>
      </Div>

      <Div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '40px',
        marginBottom: '80px'
      }}>
        <Div style={{ textAlign: 'center' }}>
          <P style={{ fontSize: '30px' }}>Agregando valor ao</P>
          <P style={{ fontSize: '32px', color: '#2171ac' }}>Seus Clientes e em Seu Negócio</P>
        </Div>

        <Div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <DivCards>
            <Img src={rostoRobo} alt="rosto de um robo" />
            <H1 style={{ color: 'white', fontSize: '30px' }}>Chatbot</H1>
            <P style={{ color: 'white', fontSize: '24px' }}>Com valores baixos e acessíveis, você poderá ter acesso a uma plataforma moderna e super prática que irá revolucionar e impusionar suas vendas e até seu negócio/network...</P>
          </DivCards>

          <DivCards style={{ background: '#4EA3E2' }}>
            <Img src={metas} alt="rosto de um robo" />
            <H1 style={{ color: 'white', fontSize: '30px' }}>Métricas em tempo real</H1>
            <P style={{ color: 'white', fontSize: '24px' }}>Com valores baixos e acessíveis, você poderá ter acesso a uma plataforma moderna e super prática que irá revolucionar e impusionar suas vendas e até seu negócio/network...</P>
          </DivCards>

          <DivCards style={{ background: '#2171ac' }}>
            <Img src={cifrao} alt="rosto de um robo" />
            <H1 style={{ color: 'white', fontSize: '30px' }}>Valores Acessiveis</H1>
            <P style={{ color: 'white', fontSize: '24px' }}>Com valores baixos e acessíveis, você poderá ter acesso a uma plataforma moderna e super prática que irá revolucionar e impusionar suas vendas e até seu negócio/network...</P>
          </DivCards>


        </Div>
      </Div>

      <ContainerGrid2>
        <H2 style={{textAlign: 'center', color: 'white', fontWeight: 'normal', fontSize: '32px'}}>Algumas razões do</H2>
        <H1 style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: '35px'}}> Porque nos escolher</H1>

        <Div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          padding: '20px',
          marginTop: '10px',
          marginBottom: '10px',
          placeItems: 'center',
          gridGap: '10px'
        }}>
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
        </Div>
      </ContainerGrid2>

      
    </Section >
  );
};

export default Home;
