import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const verificar = localStorage.getItem('token')
  
  return verificar ? children :  <Navigate to='/home' />
}

export default ProtectedRoute