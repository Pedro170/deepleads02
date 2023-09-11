import React from "react";
import { Img, Section, TituloPrincipal } from "../styles/tags";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <Section style={{padding: '60px 0'}}>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {imagesSlide.map((item) => (
          <SwiperSlide key={item.id}>
            <TituloPrincipal className="titulo">{item.texto1}</TituloPrincipal>
            <Img
              src={item.image}
              alt="Home e mulher"
              style={{ width: "100%" }}
            />
            <TituloPrincipal className="titulo">{item.texto2}</TituloPrincipal>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Home;
