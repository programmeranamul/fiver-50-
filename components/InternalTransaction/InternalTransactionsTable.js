import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/InternalTransactionsTable.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import SingleTransctionCol from "./../BlockHash/SingleTransctionCol";

function InternalTransactionsTable({ datas }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  return (
    <div className={style.table_wrapper}>
      <table className={style.table}>
        <thead>
          <tr className={`${lightTheme ? style.tr_l : style.tr_d} ${style.tr}`}>
            <th></th>
            <th>Type</th>
            <th>From</th>
            <th>To</th>
            <th>ONEValue</th>
          </tr>
          {datas.map((data, index) => (
            <SingleTransctionCol data={data} key={index} />
          ))}
        </thead>
      </table>
    </div>
  );
}

export default InternalTransactionsTable;
