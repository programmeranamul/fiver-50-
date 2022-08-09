import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/BlockDataTable.module.css"

function BlockPageDataTableHeader() {
    const { theme, setTheme, my } = useTheme();
    const lightTheme = theme === "Light";
  return (
    <div
    className={`${style.tab_hader} ${
      lightTheme ? style.tab_hader_l : style.tab_hader_d
    }`}
  >
    <p className="mb-0">
      <b> 10</b> blocks shown, from <b>#32,484,144</b> to <b>#32,484,153</b>
    </p>
  </div>
  )
}

export default BlockPageDataTableHeader