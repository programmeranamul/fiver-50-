import React, { useState } from "react";
import { Icon } from "@iconify/react";
import style from "../../styles/InternalTransactionsTable.module.css";
import Link from "next/link";
import { useTheme } from "../../lib/ThemeContext";

function SingleTransctionCol({ data }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  const [showNextCol, setShowNtxtCol] = useState(false);
  return (
    <>
      <tr className={`${lightTheme ? style.tr_l : style.tr_d} ${style.tr}`}>
        <td
          onClick={() => setShowNtxtCol(!showNextCol)}
          className={`${style.td} ${style.td_1}`}
        >
          <Icon icon="dashicons:arrow-down-alt2" />
        </td>
        <td className={style.td}>{data.type}</td>
        <td className={style.td}>
          <span>
            <Icon
              className={lightTheme ? style.copy_l : style.copy_d}
              icon="ic:outline-copy-all"
            />
          </span>{" "}
          <Link href="/">
            <a>{data.form}</a>
          </Link>
        </td>
        <td className={style.td}>
          <span>
            <Icon
              className={lightTheme ? style.copy_l : style.copy_d}
              icon="ic:outline-copy-all"
            />{" "}
          </span>
          <Link href="/">
            <a>{data.to}</a>
          </Link>
        </td>
        <td className={style.td}>{data.oneValue}</td>
      </tr>

      {showNextCol ? (
        <tr
          className={`${lightTheme ? style.m_tr_l : style.m_tr_d} ${
            style.m_tr
          } `}
        >
          <td className={style.m_td} colSpan={5}>
            {data.nextRow ? data.nextRow : <Icon icon="ant-design:line-outlined" />}
          </td>
        </tr>
      ) : (
        ""
      )}
    </>
  );
}

export default SingleTransctionCol;
