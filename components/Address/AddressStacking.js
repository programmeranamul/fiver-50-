import style from "../../styles/AddressStacking.module.css";
import TablePagination from "./../common/Table/TablePagination";
import AddressTransactionsTable from "./AddressTransactionsTable";
import TableFooter from "./../common/Table/TableFooter";
import { useEffect, useState } from "react";
import {
  AddressStackingDataCol,
  AddressStackingDataRow,
} from "../../data/AddressStackingData";

function AddressStacking() {
  const [dataPerRow, setDataPerRow] = useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(AddressStackingDataCol.slice(0, dataPerRow));
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
            rowData={AddressStackingDataRow}
          />
          <TableFooter dataPerRow={dataPerRow} setDataPerRow={setDataPerRow} />
        </>
      )}
    </>
  );
}

export default AddressStacking;
