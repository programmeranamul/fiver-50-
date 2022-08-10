import { AddressNftTransfareDataCol } from "./../../data/AddressNftTransfareData";
import { useState, useEffect } from "react";
import TablePagination from "./../common/Table/TablePagination";
import TableFooter from "./../common/Table/TableFooter";

import {
  AddressHrc20DataRow,
  AddressHrc20DataCol,
} from "./../../data/AddressHrc20";
import AddressNftTransfareTable from "./AddressNftTransfareTable";

function AddressHrc20() {
  const [dataPerRow, setDataPerRow] = useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(AddressHrc20DataCol.slice(0, dataPerRow));
  }, [dataPerRow]);
  return (
    <>
      {data.length < 1 ? (
        <div className={"w-wrapper"}>
          <p className="mt-5 text-center">No data to display</p>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between">
            <div></div>
            <TablePagination />
          </div>
          <AddressNftTransfareTable data={data} rowData={AddressHrc20DataRow} hideTokeId = {true}/>
          <TableFooter dataPerRow={dataPerRow} setDataPerRow={setDataPerRow} />
        </>
      )}
    </>
  );
}

export default AddressHrc20;
