import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/BlockHash.module.css";
import Link from "next/link";
import { copyText } from "./../../lib/CopyFunction";

function BlockHasNormalCopyWithLink({ title, value, link }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <tr>
      <th>
        <Icon icon="ant-design:question-circle-outlined" /> <span>{title}</span>
      </th>
      <td>
        <Icon
          className={lightTheme ? style.copy_l : style.copy_d}
          icon="ic:outline-copy-all"
          onClick={() => copyText(value)}
        />
        {link ? (
          <Link href={link}>
            <a className={lightTheme ? style.copy_l : style.copy_d}>{value}</a>
          </Link>
        ) : (
          { value }
        )}
      </td>
    </tr>
  );
}

export default BlockHasNormalCopyWithLink;
