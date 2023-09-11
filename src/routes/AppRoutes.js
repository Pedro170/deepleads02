import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import MercadoTech from "../pages/MercadoTech";
import PlanosAssinaturas from "../pages/PlanosAssinaturas";
import Login from "../pages/Login";
import EsqueceuSenha from "../pages/EsqueceuSenha";
import Contato from "../pages/Contato";
import ProtectedRoute from "../components/helpers/ProtectedRoute";
import Inicio from "../pages/Inicio";
import Leads from "../pages/Leads";
import Campanha from "../pages/Campanha";
import NotFound from "../components/helpers/NotFound";
import Conta from "../pages/Conta";
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
      <Route path="*" element={<NotFound />} />

      <Route
        path="cliente/inicio"
        element={
          <ProtectedRoute>
            <Inicio />
          </ProtectedRoute>
        }
      />

      <Route
        path="cliente/leads"
        element={
          <ProtectedRoute>
            <Leads />
          </ProtectedRoute>
        }
      />

      <Route
        path="cliente/campanha"
        element={
          <ProtectedRoute>
            <Campanha />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="cliente/conta"
        element={
          <ProtectedRoute>
            <Conta />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
