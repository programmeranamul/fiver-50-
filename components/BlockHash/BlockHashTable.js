import React from "react";
import BlockHashTableAllView from "./BlockHashTableAllView";
import style from "../../styles/BlockHash.module.css";
import { useTheme } from "../../lib/ThemeContext";
import { useState } from "react";
import { Icon } from "@iconify/react";

function BlockHashTable() {
  const { theme, setTheme, my } = useTheme();
  const [showMore, setShowMore] = useState(true);
  const lightTheme = theme === "Light";
  return (
    <div
      className={`${lightTheme ? style.wrapper_l : style.wrapper_d} ${
        style.wrapper
      }`}
    >
      <BlockHashTableAllView showMore={showMore}/>
      <button
        className={`${style.btn} ${lightTheme ? style.btn_l : style.btn_d}`}
        onClick={() => setShowMore(!showMore)}
      >
        Show {showMore ? "Less" : "More"}
        <Icon
          icon="eva:arrow-up-fill"
          className={showMore ? "" : style.opend}
        />
      </button>
    </div>
  );
}

export default BlockHashTable;
