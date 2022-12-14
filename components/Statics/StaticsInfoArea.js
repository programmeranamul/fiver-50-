import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/Statics.module.css";
import StaticsContent from "./StaticsContent";

function StaticsInfoArea() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  return (
    <article className={style.left_site}>
      <div
        className={`${style.content_sec} ${
          lightTheme ? style.c_s_l : style.c_s_d
        }`}
      >
        <StaticsContent
          mainText="ONE PRICE"
          subText="$ 0.0222"
          des=" (-2.713%)"
          icon="prime:chart-line"
          // icon="fa:line-chart"
        />
        <div className={style.line}></div>
        <div className={style.line_1}></div>
        <div className={style.line_2}></div>
        <StaticsContent
          mainText="TRANSACTION VOLUME"
          subText="754,125,091"
          icon="ri:arrow-left-right-line"
        />
      </div>
      <div
        className={`${style.content_sec} ${
          lightTheme ? style.c_s_l : style.c_s_d
        }`}
      >
        <StaticsContent mainText="SHARD COUNT" subText="4" icon="fa:cubes" />
        <div className={style.line}></div>
        <div
          className={`${lightTheme ? style.l_1_l : style.l_1_d} ${
            style.line_1
          }`}
        ></div>
        <div className={style.line_2}></div>
        <StaticsContent
          mainText="BLOCK LATENCY"
          subText="2.06s"
          icon="fa:group"
          popup={true}
        />
      </div>
    </article>
  );
}

export default StaticsInfoArea;
