import React from 'react'

const Th = ({ titleTh, children }) => {
  return (
    <th>
      { children }
      { titleTh }
    </th>
  )
}

export default Th
