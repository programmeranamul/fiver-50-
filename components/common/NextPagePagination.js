import { Icon, InlineIcon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/NextPagePagination.module.css";



function NextPagePagination() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div
      className={`${lightTheme ? style.wrapper_l : style.wrapper_d} ${
        style.wrapper
      }`}
    >
      <div>
        <Icon icon="ep:arrow-left-bold" />
      </div>
      <div>
        <Icon icon="ep:arrow-right-bold" />
      </div>
    </div>
  );
}

export default NextPagePagination;
