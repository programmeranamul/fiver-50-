import style from "../../styles/Statics.module.css";
import { Icon } from "@iconify/react";

const StaticsContent = ({ mainText, subText, des, icon }) => {
  return (
    <div className={style.content}>
      <div className={style.icon}>
        <Icon icon={icon} className="blue-color" />
      </div>
      <div className={style.text}>
        <span className={style.main_text}>{mainText}</span>
        <p className={style.sub_text}>
          <span className="color-deep-gray-1">{subText} </span>
          {des && (
            <span className={`color-red-2 ${style.descrise}`}> {des}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default StaticsContent;
