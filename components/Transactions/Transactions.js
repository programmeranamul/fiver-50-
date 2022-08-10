import { latestedTransactionTableData } from "../../data/latestTransactionData";
import style from "../../styles/Home.module.css";
import DataTable from "./../common/DataTable";
import { latestedTransactionTableRow } from './../../data/latestTransactionData';
import { useTheme } from "../../lib/ThemeContext";


function Transactions() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <section className={style.trasactions_table  }>
      <div className={`${style.section_wrapper} ${lightTheme? style.s_w_l : style.s_w_d}`}>
      <div
          className={`${style.title} ${lightTheme? style.t_l : style.t_d} d-flex align-items-center justify-content-between`}
        >
          <h3>Latest Transactions</h3>         
        </div>

        <DataTable tableRow={latestedTransactionTableRow} tableData={latestedTransactionTableData} />
      </div>
    </section>
  );
}

export default Transactions;
