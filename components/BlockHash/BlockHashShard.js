import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/BlockHash.module.css";
import Link from "next/link";
import { copyText } from "./../../lib/CopyFunction";
import MyToolTip from "./../../lib/MyToolTip";

function BlockHashShard({ title, tooltip, link, value }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <tr>
      <th>
        <MyToolTip>
          <Icon icon="ant-design:question-circle-outlined" content={tooltip} />
        </MyToolTip>{" "}
        <span>{title}</span>
      </th>
      <td>
        <div>
          <select
            className={`${style.my_select} ${
              lightTheme ? style.my_select_l : style.my_select_d
            } form-select`}
            aria-label="Default select example"
          >
            <option className={style.my_op} value="1">
              Shard 0
            </option>
            <option className={style.my_op} value="1">
              Shard 1
            </option>
            <option className={style.my_op} value="1">
              Shard 2
            </option>
          </select>
        </div>
      </td>
    </tr>
  );
}

export default BlockHashShard;
