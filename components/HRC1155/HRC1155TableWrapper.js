import React from 'react'
import Search from './../common/Search';
import TableHeader from './../common/Table/TableHeader';
import Hrc721DataTable from './../HRC721/Hrc721DataTable';
import TableFooter from './../common/Table/TableFooter';
import Hrc1155DataTable from './Hrc1155DataTable';
import { Hrc1155DataCol } from '../../data/Hrc1155DataTableData';
import { useState, useEffect } from 'react';

function HRC1155TableWrapper() {
  const [dataPerRow, setDataPerRow] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Hrc1155DataCol.slice(0, dataPerRow));
  }, [dataPerRow]);
  return (
    <div
    className={`white-blue-bg table-block-wrapper lightgray-to-light-blue`}
  >
     <Search />
     <TableHeader dataPerRow={dataPerRow} />
      <Hrc1155DataTable data={data}/>
      <TableFooter dataPerRow = {dataPerRow} setDataPerRow = {setDataPerRow}/>
  </div>
  )
}

export default HRC1155TableWrapper