import style from "../../styles/TxTransactionDetails.module.css";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import Link from "next/link";
import MyToolTip from './../../lib/MyToolTip';

function TxNormalCol({ title, value,tooltip }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <tr className={`${style.tr} ${lightTheme ? style.tr_l : style.tr_d}`}>
      <th>
      <MyToolTip>
          <Icon
            icon="ant-design:question-circle-outlined"
            content={tooltip}
            className="me-1"
          />
        </MyToolTip> {title}
      </th>
      <td className="d-flex align-items-center">
        <span>{value}</span>
      </td>
    </tr>
  );
}

export default TxNormalCol;
