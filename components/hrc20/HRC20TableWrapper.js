import React from 'react'
import { HrcDataTableColData } from '../../data/HrcDataTableData';
import Search from './../common/Search';
import TableHeader from '../common/Table/TableHeader';
import HrcDataTable from './HrcDataTable';
import TableFooter from './../common/Table/TableFooter';

function HRC20TableWrapper() {

  return (
    <div
          className={`white-blue-bg table-block-wrapper lightgray-to-light-blue`}
        >
           <Search />
           <TableHeader />
            <HrcDataTable data={HrcDataTableColData}/>
            <TableFooter />
        </div>
  )
}

export default HRC20TableWrapper