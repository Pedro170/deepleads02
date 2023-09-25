/* eslint-disable import/first */
import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeaderLogado from "./components/header/HeaderLogado";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyles from "./styles/globalStyle";
import { CApp, CMain } from "./styles/tags";

import { register } from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ChatDeepleads from "./components/chat/ChatDeepleads";

const App = () => {
  const logado = localStorage.getItem('usuario')

  return (
    <CApp>
      <Header />
      {logado ? <HeaderLogado /> : ''}
      <CMain className={logado ? 'logado' : ''}>
        <AppRoutes />
      </CMain>
      <Footer />
      <GlobalStyles />
      <ChatDeepleads />
    </CApp>
  );
}

export default App;
