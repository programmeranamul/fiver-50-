import style from "../../styles/TxTransactionDetails.module.css";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import Link from "next/link";
import { copyText } from "./../../lib/CopyFunction";
import MyToolTip from './../../lib/MyToolTip';

function TxInputViewCol({tooltip}) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  const hash =
    "0x528be0a90000000000000000000000000000000000000000000000000000000000044720";

  return (
    <tr className={`${style.tr} ${lightTheme ? style.tr_l : style.tr_d}`}>
      <th>
      <MyToolTip>
          <Icon
            icon="ant-design:question-circle-outlined"
            content={tooltip}
            className="me-1"
          />
        </MyToolTip> Input
      </th>
      <td className="d-flex align-items-center">
        <span>
          <Icon
            className={style.copy}
            icon="ic:outline-copy-all"
            onClick={() => copyText(hash)}
          />
          <Link href={`/tx/${hash}`}>
            <a>{hash.slice(0, 60)}...</a>
          </Link>
        </span>
      </td>
    </tr>
  );
}

export default TxInputViewCol;
