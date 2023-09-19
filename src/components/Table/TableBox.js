import styles from "./TableBox.module.css";
import { Div, Table } from "../../styles/tags"
import Pagination from "./Pagination";

const TableBox = ({ children, pages }) => {
  return (
    <Div className={styles.containerTable}>
      <Div className={styles.tableBox}>
        <Table>{children}</Table>
        <Pagination pages={pages} />
      </Div>
    </Div>
  )
}

export default TableBox
