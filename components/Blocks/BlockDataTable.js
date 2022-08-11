import { useTheme } from "../../lib/ThemeContext";
import ViewAllBtn from "./../common/ViewAllBtn";
import style from "../../styles/BlockDataTable.module.css";
import Link from "next/link";

function BlockDataTable({ tableRow, tableData }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              {tableRow.map((row) => (
                <th className="color-deep-gray" key={row.text}>
                  {row.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td
                  className={`${lightTheme ? style.td_l : style.td_d} ${
                    lightTheme ? style.sh_l : style.sh_d
                  }`}
                >
                  {data?.shard}
                </td>
                <td
                  className={`${lightTheme ? style.td_l : style.td_d} ${
                    lightTheme ? style.sh_l : style.sh_d
                  }`}
                >
                  <Link href={`/block/${data.link}`}>
                    <a>{data?.height}</a>
                  </Link>
                </td>
                <td
                  className={`${lightTheme ? style.td_l : style.td_d} ${
                    lightTheme ? style.tr_l : style.tr_d
                  }`}
                >
                  {data?.transactions}
                </td>
                <td
                  className={`${lightTheme ? style.td_l : style.td_d} ${
                    lightTheme ? style.tm_l : style.tm_d
                  }`}
                >
                  {data?.imestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4">
        <ViewAllBtn text="VIEW ALL BLOCKS" link="/blocks/shard/1" />
      </div>
    </>
  );
}

export default BlockDataTable;
