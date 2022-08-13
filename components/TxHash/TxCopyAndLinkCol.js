import style from "../../styles/TxTransactionDetails.module.css";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import Link from "next/link";
import { copyText } from "./../../lib/CopyFunction";
import MyToolTip from './../../lib/MyToolTip';

function TxCopyAndLinkCol({ link, value, title,tooltip }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <tr className={`${style.tr} ${lightTheme ? style.tr_l : style.tr_d}`}>
      <th>
      <MyToolTip>
          <Icon
            icon="ant-design:question-circle-outlined"
            content={tooltip}
          />
        </MyToolTip>{" "} {title}
      </th>
      <td className="d-flex align-items-center">
        <span>
          <Icon
            className={style.copy}
            icon="ic:outline-copy-all"
            onClick={() => copyText(value)}
          />
        </span>
        {link ? (
          <Link
            href={link}
            className={lightTheme ? style.link_l : style.link_d}
          >
            <a>{value}</a>
          </Link>
        ) : (
          <span>{value}</span>
        )}
      </td>
    </tr>
  );
}

export default TxCopyAndLinkCol;
