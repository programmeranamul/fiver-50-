import style from "../../styles/TxTransactionDetails.module.css";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import Link from "next/link";

function TxNormalCol({title, value}) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <tr className={`${style.tr} ${lightTheme ? style.tr_l : style.tr_d}`}>
      <th>
        <Icon icon="ant-design:question-circle-outlined" /> {title}
      </th>
      <td className="d-flex align-items-center">
        <span>{value}</span>
      </td>
    </tr>
  );
}

export default TxNormalCol;
