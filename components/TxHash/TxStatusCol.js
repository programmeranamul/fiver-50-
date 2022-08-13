import style from "../../styles/TxTransactionDetails.module.css";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import MyToolTip from './../../lib/MyToolTip';

function TxStatusCol({ status,tooltip }) {
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
        </MyToolTip>  {" "}
       Status
      </th>
      <td className="d-flex align-items-center">
        {status ? (
          <div className={style.success_box}>
            <Icon icon="bx:error-circle" /> Success
          </div>
        ) : (
          <>
            <div className={style.error_box}>
              <Icon icon="bx:error-circle" /> Error
            </div>
            <p className={style.err_text}>Reverted:0x,Reverted:0x</p>{" "}
          </>
        )}
      </td>
    </tr>
  );
}

export default TxStatusCol;
