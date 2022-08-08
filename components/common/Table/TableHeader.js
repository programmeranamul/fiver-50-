import { useTheme } from "../../../lib/ThemeContext";
import style from "../../../styles/TableHeader.module.css";
import { Icon } from "@iconify/react";
import TablePagination from "./TablePagination";

function TableHeader() {
  const { theme, setTheme, my } = useTheme();
  return (
    <div
      className={`${theme === "Light" ? style.wrapper_l : style.wrapper_d} ${
        style.wrapper
      }`}
    >
      <p
        className={`${theme === "Light" ? style.text_l : style.text_d} ${
          style.text
        }`}
      >
        <b className={style.cunt}>25 </b>tokens shown
      </p>
      <TablePagination />
    </div>
  );
}

export default TableHeader;
