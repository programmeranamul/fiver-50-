import React from 'react'
import { useTheme } from '../../lib/ThemeContext';
import style from "../../styles/AddressTransactionsTable.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { copyText } from "./../../lib/CopyFunction";

function AddressHoldesTable({rowData, data}) {
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
              <span className={lightTheme ? style.nr_l : style.nr_d}>
                {el.rank}
              </span>
            </td>
            <td>
                <div className="d-flex align-items-center">
                  <Icon
                    className={lightTheme ? style.copy_l : style.copy_d}
                    icon="ic:outline-copy-all"
                    onClick={() => copyText(el.address)}
                  />
                  <Link href={`/address/${el.address}`}>
                    <a className={`${style.noWrap} ${lightTheme ? style.link_l : style.link_d}`}>
                      {el.address}
                    </a>
                  </Link>
                </div>
              </td>
              <td>
              <span className={lightTheme ? style.nr_l : style.nr_d}>
                {el.blance}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default AddressHoldesTable