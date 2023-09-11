import React from 'react'
import { Div, P } from '../../styles/tags'

const Footer = () => {
  return (
    <Div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '46px',
      }}
    >
      <P negrito="bold" textAlign='center' type="cor-02">&copy; Copyright 2023 - Todos os direitos reservados deepleads</P>
    </Div>
  )
}

export default Footer
