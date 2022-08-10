import {useState, useEffect} from "react";
import Search from "./../common/Search";
import TableHeader from "./../common/Table/TableHeader";
import TableFooter from "./../common/Table/TableFooter";
import Hrc721DataTable from "./Hrc721DataTable";
import { Hrc721DataTableCol } from "../../data/Hrc721DataTableData";

function HRC721TableWrapper() {
  const [dataPerRow, setDataPerRow] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Hrc721DataTableCol.slice(0, dataPerRow));
  }, [dataPerRow]);
  return (
    <div
      className={`white-blue-bg table-block-wrapper lightgray-to-light-blue`}
    >
      <Search />
      <TableHeader dataPerRow={dataPerRow}/>
      <Hrc721DataTable data={data} />
      <TableFooter dataPerRow={data} setDataPerRow={setDataPerRow}/>
    </div>
  );
}

export default HRC721TableWrapper;
