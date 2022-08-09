import style from "../../styles/TxTransactionDetails.module.css";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import Link from "next/link";

function TxInputViewCol() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  const hash = '0x528be0a90000000000000000000000000000000000000000000000000000000000044720'

  return (
    <tr className={`${style.tr} ${lightTheme ? style.tr_l : style.tr_d}`}>
      <th>
        <Icon icon="ant-design:question-circle-outlined" /> Input
      </th>
      <td className="d-flex align-items-center">
        <span>
          <Icon className={style.copy} icon="ic:outline-copy-all" />
          <Link href="/">
          <a>{hash.slice(0,60)}...</a>
          </Link>
        </span>        
      </td>
    </tr>
  );
}

export default TxInputViewCol;
