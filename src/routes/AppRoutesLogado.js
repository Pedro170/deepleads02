import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/helpers/ProtectedRoute";
import Inicio from "../pages/cliente/inicio/Inicio"
import Leads from "../pages/cliente/Leads";
// import NotFound from "../components/helpers/NotFound";
import Conta from "../pages/cliente/conta/Conta";
import Negocio from "../pages/cliente/negocio/Negocio";
import { SectionLogado } from "../styles/tags";
import Campanha from "../pages/cliente/campanha/Campanha";
const AppRoutesLogado = () => {
  return (
    <SectionLogado>
      <Routes>
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

        <Route
          path="cliente/negocio"
          element={
            <ProtectedRoute>
              <Negocio />
            </ProtectedRoute>
          }
        />
      </Routes>
    </SectionLogado>
  );
};

export default AppRoutesLogado;
