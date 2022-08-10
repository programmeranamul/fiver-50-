import style from "../../styles/HrcDataTable.module.css";
import { HrcDataTableRowData } from "./../../data/HrcDataTableData";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import Link from "next/link";
import copy from 'copy-text-to-clipboard';
import { copyText } from './../../lib/CopyFunction';

function HrcDataTable({ data }) {
  const { theme, setTheme, my } = useTheme();

  const handelCopy = (text) => {
    copy(text)
  }

  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={style.thead_tr}>
            {HrcDataTableRowData.map((data) => (
              <th
                key={data}
                className={`${theme === "Light" ? style.th_l : style.th_d} ${
                  style.th
                }`}
              >
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {data.map((el) => (
            <tr key={el.name} className={""}>
              <td
                className={`${theme === "Light" ? style.td_l : style.td_d} ${
                  style.td
                }`}
              >
                {el.name}
              </td>
              <td
                className={`${theme === "Light" ? style.td_l : style.td_d} ${
                  style.td
                }`}
              >
                {el.symbol}
              </td>
              <td
                className={`${theme === "Light" ? style.td_l : style.td_d} ${
                  style.td
                }`}
              >
                <div
                  className={`${
                    theme === "Light" ? style.address_l : style.address_d
                  } ${style.address}`}
                >
                  <span onClick={() => handelCopy(el.address)}>
                    <Icon icon="ic:outline-copy-all" onClick={() => copyText(el.address)}/>
                  </span>
                  <Link
                    href={`/address/${el.address}`}                   
                  >
                    <a  className={
                      theme === "Light" ? style.address_l : style.address_d
                    }>{el.address}</a>
                  </Link>
                </div>
              </td>
              <td
                className={`${theme === "Light" ? style.td_l : style.td_d} ${
                  style.td
                }`}
              >
                <div className={style.icon_text}>
                  <span>
                    <b>{el.circulatingSupply}</b>
                  </span>
                  <span className="d-flex">
                    <Icon icon="ant-design:question-circle-outlined" />
                  </span>
                </div>
              </td>
              <td
                className={`${theme === "Light" ? style.td_l : style.td_d} ${
                  style.td
                }`}
              >
                <div className={style.icon_text}>
                  <span>
                    <b>{el.totalSupply}</b>
                  </span>
                  <span className="d-flex">
                    <Icon icon="ant-design:question-circle-outlined" />
                  </span>
                </div>
              </td>
              <td
                className={`${theme === "Light" ? style.td_l : style.td_d} ${
                  style.td
                }`}
              >
                <div className={style.icon_text}>
                  <span>{el.holders}</span>
                  <span className="d-flex">
                    <Icon icon="ant-design:question-circle-outlined" />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HrcDataTable;
