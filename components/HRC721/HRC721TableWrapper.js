import React from 'react'
import Search from './../common/Search';
import TableHeader from './../common/Table/TableHeader';
import TableFooter from './../common/Table/TableFooter';
import Hrc721DataTable from './Hrc721DataTable';
import { Hrc721DataTableCol } from '../../data/Hrc721DataTableData';

function HRC721TableWrapper() {
  return (
    <div
    className={`white-blue-bg table-block-wrapper lightgray-to-light-blue`}
  >
     <Search />
     <TableHeader />
      <Hrc721DataTable data={Hrc721DataTableCol}/>
      <TableFooter />
  </div>
  )
}

export default HRC721TableWrapper