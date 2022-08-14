import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";

function MyTippy({ content, children }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <Tippy content={<span>{content}</span>}>
      <button className="tp-btn">{children}</button>
    </Tippy>
  );
}

export default MyTippy;
