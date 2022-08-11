import React from "react";
import { useTheme } from "../../lib/ThemeContext";
import NextPagePagination from "./../common/NextPagePagination";
import style from "../../styles/BlockDataTable.module.css";

function TransctionPageTableHeader({ dataPerRow }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div
      className={`${style.tab_hader} ${
        lightTheme ? style.tab_hader_l : style.tab_hader_d
      }`}
    >
      <p className="mb-0">
        <b> {dataPerRow}</b> transactions shown
      </p>
      <NextPagePagination />
    </div>
  );
}

export default TransctionPageTableHeader;
