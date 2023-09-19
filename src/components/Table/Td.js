import styles from './Td.module.css'

const Td = ({ titleTd, children }) => {
  return (
    <td>
      { titleTd }
      { children }
    </td>
  )
}

export default Td