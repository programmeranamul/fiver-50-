import style from "../../styles/AddressInternal.module.css";
import TablePagination from "./../common/Table/TablePagination";
import AddressTransactionsTable from "./AddressTransactionsTable";
import TableFooter from "./../common/Table/TableFooter";
import {
  AddressInternalDataCol,
  AddressInternalDataRow,
} from "../../data/AddressInternalData";
import { useEffect, useState } from "react";

function AddressInternal() {
  const [dataPerRow, setDataPerRow] = useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(AddressInternalDataCol.slice(0, dataPerRow));
  }, [dataPerRow]);
  return (
    <>
      {data.length < 1 ? (
        <div className={style.wrapper}>
          <p className="mt-5 text-center">No data to display</p>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between">
            <div></div>
            <TablePagination />
          </div>
          <AddressTransactionsTable
            data={data}
            rowData={AddressInternalDataRow}
          />
          <TableFooter dataPerRow={dataPerRow} setDataPerRow={setDataPerRow} />
        </>
      )}
    </>
  );
}

export default AddressInternal;
