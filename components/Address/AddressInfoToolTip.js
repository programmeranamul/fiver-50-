import style from "../../styles/AddressInfo.module.css";
import { useTheme } from "../../lib/ThemeContext";
import MyToolTip from "./../../lib/MyToolTip";
import { Icon } from "@iconify/react";

function AddressInfoToolTip({ title, value, tooltip }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className={`${lightTheme ? style.col_l : style.col_d} ${style.col}`}>
      <p className={style.key}>{title}</p>
      <p className={`${style.value} ${style.value_n}`}>
        {" "}
        {value ? value : <Icon icon="ant-design:line-outlined" />}{" "}
        <MyToolTip>
          <Icon icon="ant-design:question-circle-outlined" content={tooltip} />
        </MyToolTip>{" "}
      </p>
    </div>
  );
}

export default AddressInfoToolTip;
