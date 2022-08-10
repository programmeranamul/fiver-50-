import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/BlockHash.module.css";
import Link from "next/link";

function BlockHashTransactionsCol({ title, links }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  console.log("links",links );
  return (
    <tr>
      <th>
        <Icon icon="ant-design:question-circle-outlined" /> <span>{title}</span>
      </th>
      <td className="flex-column align-items-start">        
        {links?.map((link, index) => (
          <div key={index} className="d-flex align-items-center">
            <Icon
              className={lightTheme ? style.copy_l : style.copy_d}
              icon="ic:outline-copy-all"
            />
            <Link href={"/block/"+link}>
              <a className={lightTheme ? style.copy_l : style.copy_d}>
                {link}
              </a>
            </Link>
          </div>
        ))}
      </td>
    </tr>
  );
}

export default BlockHashTransactionsCol;
