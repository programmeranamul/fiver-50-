import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { AddressNftTransfareDataCol } from "./../../data/AddressNftTransfareData";
import { useState, useEffect } from "react";
import AddressNftTransfareTable from "./AddressNftTransfareTable";
import TablePagination from "./../common/Table/TablePagination";
import TableFooter from "./../common/Table/TableFooter";

function AddressNftTransfare() {
  const [dataPerRow, setDataPerRow] = useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(AddressNftTransfareDataCol.slice(0, dataPerRow));
  }, [dataPerRow]);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div></div>
        <TablePagination />
      </div>
      <AddressNftTransfareTable data={data} />
      <TableFooter dataPerRow={dataPerRow} setDataPerRow={setDataPerRow} />
    </>
  );
}

export default AddressNftTransfare;
