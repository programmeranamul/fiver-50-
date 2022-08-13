import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/BlockHash.module.css";
import Link from "next/link";
import { copyText } from "./../../lib/CopyFunction";
import MyToolTip from "../../lib/MyToolTip";



function BlockHashTableHashCol({ value, title, tooltip }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <tr
      className={`${style.has_col} ${style.tr} ${
        lightTheme ? style.tr_l : style.tr_d
      } ${lightTheme ? style.has_col_l : style.has_col_d}`}
    >
      <th>
        <MyToolTip>
          <Icon
            icon="ant-design:question-circle-outlined"
            content={tooltip}
          />
        </MyToolTip>       
        <span>{title}</span>
      </th>
      <td>
        <span>
          <Icon icon="ic:outline-copy-all" onClick={() => copyText(value)} />
        </span>
        <Link href={`/block/${value}`}>
          <a>{value}</a>
        </Link>
        <div className={style.icon_w}>
          <Link href={`/block/${value - 1}`}>
            <a>
              <Icon icon="ant-design:arrow-left-outlined" />
            </a>
          </Link>
          <Link href={`/block/${Number(value) + 1}`}>
            <a>
              <Icon icon="ant-design:arrow-right-outlined" />
            </a>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default BlockHashTableHashCol;
