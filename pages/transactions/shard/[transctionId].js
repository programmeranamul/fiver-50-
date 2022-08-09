import React from "react";
import BlockFilter from "./../../../components/Blocks/BlockFilter";
import style from "../../../styles/ViewAllTransction.module.css";
import { useTheme } from "../../../lib/ThemeContext";
import TransctionPageTableHeader from "./../../../components/Transactions/TransctionPageTableHeader";
import TransctionPageTable from "../../../components/Transactions/TransctionPageTable";
import { TransctionPageTableCol } from "../../../data/TransctionPageTableData";
import BlockPageDataTableFooter from "./../../../components/Blocks/BlockPageDataTableFooter";
import { useState, useEffect } from "react";

function TransctionId() {
  const filtersList = [
    {
      text: "Shard 1",
      link: "/transactions/shard/0",
    },
    {
      text: "Shard 2",
      link: "/transactions/shard/1",
    },
    {
      text: "Shard 3",
      link: "/transactions/shard/3",
    },
  ];

  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  const [dataPerRow, setDataPerRow] = useState(10);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(TransctionPageTableCol.slice(0, dataPerRow));
  }, [dataPerRow]);

  return (
    <section>
      <div className="container">
        <h1 className="title-2 dark-white-color fw-700 mb-4">Transactions</h1>
        <BlockFilter filtersList={filtersList} />
        <div
          className={`${lightTheme ? style.wrapper_l : style.wrapper_d} ${
            style.wrapper
          }`}
        >
          <TransctionPageTableHeader dataPerRow={dataPerRow} />
          <TransctionPageTable datas={datas} />
          <BlockPageDataTableFooter
            dataPerRow={dataPerRow}
            setDataPerRow={setDataPerRow}
          />
        </div>
      </div>
    </section>
  );
}

export default TransctionId;
