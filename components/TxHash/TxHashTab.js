import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/TxHashTab.module.css";
import { useState } from "react";

function TxHashTab({ activeTab, setActiveTab, lists }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  return (
    <div className={style.wrapper}>
      {lists.map((list, index) => (
        <div
          onClick={() => setActiveTab(list)}
          key={index}
          className={`${
            list === activeTab ? style.tab_active : style.tab_inactive
          } ${style.tab} ${lightTheme ? style.tab_l : style.tab_d}`}
        >
          <p className="mb-0 fs-14">{list}</p>
        </div>
      ))}
    </div>
  );
}

export default TxHashTab;
