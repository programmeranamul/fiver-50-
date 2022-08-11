import React from "react";
import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/AddressTransactionsTable.module.css";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { copyText } from "./../../lib/CopyFunction";

function AddressTransactionsTable({ rowData, data }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className={style.table_wrapper}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={`${style.tr} ${lightTheme ? style.tr_l : style.tr_d}`}>
            {rowData.map((el) => (
              <th key={el}>{el === "type" ? "" : el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.hash} className={style.tr}>
              <td>
                <div className="d-flex align-items-center">
                  <Icon
                    className={lightTheme ? style.copy_l : style.copy_d}
                    icon="ic:outline-copy-all"
                    onClick={() => copyText(el.hash)}
                  />
                  <Link href={`/tx/${el.hash}`}>
                    <a className={lightTheme ? style.link_l : style.link_d}>
                      {el.hash}
                    </a>
                  </Link>
                </div>
              </td>
              <td>
                <span className={lightTheme ? style.md_l : style.md_d}>
                  {el.method || el.event}
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Icon
                    className={lightTheme ? style.copy_l : style.copy_d}
                    icon="ic:outline-copy-all"
                    onClick={() => copyText(el.from)}
                  />
                  <Link href={`/address/${el.from}`}>
                    <a className={lightTheme ? style.link_l : style.link_d}>
                      {el.from}
                    </a>
                  </Link>
                </div>
              </td>
              <td>
                <span
                  className={
                    el.type == "IN" ? style.type_l_in : style.type_d_out
                  }
                >
                  {el.type}
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Icon
                    className={lightTheme ? style.copy_l : style.copy_d}
                    icon="ic:outline-copy-all"
                    onClick={() => copyText(el.to)}
                  />
                  <Link href={`/address/${el.to}`}>
                    <a className={lightTheme ? style.link_l : style.link_d}>
                      {el.to}
                    </a>
                  </Link>
                </div>
              </td>
              <td>
                <span className={lightTheme ? style.nr_l : style.nr_d}>
                  {el.Value}
                </span>
              </td>
              <td className={lightTheme ? style.time_l : style.time_d}>
                <span>{el.Timestamp} </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddressTransactionsTable;
