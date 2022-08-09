import style from "../../styles/ShowMoreBtn.module.css";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";

function ShowMoreBtn({ showMore, setShowMore }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className="text-center">
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

export default ShowMoreBtn;
