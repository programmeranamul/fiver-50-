import style from "../../styles/HrcDataTable.module.css";
import { HrcDataTableRowData } from "./../../data/HrcDataTableData";
import { Icon } from "@iconify/react";

function HrcDataTable({ data }) {
  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={style.thead_tr}>
            {HrcDataTableRowData.map((data) => (
              <th key={data} className={style.th}>
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {data.map((el) => (
            <tr key={el.name} className={""}>
              <td className={style.td}>{el.name}</td>
              <td className={style.td}>{el.symbol}</td>
              <td className={style.td}>
                <a hrfe="/" className={style.address}>
                  <span>
                    <Icon icon="ic:outline-copy-all" />
                  </span>
                  <span>{el.address}</span>
                </a>
              </td>
              <td className={style.td}>
                <div className={style.icon_text}>
                  <span>
                    <b>{el.circulatingSupply}</b>
                  </span>
                  <span className="d-flex">
                    <Icon icon="ant-design:question-circle-outlined" />
                  </span>
                </div>
              </td>
              <td className={style.td}>
                <div className={style.icon_text}>
                  <span>
                    <b>{el.totalSupply}</b>
                  </span>
                  <span className="d-flex">
                    <Icon icon="ant-design:question-circle-outlined" />
                  </span>
                </div>
              </td>
              <td className={style.td}>
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
