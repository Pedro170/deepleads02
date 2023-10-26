import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Sobre from "../pages/Sobre";
import MercadoTech from "../pages/MercadoTech";
import PlanosAssinaturas from "../pages/PlanosAssinaturas";
import Login from "../pages/Login";
import EsqueceuSenha from "../pages/EsqueceuSenha";
import Contato from "../pages/Contato";
// import NotFound from "../components/helpers/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="mercado-tech" element={<MercadoTech />} />
      <Route path="planos" element={<PlanosAssinaturas />} />
      <Route path="login" element={<Login />} />
      <Route path="esqueceu-senha" element={<EsqueceuSenha />} />
      <Route path="contato" element={<Contato />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
