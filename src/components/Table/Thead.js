import React from 'react'
import styles from './Thead.module.css'

const Thead = ({ children }) => {
  return (
    <thead className={ styles.thead }>
      { children }
    </thead>
  )
}

export default Thead
