import { useTheme } from "../../lib/ThemeContext";
import ViewAllBtn from "./ViewAllBtn";
import style from "../../styles/DataTable.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";


function DataTable({ tableRow, tableData }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              {tableRow.map((row) => (
                <th
                  className={lightTheme ? style.th_l : style.th_d}
                  key={row.text}
                >
                  {row.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className={lightTheme ? style.tr_l : style.tr_d}>
                <td className={lightTheme ? style.sheard_l : style.sheard_d}>
                  {data?.shard[0]} <Icon icon="akar-icons:arrow-right" />
                  {data?.shard[1]}
                </td>
                <td>
                  <Link href="/">
                    <a className={lightTheme ? style.link_l : style.link_d}>
                      {data?.hash}
                    </a>
                  </Link>
                </td>
                <td>
                  <Link href="/">
                    <a className={lightTheme ? style.link_l : style.link_d}>
                      {data?.from}
                    </a>
                  </Link>
                </td>
                <td>
                  <Link href="/">
                    <a className={lightTheme ? style.link_l : style.link_d}>
                      {data?.to}
                    </a>
                  </Link>
                </td>
                <td className={lightTheme ? style.time_l : style.time_d}>
                  {data?.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4">
        <ViewAllBtn text="VIEW ALL TRANSACTIONS" link="/transactions/shard/0" />
      </div>
    </>
  );
}

export default DataTable;
