import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/DropDown.module.css";

function MyDropDown({ open, children }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme == "Light";
  return (
    <div
      className={`${open ? style.dp_open : style.dp_close} ${
        style.dp_wrapper
      } ${lightTheme ? style.dp_l : style.dp_d}`}
    >
      {children}
    </div>
  );
}

export default MyDropDown;
