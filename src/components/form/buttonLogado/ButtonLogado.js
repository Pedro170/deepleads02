import React from 'react'
import { CButton } from './buttonLogado.styles'

const ButtonLogado = ({ texto="Enviar", w, bold, ...props }) => {
  return (
  <CButton
    fontWeight={ bold }
    w={ w }
    { ...props }
  >
    { texto }
  </CButton>)
}

export default ButtonLogado