import style from "../../../styles/TableHeader.module.css";
import { Icon } from "@iconify/react";
import { useTheme } from "../../../lib/ThemeContext";

function TablePagination() {
    const { theme, setTheme, my } = useTheme();
  return (
    <div className={style.pagination_wrapper}>
    <div
      className={`${theme === "Light" ? style.single_l : style.single_d} ${
        style.single
      }`}
    >
      {" "}
      First
    </div>
    <div
      className={`${theme === "Light" ? style.single_l : style.single_d} ${
        style.single
      }`}
    >
      <Icon
        icon="ooui:previous-ltr"
        className={theme === "Light" ? style.icon_l : style.icon_d}
      />
    </div>
    <div
      className={`${theme === "Light" ? style.single_l : style.single_d} ${
        style.single
      }`}
    >
      Page 1 of 790
    </div>
    <div
      className={`${theme === "Light" ? style.single_l : style.single_d} ${
        style.single
      }`}
    >
      <Icon
        icon="ooui:previous-rtl"
        className={theme === "Light" ? style.icon_l : style.icon_d}
      />
    </div>
  </div>
  )
}

export default TablePagination