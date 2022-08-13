import style from "../../styles/Statics.module.css";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";

const StaticsContent = ({ mainText, subText, des, icon, popup }) => {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className={`${style.content}`}>
      <div className={style.icon}>
        <Icon
          icon={icon}
          className={lightTheme ? style.icon_l : style.icon_d}
        />
      </div>
      <div className={style.text}>
        <span
          className={`${lightTheme ? style.main_text_l : style.main_text_d} ${
            style.main_text
          }`}
        >
          {mainText}
        </span>
        <p className={`${popup && style.show_popup}  ${style.sub_text}`}>
          <span className={lightTheme ? style.sub_text_l : style.sub_text_d}>
            {subText}{" "}
          </span>
          {des && (
            <span className={`color-red-2 ${style.descrise}`}> {des}</span>
          )}

          {popup && (
            <div className={style.popup}>
              <div
                className={`${
                  lightTheme ? style.popup_content_l : style.popup_content_d
                } ${style.popup_content}`}
              >
                <div>
                  <p>Shard 0</p>
                  <p>
                    <b>2.00s</b>
                  </p>
                </div>
                <div>
                  <p>Shard 0</p>
                  <p>
                    <b>2.00s</b>
                  </p>
                </div>
                <div>
                  <p>Shard 0</p>
                  <p>
                    <b>2.00s</b>
                  </p>
                </div>
                <div>
                  <p>Shard 0</p>
                  <p>
                    <b>2.00s</b>
                  </p>
                </div>
              </div>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default StaticsContent;
