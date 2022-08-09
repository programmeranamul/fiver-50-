import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/BlockPageDataTable.module.css";
import BlockPageDataTableHeader from "./BlockPageDataTableHeader";
import BlockPageDataTableMain from "./BlockPageDataTableMain";
import { useState, useEffect } from "react";
import { BlockPageDataTableMainCol } from "../../data/BlockPageDataTableMainData";
import BlockPageDataTableFooter from "./BlockPageDataTableFooter";

function BlockPageDataTable() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  const [dataPerRow, setDataPerRow] = useState(10);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(BlockPageDataTableMainCol.slice(0, dataPerRow));
  }, [dataPerRow]);

  return (
    <div
      className={`${
        lightTheme ? style.table_wrapper_l : style.table_wrapper_d
      } ${style.table_wrapper}`}
    >
      <BlockPageDataTableHeader />
      <BlockPageDataTableMain datas={datas} />
      <BlockPageDataTableFooter
        dataPerRow={dataPerRow}
        setDataPerRow={setDataPerRow}
      />
    </div>
  );
}

export default BlockPageDataTable;
