import React from 'react'
import TablePagination from './../common/Table/TablePagination';
import AddressTransactionsTable from './AddressTransactionsTable';
import TableFooter from './../common/Table/TableFooter';
import {useState, useEffect} from 'react';
import { addressHolderCol,addressHolderRow } from '../../data/AddressHolderData';
import AddressHoldesTable from './AddressHoldesTable';

function AddressHolders() {
    const [dataPerRow, setDataPerRow] = useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(addressHolderCol.slice(0, dataPerRow));
  }, [dataPerRow]);
  return (
   <>
   <div className="d-flex justify-content-between">
        <div></div>
        <TablePagination />
      </div>
      
      <AddressHoldesTable data={data} rowData={addressHolderRow} />
      <TableFooter dataPerRow={dataPerRow} setDataPerRow={setDataPerRow} />
   </>
  )
}

export default AddressHolders