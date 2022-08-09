import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/BlockPageDataTableFooter.module.css";
import TableFooter from "./../common/Table/TableFooter";
import RecordsPerPage from './../common/RecordsPerPage';
import NextPagePagination from './../common/NextPagePagination';

function BlockPageDataTableFooter({dataPerRow,setDataPerRow}) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <RecordsPerPage dataPerRow={dataPerRow} setDataPerRow={setDataPerRow}/>
      </div>
      <NextPagePagination />
    </div>
  );
}

export default BlockPageDataTableFooter;
