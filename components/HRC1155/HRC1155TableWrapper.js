import React from 'react'
import Search from './../common/Search';
import TableHeader from './../common/Table/TableHeader';
import Hrc721DataTable from './../HRC721/Hrc721DataTable';
import TableFooter from './../common/Table/TableFooter';
import { Hrc721DataTableCol } from '../../data/Hrc721DataTableData';
import Hrc1155DataTable from './Hrc1155DataTable';
import { Hrc1155DataCol } from '../../data/Hrc1155DataTableData';

function HRC1155TableWrapper() {
  const [dataPerRow,setDataPerRow] = useState(10)
  return (
    <div
    className={`white-blue-bg table-block-wrapper lightgray-to-light-blue`}
  >
     <Search />
     <TableHeader />
      <Hrc1155DataTable data={Hrc1155DataCol}/>
      <TableFooter dataPerRow = {dataPerRow} setDataPerRow = {setDataPerRow}/>
  </div>
  )
}

export default HRC1155TableWrapper