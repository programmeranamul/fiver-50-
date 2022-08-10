import style from "../../styles/AddressInfo.module.css";
import { useTheme } from "../../lib/ThemeContext";

function AddressNormalCol() {
    const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className={`${lightTheme ? style.col_l : style.col_d} ${style.col}`}>
    <p className={style.key}>Address</p>
    <p className={`${style.value} ${style.value_n}`}>
      0
    </p>
  </div>
  )
}

export default AddressNormalCol