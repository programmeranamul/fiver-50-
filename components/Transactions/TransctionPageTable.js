import React from "react";
import style from "../../styles/BlockPageDataTableMain.module.css";
import Link from "next/link";
import { useTheme } from "../../lib/ThemeContext";
import { Icon } from "@iconify/react";
import { TransctionPageTableRow } from "./../../data/TransctionPageTableData";

function TransctionPageTable({ datas }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div
      className={`${style.table_warpper} ${
        lightTheme ? style.table_warpper_l : style.table_warpper_d
      }`}
    >
      <table>
        <thead>
          <tr>
            {TransctionPageTableRow.map((el) => (
              <th key={el}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td className={`${lightTheme? style.i_l : style.i_d} ${style.td}`}>
              {data.shard[0]}
                  <Icon icon="akar-icons:arrow-right" />
                {data.shard[0]}
              </td>
              <td>
                <div className={style.link}>
                  <span>
                    <Icon icon="ic:outline-copy-all" />
                  </span>
                  <Link href="/">
                    <a>
                      <span>{data.hash.text}</span>
                    </a>
                  </Link>
                </div>
              </td>
              <td className={style.td}>
                <Link href="/">
                  <a>{data.blockNumber}</a>
                </Link>
              </td>
              <td>
                <div className={style.link}>
                  <span>
                    <Icon icon="ic:outline-copy-all" />
                  </span>
                  <Link href="/">
                    <a>
                      <span>{data.form}</span>
                    </a>
                  </Link>
                </div>
              </td>
              <td>
                <div className={style.link}>
                  <span>
                    <Icon icon="ic:outline-copy-all" />
                  </span>
                  <Link href="/">
                    <a>
                      <span>{data.to}</span>
                    </a>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransctionPageTable;