import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { AddressNftTransfareDataRow } from "./../../data/AddressNftTransfareData";
import style from "../../styles/AddressNftTransfare.module.css";
import { useState } from "react";
import { useTheme } from "../../lib/ThemeContext";
import { copyText } from "./../../lib/CopyFunction";

function AddressNftTransfareTable({ data, hideTokeId }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className={style.table_wrapper}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={`${style.tr} ${lightTheme ? style.tr_l : style.tr_d}`}>
            {AddressNftTransfareDataRow.map((el) => (
              <th key={el}>{el === "Type" ? "" : el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr className={style.tr} key={el.hash}>
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
                  {el.event || el.method}
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Icon
                    className={lightTheme ? style.copy_l : style.copy_d}
                    icon="ic:outline-copy-all"
                    onClick={() => copyText(el.form)}
                  />
                  <Link href={`/address/${el.form}`}>
                    <a className={lightTheme ? style.link_l : style.link_d}>
                      {el.form}
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
              {!hideTokeId && (
                <td>
                  <span className={lightTheme ? style.nr_l : style.nr_d}>
                    {el.tokenId}
                  </span>
                </td>
              )}

              <td>
                <div className="d-flex align-items-center">
                  <Icon
                    className={lightTheme ? style.copy_l : style.copy_d}
                    icon="ic:outline-copy-all"
                    onClick={() => copyText(el.token.link)}
                  />
                  <Link href={`/address/${el.token.link}`}>
                    <a className={lightTheme ? style.link_l : style.link_d}>
                      {el.token.name}
                    </a>
                  </Link>
                </div>
              </td>
              <td className={lightTheme ? style.time_l : style.time_d}>
                <span>{el.timestamp} </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddressNftTransfareTable;
