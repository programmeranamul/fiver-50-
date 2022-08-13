import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/TxTransactionDetails.module.css";
import MyToolTip from './../../lib/MyToolTip';

function TxSheardCol({ shardID,tooltip }) {
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
        </MyToolTip>{" "} Shard ID
      </th>
      <td>
        {shardID[0]}{" "}
        <Icon
          icon="ant-design:arrow-right-outlined"
          className={lightTheme ? style.icon_l : style.icon_d}
        />{" "}
        {shardID[1]}
      </td>
    </tr>
  );
}

export default TxSheardCol;
