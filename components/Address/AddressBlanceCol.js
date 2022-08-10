import style from "../../styles/AddressInfo.module.css";
import { useTheme } from "../../lib/ThemeContext";

function AddressBlanceCol() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className={`${lightTheme ? style.col_l : style.col_d} ${style.col}`}>
      <p className={style.key}>Address</p>
      <div className={`${style.value} ${style.blance_value}`}>
        <select
          className={`${lightTheme ? style.my_select_l : style.my_select_d} ${
            style.my_select
          } form-select`}
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
}

export default AddressBlanceCol;
