import React from "react";
import {
  CGrid,
  Container,
  H1,
  H2,
  Img,
  P,
  Paragrafo,
  Section,
  Span,
  TituloPrincipal,
} from "../../styles/tags";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContainerGrid, ContainerGridRoboTexto, ItemGrid } from "./HomeStyled";
import rostoRobo from "../../image/home/rosto-robo.svg";
import cifrao from "../../image/home/cifrao.svg";
import metas from "../../image/home/metas.svg";

const imagesSlide = [
  {
    id: "1",
    image: "https://i.im.ge/2023/08/23/m3F8Rf.img01.jpg",
    texto1: "Você Pequeno e Médio Empreendedor…",
    texto2: "Vem encontrando dificuldades em atender Novos Clientes?",
  },
  {
    id: "2",
    image: "https://i.im.ge/2023/08/23/m3OrO9.img02.jpg",
    texto1: "Gostaria de Aumentar o faturamento da sua Empresa?",
    texto2: "Já pensou em automatizar o atendimento do seu Negócio?",
  },
  {
    id: "3",
    image: "https://i.im.ge/2023/08/23/m32l88.img03.jpg",
    texto1: "E se você tivesse Informações sobre o seu Público Alvo, ",
    texto2: "e pudesse aumentar a sua participação no Mercado?",
  },
];

const Home = () => {
  return (
    <Section style={{ padding: "60px 0" }}>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {imagesSlide.map((item) => (
          <SwiperSlide key={item.id}>
            <TituloPrincipal className="titulo">
                {item.texto1}
              </TituloPrincipal>
              <Img
                src={item.image}
                alt="Home e mulher"
                style={{ width: "100%" }}
              />
              <TituloPrincipal className="titulo">
                {item.texto2}
              </TituloPrincipal>
          </SwiperSlide>
        ))}
      </Swiper>

      <Paragrafo style={{ width: "40ch" }} margin="2rem auto">
        Grande parte das pequenas e médias empresas não possuem recursos
        suficientes para realizar uma reestruturação digital.
      </Paragrafo>

      <ContainerGrid>
        <H1 margin="0 0 2rem 0" type="branco">
          Principais problemas de um pequeno negócio
        </H1>
        <Container>
          <CGrid
            grid="repeat(2, 1fr)"
            gap="2rem"
            alignItems="center"
            padding="1rem"
          >
            <ItemGrid>
              <H2 mb={1.25}>Falta de acesso</H2>
              <P fontSize={1.25}>
                Com isso são obrigados a manter processos manuais, faltam
                estratégias para analisar e promover o negócio, o gerenciamento
                das informações é impreciso, diminuindo a qualidade no
                atendimento e suporte aos clientes.
              </P>
            </ItemGrid>

            <ItemGrid>
              <H2 mb={1.25}>Dificuldades</H2>
              <P fontSize={1.25}>
                Parte dos empresários não sabem como captar e nutrir Leads, como
                realizar atendimentos personalizados, entre outras etapas que
                fazem com que milhares de empresas encerrem suas atividades
                todos os anos.
              </P>
            </ItemGrid>
          </CGrid>
        </Container>
      </ContainerGrid>

      <Paragrafo margin="2rem auto">
        Tenha acesso a <Span>leads</Span> valiosos para seu negócio
      </Paragrafo>

      <ContainerGridRoboTexto>
        <Container>
          <CGrid
            grid="repeat(2, 1fr)"
            gap="4rem"
            alignItems="center"
            padding="1rem"
          >
            <ItemGrid className="item-robo-texto robo">
              <Img src={rostoRobo} alt="rosto de um robo" />
              <H2 mb={1.25}>Chatbot</H2>
            </ItemGrid>

            <ItemGrid className="item-robo-texto texto">
              <P fontSize={1.25}>
                Com valores baixos e acessíveis, você poderá ter acesso a uma
                plataforma moderna e super prática que irá revolucionar e
                impusionar suas vendas e até seu negócio/network...
              </P>
            </ItemGrid>

            <ItemGrid className="item-robo-texto texto">
              <P fontSize={1.25}>
                Com valores baixos e acessíveis, você poderá ter acesso a uma
                plataforma moderna e super prática que irá revolucionar e
                impusionar suas vendas e até seu negócio/network...
              </P>
            </ItemGrid>

            <ItemGrid className="item-robo-texto cifrao">
              <Img src={cifrao} alt="rosto de um robo" />
              <H2 mb={1.25}>Valores Acessiveis</H2>
            </ItemGrid>

            <ItemGrid className="item-robo-texto robo">
              <Img src={metas} alt="rosto de um robo" />
              <H2 mb={1.25}>Métricas em tempo real</H2>
            </ItemGrid>

            <ItemGrid className="item-robo-texto texto">
              <P fontSize={1.25}>
                Com valores baixos e acessíveis, você poderá ter acesso a uma
                plataforma moderna e super prática que irá revolucionar e
                impusionar suas vendas e até seu negócio/network...
              </P>
            </ItemGrid>
          </CGrid>
        </Container>
      </ContainerGridRoboTexto>
    </Section>
  );
};

export default Home;
