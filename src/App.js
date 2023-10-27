/* eslint-disable import/first */
import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeaderLogado from "./components/header/headerlogado/HeaderLogado";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyles from "./styles/globalStyle";
import { Button, CApp, CMain, Div, H2, MainLogado } from "./styles/tags";

import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ChatDeepleads from "./components/chat/ChatDeepleads";
import AppRoutesLogado from "./routes/AppRoutesLogado";
import UserContext from "./UserContext";

const App = () => {
  const logado = localStorage.getItem("usuario");
  const [ativo, setAtivo] = React.useState(false)
  const { texto, descricao } = React.useContext(UserContext)

  function handleMenuAtivo() {
    setAtivo(!ativo)
  }

  return (
    <CApp>
      {logado ? "" : <Header ativo={ativo} setAtivo={ativo} />}
      {logado ? <HeaderLogado ativo={ativo} setAtivo={ativo} /> : ""}
      <CMain className={logado ? "logado" : ""}>
        {logado ? (
          <MainLogado className={ativo ? 'ativo'  : ''}>
            <Div className={`header-conteudo ${ativo ? 'ativo' : ''}`}>
              <H2>{texto && texto} <i></i> {descricao}</H2>

              <Button className="button-menu" onClick={handleMenuAtivo}>
                <i className="fas fa-bars"></i>
              </Button>
            </Div>
            <AppRoutesLogado />
          </MainLogado>
        ) : (
          <AppRoutes />
        )}
      </CMain>
      {logado ? "" : <Footer />}
      <GlobalStyles />
      <ChatDeepleads />
    </CApp>
  );
};

export default App;
