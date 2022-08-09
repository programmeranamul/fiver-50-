import style from "../styles/hrc20.module.css";
import Search from "./../components/common/Search";
import HrcDataTable from "./../components/hrc20/HrcDataTable";
import TableHeader from "./../components/common/Table/TableHeader";
import TableFooter from "./../components/common/Table/TableFooter";
import { HrcDataTableColData } from "../data/HrcDataTableData";
import { useState, useEffect } from "react";

function Hrc20() {
  const [dataPerRow, setDataPerRow] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(HrcDataTableColData.slice(0, dataPerRow));
  }, [dataPerRow]);

  return (
    <>
      <section>
        <article className="container">
          <h1 className="title-2 dark-white-color fw-700">HRC20 Tokens</h1>
          <div
            className={`white-blue-bg table-block-wrapper lightgray-to-light-blue`}
          >
            <Search />
            <TableHeader dataPerRow={dataPerRow} />
            <HrcDataTable data={data} />
            <TableFooter dataPerRow={data} setDataPerRow={setDataPerRow} />
          </div>
        </article>
      </section>
    </>
  );
}

export default Hrc20;
