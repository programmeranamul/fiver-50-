import React, { useState, useEffect } from "react";
import { AddressTransactionsTableColData } from "../../data/AddressTransactionsTabledata";
import TableFooter from "./../common/Table/TableFooter";
import TablePagination from "./../common/Table/TablePagination";
import AddressTransactionsTable from "./AddressTransactionsTable";
import { AddressTransactionsTableRowData } from "./../../data/AddressTransactionsTabledata";

function AddressTransactions() {
  const [dataPerRow, setDataPerRow] = useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(AddressTransactionsTableColData.slice(0, dataPerRow));
  }, [dataPerRow]);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div></div>
        <TablePagination />
      </div>
      <AddressTransactionsTable
        data={data}
        rowData={AddressTransactionsTableRowData}
      />
      <TableFooter dataPerRow={dataPerRow} setDataPerRow={setDataPerRow} />
    </>
  );
}

export default AddressTransactions;
