import React from 'react'
import { CButton } from './button.styles'

const Button = ({ texto="Enviar", w, bold, ...props }) => {
  return (
  <CButton
    fontWeight={ bold }
    w={ w }
    { ...props }
  >
    { texto }
  </CButton>)
}

export default Button