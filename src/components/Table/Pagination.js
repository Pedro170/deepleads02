import styles from "./Pagination.module.css"

const Pagination = ({ setCurrentPege, pages }) => {
  return (
    <div className={ styles.pagination }>
      { Array.from(Array(pages), (_, index) => {
        return <button key={ index } value={ index } onClick={(e) => setCurrentPege()}>{ index + 1 }</button>
      }) }
    </div>
  )
};

export default Pagination;
