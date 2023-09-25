import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const verificar = localStorage.getItem('usuario')
  return verificar ? children : <Navigate to='/' />
}

export default ProtectedRoute