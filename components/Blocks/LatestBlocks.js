import React from "react";
import BlockDataTable from "./BlockDataTable";
import style from "../../styles/Home.module.css";
import {
  latestedBlockTableRow,
  latestedBlockTableData,
} from "./../../data/latestedBlockData";
import { useTheme } from "../../lib/ThemeContext";

function LatestBlocks() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <section className={style.blocks_table}>
      <div className={`${style.section_wrapper} ${lightTheme? style.s_w_l : style.s_w_d}`}>
        <div
          className={`${style.title} ${lightTheme? style.t_l : style.t_d} d-flex align-items-center justify-content-between`}
        >
          <h3>Latest Transactions</h3>
          <div>
            <select
              className={`form-select ${style.my_select} ${lightTheme?style.my_select_l : style.my_select_d }`}             
            >
              <option value="Shard 0">Shard 0</option>
              <option value="Shard 0">Shard 0</option>
              <option value="Shard 0">Shard 0</option>
            </select>
          </div>
        </div>

        <BlockDataTable
          tableRow={latestedBlockTableRow}
          tableData={latestedBlockTableData}
        />
      </div>
    </section>
  );
}

export default LatestBlocks;
