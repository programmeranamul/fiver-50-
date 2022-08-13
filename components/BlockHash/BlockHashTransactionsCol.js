import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/BlockHash.module.css";
import Link from "next/link";
import { copyText } from "./../../lib/CopyFunction";
import MyToolTip from './../../lib/MyToolTip';

function BlockHashTransactionsCol({ title, links,tooltip }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  console.log("links", links);
  return (
    <tr>
      <th>
      <MyToolTip>
          <Icon
            icon="ant-design:question-circle-outlined"
            content={tooltip}
          />
        </MyToolTip>  <span>{title}</span>
      </th>
      <td className="flex-column align-items-start">
        {links?.map((link, index) => (
          <div key={index} className="d-flex align-items-center">
            <Icon
              className={lightTheme ? style.copy_l : style.copy_d}
              icon="ic:outline-copy-all"
              onClick={() => copyText(link)}
            />
            <Link href={"/tx/" + link}>
              <a className={lightTheme ? style.copy_l : style.copy_d}>{link}</a>
            </Link>
          </div>
        ))}
      </td>
    </tr>
  );
}

export default BlockHashTransactionsCol;
