import { useTheme } from "../../../lib/ThemeContext";
import style from "../../../styles/TableFooter.module.css";
import TablePagination from "./TablePagination";
import RecordsPerPage from "./../RecordsPerPage";

function TableFooter({ dataPerRow, setDataPerRow }) {
  const { theme, setTheme, my } = useTheme();
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <RecordsPerPage dataPerRow={dataPerRow} setDataPerRow={setDataPerRow} />
      </div>
      <TablePagination/>
    </div>
  );
}

export default TableFooter;
