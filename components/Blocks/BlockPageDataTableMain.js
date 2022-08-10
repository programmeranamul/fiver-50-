import style from "../../styles/BlockPageDataTableMain.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import { BlockPageDataTableMainRow } from "./../../data/BlockPageDataTableMainData";
import { copyText } from "./../../lib/CopyFunction";

function BlockPageDataTableMain({ datas }) {
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
            {BlockPageDataTableMainRow.map((el) => (
              <th key={el}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td className={style.td}>{data.Shard}</td>
              <td>
                <Link href={`/block/${data.Height.link}`}>
                  <a>{data.Height.text}</a>
                </Link>
              </td>
              <td className={style.td}>{data.Timestamp}</td>
              <td>
                <div className={style.link}>
                  <span>
                    <Icon
                      onClick={() => copyText(data.Miner)}
                      icon="ic:outline-copy-all"
                    />
                  </span>
                  <Link href={`/address/${data.Miner}`}>
                    <a>
                      <span>{data.Miner}</span>
                    </a>
                  </Link>
                </div>
              </td>
              <td className={style.td}>{data.Transactions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlockPageDataTableMain;
