import React from "react";
import { TransctionPageTableCol } from "../../data/TransctionPageTableData";
import { useTheme } from "../../lib/ThemeContext";
import { useState, useEffect } from "react";
import TransctionPageTableHeader from "./../Transactions/TransctionPageTableHeader";
import InternalTransactionsTable from "./InternalTransactionsTable";
import { InternalTransactionsData } from "./../../data/InternalTransactionsData";
import BlockPageDataTableFooter from "./../Blocks/BlockPageDataTableFooter";

function InternalTransactions() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  const [dataPerRow, setDataPerRow] = useState(10);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(InternalTransactionsData.slice(0, dataPerRow));
  }, [dataPerRow]);
  return (
    <div className="mt-3 mt-md-4">
      <TransctionPageTableHeader dataPerRow={dataPerRow} />
      <InternalTransactionsTable datas={datas} />
      <BlockPageDataTableFooter
        dataPerRow={dataPerRow}
        setDataPerRow={setDataPerRow}
      />
    </div>
  );
}

export default InternalTransactions;
