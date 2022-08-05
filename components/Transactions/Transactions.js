import { latestedTransactionTableData } from "../../data/latestTransactionData";
import style from "../../styles/Home.module.css";
import DataTable from "./../common/DataTable";
import { latestedTransactionTableRow } from './../../data/latestTransactionData';

// const tableRow = ["Shard", "Hash", "From", "To", "Timestamp"];

function Transactions() {
  return (
    <section className={style.trasactions_table  }>
      <div className={`section-wrapper`}>
        <div className={`section-title-1 white-bg`}>
          <h3>Latest Transactions</h3>
        </div>

        <DataTable tableRow={latestedTransactionTableRow} tableData={latestedTransactionTableData} />
      </div>
    </section>
  );
}

export default Transactions;
