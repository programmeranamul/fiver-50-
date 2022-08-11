import style from "../../styles/AddressInfo.module.css";
import { useTheme } from "../../lib/ThemeContext";

function AddressBlanceCol({title,value}) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className={`${lightTheme ? style.col_l : style.col_d} ${style.col}`}>
      <p className={style.key}>{title}</p>
      <div className={`${style.value} ${style.blance_value}`}>
        <select
          className={`${lightTheme ? style.my_select_l : style.my_select_d} ${
            style.my_select
          } form-select`}
        >
          {
            value.map(el => <option key={el} value={el}>{el}</option> )
          }
         
        </select>
      </div>
    </div>
  );
}

export default AddressBlanceCol;
